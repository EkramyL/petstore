import React from 'react';

const ContentBlock = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full bg-[#F7F8FA] rounded-md shadow-sm overflow-hidden">
      {children}
    </div>
  );
};

export default ContentBlock;
