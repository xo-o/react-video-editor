import { Settings, UserPlus } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function HeaderRight() {
  return (
    <div className="absolute  top-4 right-4 z-10 flex gap-2">
      <div className="h-12 pr-3 pl-1 gap-4 bg-grey-800 flex items-center rounded-md">
        <div className="flex gap-1">
          <Button
            variant={'ghost'}
            size={'icon'}
            className="px-0  h-8 text-grey-400"
          >
            <Settings size={20} />
          </Button>

          <Button
            variant={'ghost'}
            size={'icon'}
            className="w-8 h-8 text-grey-400 bg-grey-1000"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.8 2H4.8C3.2536 2 2 3.2536 2 4.8V15.8C2 17.3464 3.2536 18.6 4.8 18.6H15.8C17.3464 18.6 18.6 17.3464 18.6 15.8V4.8C18.6 3.2536 17.3464 2 15.8 2ZM3.8 4.8C3.8 4.24772 4.24772 3.8 4.8 3.8H15.8C16.3523 3.8 16.8 4.24772 16.8 4.8V15.8C16.8 16.3523 16.3523 16.8 15.8 16.8H4.8C4.24772 16.8 3.8 16.3523 3.8 15.8V4.8ZM12.7648 10.8963C13.1648 10.6653 13.1648 10.088 12.7648 9.85703L9.6325 8.04859C9.2325 7.81765 8.7325 8.10633 8.7325 8.56821V12.1851C8.7325 12.647 9.2325 12.9356 9.6325 12.7047L12.7648 10.8963Z"
                fill="currentColor"
              />
            </svg>
          </Button>
          <Button
            variant={'ghost'}
            size={'icon'}
            className="px-2.5 h-8 text-grey-400"
          >
            <UserPlus size={20} />
          </Button>
          <Avatar className="h-[28px] w-[28px]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <Button className="bg-green-700 text-white gap-2 px-2.5 h-8 border-grey-700 font-semibold">
          Download
        </Button>
      </div>
    </div>
  );
}
