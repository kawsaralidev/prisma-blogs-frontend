"use client";

import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deletePostAction } from "../author-dashboard/_actions/deletePost";

type DeletePostDialogProps = {
  postId: string;
};

const initialState = {
  success: false,
  statusCode: 0,
  message: "",
};

export function DeletePostDialog({ postId }: DeletePostDialogProps) {
  /* Delete action state */
  const [state, formAction, pending] = useActionState(
    deletePostAction,
    initialState,
  );

  /* Show toast after delete */
  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
    } else {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <AlertDialog>
      {/* Delete Button */}
      <AlertDialogTrigger asChild>
        <Button variant="destructive">
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        {/* Dialog Header */}
        <AlertDialogHeader>
          <AlertDialogTitle>Delete this post?</AlertDialogTitle>

          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            post.
          </AlertDialogDescription>
        </AlertDialogHeader>

        {/* Delete Form */}
        <form action={formAction}>
          <input type="hidden" name="postId" value={postId} />

          {/* Dialog Footer */}
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>

            <AlertDialogAction asChild>
              <Button type="submit" variant="destructive" disabled={pending}>
                {pending ? "Deleting..." : "Delete"}
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
