/* Blogs Page */

import { getAllPosts } from "@/service/post/getAllPost";
import PostGrid from "./_components/PostGrid";
import SearchBar from "./_components/SearchBar";
import Pagination from "./_components/Pagination";
// import Filter from "./_components/Filter";

interface Props {
  searchParams: Promise<{
    searchTerm?: string;
    page?: string;
  }>;
}

const BlogsPage = async ({ searchParams }: Props) => {
  const { searchTerm = "", page = "1" } = await searchParams;

  const { data: posts, meta } = await getAllPosts({
    searchTerm,
    page,
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
      {/* <Filter /> */}

      <PostGrid posts={posts} />
      <Pagination currentPage={meta.page} totalPages={meta.totalPages} />
    </section>
  );
};

export default BlogsPage;
