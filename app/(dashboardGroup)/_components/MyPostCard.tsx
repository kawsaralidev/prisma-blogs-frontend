import { IPost } from "@/lib/types";

type MyPostCardProps = {
  post: IPost;
};

export const MyPostCard = ({ post }: MyPostCardProps) => {
  return (
    <div className="rounded-lg border p-4">
      <h2 className="text-xl font-semibold">{post.title}</h2>

      <p className="mt-2 text-muted-foreground line-clamp-2">{post.content}</p>

      <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
        <span>👁 {post.views}</span>

        <span>{post.status}</span>

        {post.isFeatured && <span>⭐ Featured</span>}

        {post.isPremium && <span>💎 Premium</span>}
      </div>
    </div>
  );
};
