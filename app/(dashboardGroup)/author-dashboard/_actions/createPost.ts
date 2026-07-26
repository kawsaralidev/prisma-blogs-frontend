"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

type CreatePostState = {
  success: boolean;
  statusCode: number;
  message: string;
  data?: unknown;
};

export const createPostAction = async (
  prevState: CreatePostState,
  formData: FormData,
) => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

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

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/post`, {
    method: "POST",
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
