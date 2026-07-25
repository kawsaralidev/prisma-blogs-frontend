import { LoaderCircle } from "lucide-react";

export function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <LoaderCircle className="size-8 animate-spin" />
    </div>
  );
}
