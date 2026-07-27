/* Get all public posts */

import { IPostResponse } from "@/lib/types";

interface GetPostsParams {
  searchTerm?: string;
  page?: string;
}

export const getAllPosts = async ({
  searchTerm = "",
  page = "1",
}: GetPostsParams): Promise<IPostResponse> => {
  const params = new URLSearchParams();

  if (searchTerm) {
    params.append("searchTerm", searchTerm);
  }

  params.append("page", page);

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

  return res.json();
};
