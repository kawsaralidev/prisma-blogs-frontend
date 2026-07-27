/* Blogs Page */

import { getAllPosts } from "@/service/post/getAllPost";
import PostGrid from "./_components/PostGrid";
import SearchBar from "./_components/SearchBar";

interface Props {
  searchParams: Promise<{
    searchTerm?: string;
    page?: string;
  }>;
}

const BlogsPage = async ({ searchParams }: Props) => {
  const { searchTerm = "" } = await searchParams;

  const posts = await getAllPosts({
    searchTerm,
  });
  return (
    <section className="container mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Blogs</h1>

        <p className="text-muted-foreground">
          Discover the latest blogs from our community.
        </p>
      </div>

      <SearchBar />

      <PostGrid posts={posts} />
    </section>
  );
};

export default BlogsPage;
