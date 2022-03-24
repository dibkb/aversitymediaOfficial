import React from "react";
type propType = {
  width: number | null;
};
export const ArrowNormal: React.FC = () => {
  return (
    <svg
      width="85"
      height="24"
      viewBox="0 0 85 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_221_62)">
        <path
          d="M5 9C4.44772 9 4 9.44772 4 10C4 10.5523 4.44772 11 5 11V9ZM80.7071 10.7071C81.0976 10.3166 81.0976 9.68342 80.7071 9.29289L74.3431 2.92893C73.9526 2.53841 73.3195 2.53841 72.9289 2.92893C72.5384 3.31946 72.5384 3.95262 72.9289 4.34315L78.5858 10L72.9289 15.6569C72.5384 16.0474 72.5384 16.6805 72.9289 17.0711C73.3195 17.4616 73.9526 17.4616 74.3431 17.0711L80.7071 10.7071ZM5 11H80V9H5V11Z"
          fill="#185853"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_221_62"
          x="0"
          y="0.63604"
          width="85"
          height="22.7279"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.34 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_221_62"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_221_62"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
export const ArrowHover: React.FC = () => {
  return (
    <svg
      width="184"
      height="24"
      viewBox="0 0 184 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_93_214)">
        <path
          d="M5 9C4.44772 9 4 9.44772 4 10C4 10.5523 4.44772 11 5 11L5 9ZM179.707 10.7071C180.098 10.3166 180.098 9.68343 179.707 9.29291L173.343 2.92895C172.953 2.53842 172.319 2.53842 171.929 2.92895C171.538 3.31947 171.538 3.95264 171.929 4.34316L177.586 10L171.929 15.6569C171.538 16.0474 171.538 16.6806 171.929 17.0711C172.319 17.4616 172.953 17.4616 173.343 17.0711L179.707 10.7071ZM5 11L179 11L179 9.00002L5 9L5 11Z"
          fill="#185853"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_93_214"
          x="0"
          y="0.636055"
          width="184"
          height="22.7279"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.34 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_93_214"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_93_214"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
