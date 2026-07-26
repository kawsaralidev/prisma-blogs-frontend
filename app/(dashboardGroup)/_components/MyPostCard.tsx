import Image from "next/image";
import { Eye } from "lucide-react";
import { DeletePostDialog } from "./DeletePostDialog";
import { IPost } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { PostFormDialog } from "./PostFormDialog";

type MyPostCardProps = {
  post: IPost;
};

export const MyPostCard = ({ post }: MyPostCardProps) => {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
      <div className="flex flex-col md:flex-row">
        <div className="relative h-56 w-full md:h-auto md:w-64">
          {post.thumbnail ? (
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gray-100 text-gray-500">
              No Image
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col justify-between p-5">
          <div>
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p className="mt-3 line-clamp-3 text-muted-foreground">
              {post.content}
            </p>
          </div>

          {/* Post Information Badges */}

          <div className="mt-5 flex flex-wrap gap-2">
            {/* Total Views */}
            <Badge variant="secondary">
              <Eye className="mr-1 h-4 w-4" />
              {post.views}
            </Badge>

            {/* Post Status */}
            <Badge>{post.status}</Badge>

            {/* Featured Badge */}
            {post.isFeatured && (
              <Badge className="bg-yellow-500">⭐ Featured</Badge>
            )}

            {/* Premium Badge */}
            {post.isPremium && (
              <Badge className="bg-purple-600">💎 Premium</Badge>
            )}
          </div>

          <div className="mt-6 flex gap-3">
            {/* Edit Post */}
            <PostFormDialog mode="edit" post={post} />

            {/* Delete Post */}
            <DeletePostDialog postId={post.id} />
          </div>
        </div>
      </div>
    </div>
  );
};
