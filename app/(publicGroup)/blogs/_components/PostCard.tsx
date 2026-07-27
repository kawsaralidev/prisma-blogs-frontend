/* Post Card */

import Image from "next/image";
import Link from "next/link";

import { Eye, CalendarDays } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IPost } from "@/lib/types";

interface Props {
  post: IPost;
}

const PostCard = ({ post }: Props) => {
  console.log(post.id);
  return (
    <div className="overflow-hidden rounded-xl border bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Thumbnail */}

      <div className="relative h-52 w-full">
        <Image
          src={post.thumbnail || "/placeholder.png"}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}

      <div className="space-y-4 p-5">
        {/* Badges */}

        <div className="flex flex-wrap gap-2">
          {post.isFeatured && <Badge>Featured</Badge>}

          {post.isPremium && <Badge variant="secondary">Premium</Badge>}
        </div>

        {/* Title */}

        <h2 className="line-clamp-2 text-xl font-semibold">{post.title}</h2>

        {/* Description */}

        <p className="line-clamp-3 text-sm text-muted-foreground">
          {post.content}
        </p>

        {/* Info */}

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Eye className="h-4 w-4" />
            <span>{post.views}</span>
          </div>

          <div className="flex items-center gap-1">
            <CalendarDays className="h-4 w-4" />
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          </div>
        </div>

        {/* Button */}

        <Button asChild className="w-full">
          <Link href={`/blogs/${post.id}`}>Read More</Link>
        </Button>
      </div>
    </div>
  );
};

export default PostCard;
