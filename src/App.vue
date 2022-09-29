<template>
  <keep-alive>
    <component v-bind:is="GetNavbar"></component>
  </keep-alive>
  <router-view />
</template>

<style>
  :root {
    --primaryColor: #ff8000;
    --secondaryColor: #ff9933;
    --primaryBackground: #ffffff;
    --secondaryBackground: #000;
  }

  html,
  body {
    width: 100%;
    height: auto;
    margin: 0px;
    padding: 0px;
    scroll-behavior: smooth;
  }

  /*fonts*/

  @font-face {
    font-family: CustomFontNormal;
    font-display: swap;
    src: url("/fonts/roboto/woff2/Roboto-Regular.woff2") format("woff2"),
      url("/fonts/roboto/ttf/Roboto-Regular.ttf") format("truetype");
  }

  @font-face {
    font-family: CustomFontBold;
    font-display: swap;
    src: url("/fonts/roboto/woff2/Roboto-Bold.woff2") format("woff2"),
      url("/fonts/roboto/ttf/Roboto-Bold.ttf") format("truetype");
  }

  @font-face {
    font-family: CustomFontItalic;
    font-display: swap;
    src: url("/fonts/roboto/woff2/Roboto-Italic.woff2") format("woff2"),
      url("/fonts/roboto/woff2/Roboto-Italic.ttf") format("truetype");
  }

  @font-face {
    font-family: CustomFontLight;
    font-display: swap;
    src: url("/fonts/roboto/woff2/Roboto-Light.woff2") format("woff2"),
      url("/fonts/roboto/ttf/Roboto-Light.ttf") format("truetype");
  }

  /*components*/

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: CustomFontBold, Helvetica, sans-serif;
    color: #4d4d4d;
    word-wrap: break-word;
  }

  strong {
    font-family: CustomFontBold, Helvetica, sans-serif;
    font-size: 17px;
    color: #4d4d4d;
    word-wrap: break-word;
  }

  label,
  p {
    font-family: CustomFontNormal, Helvetica, sans-serif;
    font-size: 17px;
    color: #4d4d4d;
    word-wrap: break-word;
    margin: 10px 0px 5px 0px;
  }

  #comment {
    color: var(--secondaryColor);
  }

  #comment > strong {
    color: var(--primaryColor);
  }

  small {
    font-family: CustomFontNormal, Helvetica, sans-serif;
    color: #4d4d4d;
    word-wrap: break-word;
  }

  textarea {
    font-family: CustomFontNormal, Helvetica, sans-serif;
    font-size: 17px;
    color: #4d4d4d;
    resize: none;
    max-width: 100%;
  }

  i {
    font-family: CustomFontItalic, Helvetica, sans-serif;
    font-size: 17px;
    color: #4d4d4d;
    word-wrap: break-word;
  }

  a {
    font-family: CustomFontNormal, Helvetica, sans-serif;
    color: var(--secondaryColor);
    text-decoration: none;
  }

  a:focus,
  a:hover {
    font-family: CustomFontNormal, Helvetica, sans-serif;
    color: var(--primaryColor);
    text-decoration: none;
  }

  #abtn :focus,
  :active {
    font-family: CustomFontNormal, Helvetica, sans-serif;
    color: #ffffff;
    text-decoration: none;
  }

  #link {
    text-decoration: underline;
    cursor: pointer;
  }

  .tooltips {
    color: var(--secondaryColor);
    cursor: pointer;
  }

  .tooltips:focus,
  .tooltips:hover {
    color: var(--primaryColor);
    cursor: pointer;
  }

  #errors {
    color: #ff8080 !important;
  }

  #success {
    color: #009933 !important;
  }

  blockquote {
    background: #f9f9f9;
    border-left: 10px solid var(--primaryColor);
    margin: 1.5em 10px;
    padding: 0.5em 10px;
    quotes: "\201C""\201D""\2018""\2019";
  }
  blockquote:before {
    color: var(--primaryColor);
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }
  blockquote p {
    display: inline;
  }

  .tab-content {
    padding: 15px;
    border-left: 0.2px solid #d9d9d9;
    border-right: 0.2px solid #d9d9d9;
    border-bottom: 0.2px solid #d9d9d9;
  }

  .nav-link {
    font-family: CustomFontNormal, Helvetica, sans-serif;
    color: var(--secondaryColor);
    text-decoration: none;
  }

  .nav-link :hover,
  :focus {
    font-family: CustomFontNormal, Helvetica, sans-serif;
    color: var(--primaryColor);
    text-decoration: none;
  }

  .nav-link:focus,
  .nav-link:hover {
    font-family: CustomFontNormal, Helvetica, sans-serif;
    color: var(--secondaryColor);
    text-decoration: none;
  }

  /*box*/

  /*table*/

  table {
    background-color: var(--primaryBackground) !important;
    border-radius: 5px;
    width: 100%;
    empty-cells: show;
  }

  table th {
    font-family: CustomFontBold, sans-serif;
    font-size: 20px;
  }

  table td {
    font-family: CustomFontNormal, sans-serif;
    font-size: 17px;
    word-wrap: break-word;
  }

  /*end:table*/

  /*boxes*/

  #box-shadow {
    padding: 10px;
    background-color: #ffffff;
    -webkit-box-shadow: 0px 0px 5px 5px rgba(181, 177, 181, 1);
    -moz-box-shadow: 0px 0px 5px 5px rgba(181, 177, 181, 1);
    box-shadow: 0px 0px 5px 5px rgba(181, 177, 181, 1);
  }

  /*assets*/

  .img-responsive {
    max-width: 100%;
    height: auto;
  }

  .vid-responsive {
    max-width: 100%;
    height: auto;
  }

  /*button*/

  .btn {
    margin: 10px 0px 5px 0px;
  }

  .btn-primary {
    background-color: var(--secondaryColor);
    border-color: var(--primaryColor);
  }

  .btn-primary:hover,
  .btn-primary:focus {
    background-color: var(--primaryColor);
    border-color: var(--primaryColor);
  }

  .btn-primary:not(:disabled):not(.disabled):active,
  .btn-primary:not(:disabled):not(.disabled).active,
  .show > .btn-primary.dropdown-toggle {
    background-color: var(--secondaryColor);
    border-color: var(--secondaryColor);
  }

  /*select*/

  /*preloader*/

  /*ellipsis*/

  .ellipsis {
    display: inline;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /*other components*/

  .page-item.active .page-link {
    background-color: var(--primaryColor);
    border-color: var(--secondaryColor);
  }
</style>

<script>
  import Navbar from "./components/Shared/Navbar.vue";

  export default {
    name: "App",
    components: {
      Navbar,
    },
    data: function () {
      return {};
    },
    mounted() {},
    updated() {},
    computed: {
      GetNavbar() {
        return Navbar;
      },
    },
    methods: {},
  };
</script>
