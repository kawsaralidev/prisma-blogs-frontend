import { IPost } from "@/lib/types";
import Image from "next/image";

type MyPostCardProps = {
  post: IPost;
};

export const MyPostCard = ({ post }: MyPostCardProps) => {
  console.log(post.thumbnail);
  return (
    <div className="rounded-lg border p-5 shadow-sm">
      <div className="flex gap-5">
        <div className="relative h-36 w-52 overflow-hidden rounded-md">
          {post.thumbnail ? (
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gray-100 text-sm text-gray-500">
              No Image
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold">{post.title}</h2>

            <p className="mt-2 line-clamp-2 text-muted-foreground">
              {post.content}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
            <span>👁 {post.views}</span>

            <span>{post.status}</span>

            {post.isFeatured && <span>⭐ Featured</span>}

            {post.isPremium && <span>💎 Premium</span>}
          </div>
        </div>
      </div>
    </div>
  );
};
