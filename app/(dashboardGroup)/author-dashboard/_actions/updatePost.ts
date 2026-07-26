"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

type UpdatePostState = {
  success: boolean;
  statusCode: number;
  message: string;
  data?: unknown;
};

export const updatePostAction = async (
  prevState: UpdatePostState,
  formData: FormData,
) => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  const postId = formData.get("postId");

  const payload = {
    title: formData.get("title"),
    content: formData.get("content"),
    thumbnail: formData.get("thumbnail"),
    tags: formData
      .get("tags")
      ?.toString()
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean),

    isPremium: formData.get("isPremium") === "on",
  };

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/post/${postId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();

  if (result.success) {
    revalidatePath("/author-dashboard");
  }

  return result;
};
