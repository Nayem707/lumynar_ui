import React from 'react';

const Grid = ({ children, cols = 3, gap = 'md', className = '' }) => {
  const colsMap = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-1',
    3: 'grid-cols-1 sm:grid-cols-1 md:grid-cols-2',
    4: 'grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    5: 'grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    6: 'grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
  };

  const gapMap = {
    none: 'gap-0',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
  };

  return (
    <div
      className={`grid ${colsMap[cols] || colsMap[3]} ${gapMap[gap]} ${className}`}
    >
      {children}
    </div>
  );
};

export default Grid;
