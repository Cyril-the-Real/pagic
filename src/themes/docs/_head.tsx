// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
import React from 'https://dev.jspm.io/react@16.13.1';

import { PagicLayout } from '../../Pagic.ts';

const Head: PagicLayout<{
  isDark: boolean;
}> = ({ config, title, ga, outputPath, isDark }) => {
  console.log(isDark);
  return (
    <head>
      {ga}
      <title>{outputPath !== 'index.html' ? `${title} · ${config.title}` : title}</title>
      <meta charSet="utf-8" />

      <link
        id="prismTheme"
        rel="stylesheet"
        href={isDark ? `${config.base}assets/prism_tomorrow.css` : `${config.base}assets/prism.css`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
let shouldSetIsDark = document.cookie.includes('is_dark=1') ? true : document.cookie.includes('is_dark=0') ? false : window.matchMedia('(prefers-color-scheme: dark)').matches
if (shouldSetIsDark) {
document.documentElement.classList.add('is_dark');
document.getElementById('prismTheme').href = "${config.base}assets/prism_tomorrow.css";
}
`
        }}
      />

      <link rel="stylesheet" href={`${config.base}assets/index.css`} />
      {config.head}
    </head>
  );
};

export default Head;
