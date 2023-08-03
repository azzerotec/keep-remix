import * as React from "react";
import type { SVGProps } from "react";
const SvgGradientBorder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={252}
    height={900}
    fill="none"
    viewBox="0 0 252 900"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M98.085 559.289c-17.811-122.572 35.817-199.895 65.729-260.574C206.019 213.071 241.352 131.414 252 0H25v901h169.79c-8.518-59.119-20.425-114.944-36.01-166.088-16.456-54.438-51.015-109.569-60.695-175.623Z"
    />
    <g filter="url(#b)">
      <path
        fill="#F5F9F9"
        d="M25 0v901h29.783c125.217-303-26.938-285.882 0-407C89.593 337.78 211.065 139.59 86 0H25Z"
      />
    </g>
    <defs>
      <linearGradient
        id="a"
        x1={138}
        x2={146}
        y1={882}
        y2={8}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#99F0AC" />
        <stop offset={1} stopColor="#8255F6" />
      </linearGradient>
      <filter
        id="b"
        width={166.255}
        height={951}
        x={0}
        y={-21}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={12.5} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_776_860" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_776_860"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgGradientBorder;
