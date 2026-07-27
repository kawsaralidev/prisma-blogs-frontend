/* Blog Details Page */

import Image from "next/image";
import { Eye, CalendarDays } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { getPostById } from "@/service/post";

interface Props {
  params: Promise<{
    postId: string;
  }>;
}

const BlogDetailsPage = async ({ params }: Props) => {
  const { postId } = await params;

  const post = await getPostById(postId);

  return (
    <section className="container mx-auto max-w-4xl py-10">
      {/* Thumbnail */}

      <div className="relative mb-8 h-[450px] overflow-hidden rounded-xl">
        <Image
          src={post.thumbnail || "/placeholder.png"}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Badges */}

      <div className="mb-4 flex flex-wrap gap-2">
        {post.isFeatured && <Badge>Featured</Badge>}

        {post.isPremium && <Badge variant="secondary">Premium</Badge>}
      </div>

      {/* Title */}

      <h1 className="mb-6 text-4xl font-bold">{post.title}</h1>

      {/* Meta */}

      <div className="mb-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Eye className="h-4 w-4" />
          {post.views} Views
        </div>

        <div className="flex items-center gap-2">
          <CalendarDays className="h-4 w-4" />
          {new Date(post.createdAt).toLocaleDateString()}
        </div>
      </div>

      {/* Tags */}

      <div className="mb-8 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Badge key={tag} variant="outline">
            #{tag}
          </Badge>
        ))}
      </div>

      {/* Content */}

      <article className="prose prose-neutral dark:prose-invert max-w-none">
        {post.content}
      </article>
    </section>
  );
};

export default BlogDetailsPage;
