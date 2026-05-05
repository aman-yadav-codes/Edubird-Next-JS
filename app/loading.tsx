import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="flex flex-col items-center justify-center min-h-[50vh] rounded-xl bg-muted/50">
        <Loader2 className="h-10 w-10 animate-spin text-muted-foreground" />
        <p className="mt-4 text-muted-foreground animate-pulse">Loading page...</p>
      </div>
    </div>
  );
}
