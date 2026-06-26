import * as React from 'react';

const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.53 63.54" {...props}>
    <g>
      <g>
        <rect
          x={16.91}
          y={35.31}
          width={1.72}
          height={4.46}
          style={{ fill: 'currentColor', strokeWidth: 0 }}
        />
        <path
          style={{ fill: 'currentColor', strokeWidth: 0 }}
          d="M0,0v63.54h63.53V0H0ZM18.77,19.54v-7h12v6.32l-5,2v9.68H9.77v-9.67l-4.92-2v-6.33h11.92v7h2ZM54.68,21.54v-9h4v18h-20v-9h-2v9h-3.92V12.54h19.92v9h2ZM32.77,41.09v-8.32h25.92v4h-23v8h10.04v-2h-8.04v-4h21v12.16l-25.92-.15v-9.68ZM4.85,42.44l4.92-2v-7.67h16v7.68l5,2v8.32h-11.96l-.04-7h-2s.04,7,.04,7H4.85v-8.33Z"
        />
      </g>
    </g>
  </svg>
);
export default SvgComponent;
