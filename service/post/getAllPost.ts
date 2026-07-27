/* Get all public posts */

import { IPost } from "@/lib/types";

export const getAllPosts = async (): Promise<IPost[]> => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/post`, {
    next: {
      tags: ["posts"],
    },
  });

  const result = await res.json();

  return result.data;
};
