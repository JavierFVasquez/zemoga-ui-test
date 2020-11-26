import colors from "./colors";
import { createGlobalStyle } from "styled-components";
export const light = {
  primary: colors.yellow,
  secondary: colors.blue,
  background: colors.white,
  banner: {
    background: colors.gray,
  },
  text: {
    primary: colors.white,
    secondary: colors.darkText,
  },
  primaryTransparent: colors.yellowTransparent,
  secondaryTransparent: colors.blueTransparent,
  breakpoints: {
    mobile: "@media all and (max-width: 480px)",
  },
};

export const Normalize = createGlobalStyle`
  html,
  body,
  div,
  span,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  address,
  big,
  code,
  del,
  dfn,
  em,
  img,
  q,
  s,
  samp,
  small,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  main,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
    margin: 0;
  }

  ol,
  ul {
    list-style: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    text-align: center;
    line-height: 1.15;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }

  b,
  strong {
    font-weight: bolder;
  }

  small {
    font-size: 80%;
  }

  figure {
    margin: 1em 40px;
  }

  img {
    border-style: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    cursor: pointer;
    border: none;
    outline: none;
  }

  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  textarea {
    overflow: auto;
  }

  [hidden] {
    display: none;
  }

  [clear] {
    clear: both;
  }

  /* Box Model */

  *,
  *:before,
  *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  /* A better looking default horizontal rule */

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1em 0;
    padding: 0;
  }
`;
