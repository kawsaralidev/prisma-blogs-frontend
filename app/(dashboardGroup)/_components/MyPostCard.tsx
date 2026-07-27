import Image from "next/image";
import { Eye, CalendarDays } from "lucide-react";
import { DeletePostDialog } from "./DeletePostDialog";
import { IPost } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { PostFormDialog } from "./PostFormDialog";

type MyPostCardProps = {
  post: IPost;
};

export const MyPostCard = ({ post }: MyPostCardProps) => {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex flex-col">
        {/* Post Thumbnail */}
        <div className="relative h-56 w-full overflow-hidden">
          {post.thumbnail ? (
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gray-100 text-gray-500">
              No Image
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col justify-between p-6">
          <div>
            {/* Post Title */}
            <h2 className="line-clamp-1 text-2xl font-bold">{post.title}</h2>

            {/* Post Content */}
            <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">
              {post.content}
            </p>
          </div>

          {/* Post Information Badges */}

          {/* Views & Status */}
          <div className="flex items-center gap-3">
            <Badge variant="secondary">
              <Eye className="mr-1 h-4 w-4" />
              {post.views}
            </Badge>

            <Badge
              className={
                post.status === "PUBLISHED"
                  ? "bg-green-600"
                  : post.status === "DRAFT"
                    ? "bg-yellow-500"
                    : "bg-red-500"
              }
            >
              {post.status}
            </Badge>
          </div>

          {/* Featured & Premium */}
          <div className="flex items-center gap-3">
            {post.isFeatured && (
              <Badge className="bg-yellow-500">⭐ Featured</Badge>
            )}

            {post.isPremium && (
              <Badge className="bg-purple-600">💎 Premium</Badge>
            )}
          </div>
          {/* Created Date */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarDays className="h-4 w-4" />

            <span>
              {new Date(post.createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
          {/* Post Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  #{tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 border-t pt-4">
            <PostFormDialog mode="edit" post={post} />

            <DeletePostDialog postId={post.id} />
          </div>
        </div>
      </div>
    </div>
  );
};
