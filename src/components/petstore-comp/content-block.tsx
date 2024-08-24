import { cn } from '@/lib/utils';

type ContentBlockProps = {
  children: React.ReactNode;
  className?: string;
};

const ContentBlock = ({ children, className }: ContentBlockProps) => {
  return (
    <div
      className={cn(
        'h-full w-full bg-[#F7F8FA] rounded-md shadow-sm overflow-hidden',
        className
      )}
    >
      {children}
    </div>
  );
};

export default ContentBlock;
