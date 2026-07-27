/* Get all public posts */

import { IPost } from "@/lib/types";

interface GetPostsParams {
  searchTerm?: string;
}

export const getAllPosts = async ({
  searchTerm = "",
}: GetPostsParams): Promise<IPost[]> => {
  const params = new URLSearchParams();

  if (searchTerm) {
    params.set("searchTerm", searchTerm);
  }

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/post?${params.toString()}`,
    {
      next: {
        tags: ["posts"],
      },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts.");
  }

  const result = await res.json();

  return result.data;
};
