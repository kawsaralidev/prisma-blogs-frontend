/* Posts Grid */

import { IPost } from "@/lib/types";
import PostCard from "./PostCard";

interface Props {
  posts: IPost[];
}

const PostGrid = ({ posts }: Props) => {
  if (!posts.length) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-xl font-semibold">No posts found.</h2>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostGrid;
