import { Icons } from './shared/icons';
import { Button } from './ui/button';

export default function HeaderLeft() {
  return (
    <div className="absolute  top-4 left-4 z-10 flex gap-2">
      <div className="h-12 px-2.5 bg-grey-800 flex items-center rounded-md">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="14"
            cy="14"
            r="10.5"
            stroke="url(#paint0_linear_3408_7358)"
            strokeWidth="7"
          />
          <defs>
            <linearGradient
              id="paint0_linear_3408_7358"
              x1="2.8"
              y1="2.1"
              x2="23.8"
              y2="25.2"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#47D83B" />
              <stop offset="1" stopColor="#3CA22F" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="h-12 px-1.5 bg-grey-800 flex items-center rounded-md">
        <Button
          className="text-muted-foreground"
          size={'icon'}
          variant={'ghost'}
        >
          <Icons.undo height={20} />
        </Button>
        <Button
          className="text-muted-foreground"
          size={'icon'}
          variant={'ghost'}
        >
          <Icons.redo height={20} />
        </Button>
      </div>

      <div className="h-12 px-4 gap-4 bg-grey-800 flex items-center rounded-md">
        <div className="text-gray-200 font-semibold text-sm">
          Untitled but with some content
        </div>
        <Button
          className="text-lime-500 gap-2 px-2.5 h-8 bg-grey-800 border-grey-700 font-semibold"
          variant={'outline'}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_3416_7373)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.2 1H3.8C2.2536 1 1 2.2536 1 3.8V12.9C1 14.0598 1.9402 15 3.1 15H12.2C13.7464 15 15 13.7464 15 12.2V3.8C15 2.2536 13.7464 1 12.2 1ZM9.4 13.6H12.2C12.9732 13.6 13.6 12.9732 13.6 12.2V3.8C13.6 3.0268 12.9732 2.4 12.2 2.4H3.8C3.0268 2.4 2.4 3.0268 2.4 3.8V6.6H6.6C8.1464 6.6 9.4 7.8536 9.4 9.4V13.6ZM2.4 8V12.2C2.4 12.9732 3.0268 13.6 3.8 13.6H8V9.4C8 8.6268 7.3732 8 6.6 8H2.4Z"
                fill="#81CF00"
                stroke="#81CF00"
                strokeWidth="0.3"
              />
            </g>
            <defs>
              <clipPath id="clip0_3416_7373">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <div>Resize</div>
        </Button>
      </div>
    </div>
  );
}
