"use client";

import { useActionState, useEffect } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { IPost } from "@/lib/types";
import { updatePostAction } from "../author-dashboard/_actions/updatePost";
import { createPostAction } from "../author-dashboard/_actions/createPost";

type PostFormProps = {
  mode: "create" | "edit";
  post?: IPost;
};

type ActionState = {
  success: boolean;
  statusCode: number;
  message: string;
  data?: unknown;
};

const initialState: ActionState = {
  success: false,
  statusCode: 0,
  message: "",
};

export function PostForm({ mode, post }: PostFormProps) {
  const action = mode === "edit" ? updatePostAction : createPostAction;

  const [state, formAction, pending] = useActionState(action, initialState);

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
    } else {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form action={formAction} className="space-y-4">
      {mode === "edit" && (
        <input type="hidden" name="postId" defaultValue={post?.id} />
      )}

      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>

        <Input id="title" name="title" defaultValue={post?.title} required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">Content</Label>

        <Textarea
          id="content"
          name="content"
          defaultValue={post?.content}
          className="min-h-32"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="thumbnail">Thumbnail URL</Label>

        <Input
          id="thumbnail"
          name="thumbnail"
          defaultValue={post?.thumbnail ?? ""}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="tags">Tags (comma separated)</Label>

        <Input id="tags" name="tags" defaultValue={post?.tags?.join(", ")} />
      </div>

      {/* Premium Option */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox id="isPremium" name="isPremium" />

          <Label htmlFor="isPremium">Premium Post</Label>
        </div>

        {/* Premium Info */}
        <p className="text-xs text-muted-foreground">
          Only subscription users can create premium posts.
        </p>
      </div>

      <Button type="submit" disabled={pending}>
        {pending
          ? "Saving..."
          : mode === "edit"
            ? "Save Changes"
            : "Create Post"}
      </Button>
    </form>
  );
}
