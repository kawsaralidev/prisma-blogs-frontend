"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { IPost } from "@/lib/types";
import { PostForm } from "./PostForm";

type PostFormDialogProps = {
  mode: "create" | "edit";
  post?: IPost;
};

export function PostFormDialog({ mode, post }: PostFormDialogProps) {
  // Control dialog open/close state
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Dialog Trigger */}
      <DialogTrigger asChild>
        {mode === "create" ? (
          <Button>Create Post</Button>
        ) : (
          <Button variant="outline">Edit</Button>
        )}
      </DialogTrigger>

      <DialogContent>
        {/* Dialog Header */}
        <DialogHeader>
          <DialogTitle>
            {mode === "edit" ? "Edit Post" : "Create Post"}
          </DialogTitle>
        </DialogHeader>

        {/* Post Form */}
        <PostForm mode={mode} post={post} />
      </DialogContent>
    </Dialog>
  );
}
