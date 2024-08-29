import React from 'react';

export default function SkeletonGrid({ count = 8 }) {
  return (
    <div className="grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 w-full animate-pulse">
      {[...Array(count)].map((_, index) => (
        <div key={index} className="rounded-lg p-4 shadow-md flex flex-col items-center">
          <div className="w-full h-48 bg-gray-300 rounded-t-lg"></div>
          <div className="h-4 bg-gray-200 rounded-full w-3/4 mt-2"></div>
          <div className="h-4 bg-gray-200 rounded-full w-1/2 mt-2"></div>
          <div className="flex justify-center mt-4 w-full">
            <div className="h-8 bg-gray-200 rounded-full w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
