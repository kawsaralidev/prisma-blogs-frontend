"use client";

/* Pagination */

import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";

interface Props {
  currentPage: number;
  totalPages: number;
}

const Pagination = ({ currentPage, totalPages }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", page.toString());

    router.push(`/blogs?${params.toString()}`);
  };

  return (
    <div className="mt-10 flex items-center justify-center gap-2">
      <Button
        variant="outline"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Previous
      </Button>

      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;

        return (
          <Button
            key={page}
            variant={currentPage === page ? "default" : "outline"}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </Button>
        );
      })}

      <Button
        variant="outline"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
