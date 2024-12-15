import { IconProps } from './types';

export const IconMain = ({ ...props }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      {...props}
    >
      <circle opacity="0.3" cx="28" cy="24" r="18" fill="currentColor"></circle>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.08 5.27992C13.7412 5.27992 5.36 13.6612 5.36 23.9999C5.36 34.3387 13.7412 42.7199 24.08 42.7199C34.4188 42.7199 42.8 34.3387 42.8 23.9999V15.2399H46.16V23.9999C46.16 36.1944 36.2744 46.0799 24.08 46.0799C11.8856 46.0799 2 36.1944 2 23.9999C2 11.8055 11.8856 1.91992 24.08 1.91992H44.36V5.27992H24.08Z"
        fill="currentColor"
      ></path>
      <path
        d="M46.16 3.59992C46.16 4.52776 45.4078 5.27992 44.48 5.27992C43.5522 5.27992 42.8 4.52776 42.8 3.59992C42.8 2.67208 43.5522 1.91992 44.48 1.91992C45.4078 1.91992 46.16 2.67208 46.16 3.59992Z"
        fill="currentColor"
      ></path>
      <path
        d="M46.16 15.1199C46.16 16.0478 45.4078 16.7999 44.48 16.7999C43.5522 16.7999 42.8 16.0478 42.8 15.1199C42.8 14.1921 43.5522 13.4399 44.48 13.4399C45.4078 13.4399 46.16 14.1921 46.16 15.1199Z"
        fill="currentColor"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.8061 29.5825C16.5007 28.9674 17.5624 29.0317 18.1776 29.7263C19.3272 31.0242 20.9262 32.5202 23.64 32.5202C26.5114 32.5202 28.4968 31.0925 29.4445 29.9868C30.0483 29.2824 31.1089 29.2008 31.8133 29.8046C32.5178 30.4085 32.5994 31.469 31.9956 32.1735C30.5432 33.8679 27.6806 35.8802 23.64 35.8802C19.4418 35.8802 16.9928 33.4562 15.6624 31.9541C15.0472 31.2595 15.1115 30.1977 15.8061 29.5825Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};
