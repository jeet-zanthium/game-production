import { IconProps } from './types';

export const IconWallet = ({ ...props }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      {...props}
    >
      <circle opacity="0.3" cx="28" cy="24" r="18" fill="currentColor"></circle>
      <path
        d="M3 23C3 17.016 6.526 12.836 12.0085 12.132C12.5675 12.044 13.148 12 13.75 12H35.25C35.809 12 36.3465 12.022 36.8625 12.11C42.4095 12.77 46 16.972 46 23V34C46 40.6 41.7 45 35.25 45H13.75C7.3 45 3 40.6 3 34V31.822"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M46 23.7241H39.548C37.1822 23.7241 35.2466 25.5862 35.2466 27.8621C35.2466 30.1379 37.1822 32 39.548 32H46M37 12C36.4838 11.9172 35.8058 12 35.2466 12H14C13.3978 12 12.5592 11.9172 12 12C12 12 12.7312 11.3517 13.2474 10.8551L20.2371 4.11027C21.6566 2.75836 23.5733 2 25.5708 2C27.5682 2 29.4849 2.75836 30.9044 4.11027L34.6681 7.77235C36.0445 9.0758 39.548 12 37 12Z"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};