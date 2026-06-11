function CardSkeleton() {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="group bg-white rounded-md shadow-sm overflow-hidden animate-pulse"
          >
            <div className="aspect-3/4 bg-gray-200"></div>

            <div className="p-3 space-y-2">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>

              <div className="flex items-center justify-between pt-2">
                <div className="h-5 bg-gray-200 rounded w-20"></div>
                <div className="h-5 bg-gray-200 rounded w-12"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardSkeleton;
