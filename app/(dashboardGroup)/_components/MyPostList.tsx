import { getMyPosts } from "@/service/post/getMyPosts";

import { MyPostCard } from "./MyPostCard";

export const MyPostList = async () => {
  const posts = await getMyPosts();

  if (posts.length === 0) {
    return (
      <div className="rounded-lg border p-6 text-center">
        <h2 className="text-lg font-semibold">No Posts Found</h2>

        <p className="mt-2 text-muted-foreground">
          You have not created any posts yet.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <MyPostCard key={post.id} post={post} />
      ))}
    </div>
  );
};
