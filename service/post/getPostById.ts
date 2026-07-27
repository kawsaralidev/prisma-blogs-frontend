/* Get post by id */

import { IPost } from "@/lib/types";

export const getPostById = async (id: string) => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/post/${id}`);

  const result = await res.json();

  console.log(result); // Temporary

  if (!res.ok) {
    throw new Error(result.message || "Failed to fetch post.");
  }

  return result.data;
};
