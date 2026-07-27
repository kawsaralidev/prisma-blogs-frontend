import { PostForm } from "../../_components/PostForm";

const CreatePostPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold">Create Post</h1>

        <p className="text-muted-foreground">
          Create and publish a new blog post.
        </p>
      </div>

      {/* Form */}

      <PostForm mode="create" />
    </div>
  );
};

export default CreatePostPage;
