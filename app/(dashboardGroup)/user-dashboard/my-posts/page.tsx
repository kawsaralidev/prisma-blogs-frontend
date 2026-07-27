import { Suspense } from "react";
import { PostFormDialog } from "../../_components/PostFormDialog";
import { MyPostSkeleton } from "../../_components/MyPostSkeleton";
import { MyPostList } from "../../_components/MyPostList";

const UserMyPostsPage = () => {
  return (
    <div className="mx-auto m-5 max-w-7xl space-y-6  p-4 p-10 sm:px-6 lg:px-8 ">
      <div className="flex  items-center justify-between mt-10 ">
        <div className="p-10 m-7">
          <h1 className="text-2xl font-semibold">My Posts</h1>

          <p className="text-sm text-muted-foreground">
            Create and manage your own news posts.
          </p>
        </div>

        <PostFormDialog mode="create" />
      </div>

      <Suspense fallback={<MyPostSkeleton />}>
        <MyPostList></MyPostList>
      </Suspense>
    </div>
  );
};

export default UserMyPostsPage;
