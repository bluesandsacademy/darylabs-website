// Base skeleton pulse element
export function Skeleton({ className = "" }) {
  return (
    <div className={`animate-pulse bg-gray-200 rounded-md ${className}`} />
  );
}

// A row of skeleton cards (experiments, classes, etc.)
export function CardGridSkeleton({ count = 6 }) {
  return (
    <div className="flex flex-wrap gap-4 m-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="w-full sm:w-56 bg-white rounded-xl p-4 shadow-sm space-y-3">
          <Skeleton className="h-32 w-full rounded-lg" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
          <Skeleton className="h-3 w-1/3" />
        </div>
      ))}
    </div>
  );
}

// Skeleton rows for tables / leaderboard lists
export function TableRowsSkeleton({ rows = 5 }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
          <Skeleton className="h-8 w-8 rounded-full flex-shrink-0" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-3 w-1/3" />
            <Skeleton className="h-3 w-1/5" />
          </div>
          <Skeleton className="h-4 w-12" />
        </div>
      ))}
    </div>
  );
}

// Skeleton for a simple form (auth pages)
export function FormSkeleton({ fields = 2 }) {
  return (
    <div className="border max-w-2xl mx-auto flex flex-col gap-y-5 py-5 px-3 md:px-10 rounded-lg shadow-sm mt-0 md:-mt-28 z-30 relative bg-white">
      {Array.from({ length: fields }).map((_, i) => (
        <div key={i} className="flex flex-col gap-y-2">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
      ))}
      <Skeleton className="h-12 w-full rounded-md mt-2" />
    </div>
  );
}
