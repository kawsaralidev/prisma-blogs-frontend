/* Blogs Page */

import { getAllPosts } from "@/service/post/getAllPost";
import PostGrid from "./_components/PostGrid";

const BlogsPage = async () => {
  const posts = await getAllPosts();

  return (
    <section className="container mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Blogs</h1>
        <p className="text-muted-foreground">
          Discover the latest blogs from our community.
        </p>
      </div>

      <PostGrid posts={posts} />
    </section>
  );
};

export default BlogsPage;
