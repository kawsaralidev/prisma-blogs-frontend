"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

type DeletePostState = {
  success: boolean;
  statusCode: number;
  message: string;
  data?: unknown;
};

export const deletePostAction = async (
  prevState: DeletePostState,
  formData: FormData,
) => {
  /* Get access token from cookies */
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  /* Get post id from form */
  const postId = formData.get("postId");

  /* Delete post request */
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/post/${postId}`, {
    method: "DELETE",
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
  });

  const result = await res.json();

  /* Refresh dashboard after successful delete */
  if (result.success) {
    revalidatePath("/author-dashboard");
  }

  return result;
};
