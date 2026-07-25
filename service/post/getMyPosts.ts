"use server";

import { IPost } from "@/lib/types";
import { cookies } from "next/headers";

export const getMyPosts = async (): Promise<IPost[]> => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  const response = await fetch(
    `${process.env.BACKEND_API_URL}/api/post/my-posts`,
    {
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
      cache: "no-store",
    },
  );

  const result = await response.json();
  console.log(result);
  return result.data;
};
