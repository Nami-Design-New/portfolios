<template>
  <Header/>
  <router-view />
</template>

<script>

import Header from '@/views/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
:root {
  --mainColor: #69B42E;
  --mainColor10: #fbeeef;
  --mainColor30: #f2ccce;
  --gold: #ffd700;
  --whiteColor: #ffffff;
  --blackColor: #1f1f1f;
  --bodyColor: #f3f3f9;
  --textColor: #898989;
  --transition: all 0.3s ease-in-out;
  --shadow: 0px 2px 4px #c1c1c1;
  --BigShadow: 0 16px 32px 0 #071c1f1a;
  --headerBackgroundColor: var(--whiteColor);
}
@font-face {
  font-family: madani;
  font-display: swap;
  src: url(@/assets/webfonts/Madani.woff);
}
* {
  font-family: "madani", sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: none;
  direction: rtl;
  scroll-behavior: smooth;
}
::-webkit-scrollbar {
  width: 8px;
  height: 6px;
  // background-color: #eee;
  border-radius: 0px !important;
}
::-webkit-scrollbar-track {
  border-radius: 0px !important;
  background: var(--backgroundColor);
  box-shadow: inset 1px 1px 2px #cfcfd4, inset -1px -1px 2px #ffffff;
}
::-webkit-scrollbar-thumb {
  background-color: #bdbdbd;
  outline: none;
  border-radius: 20px !important;
}
:target {
  scroll-margin-top: 50px;
}
a {
  text-decoration: none;
  transition: var(--transition) !important;
}
a:hover {
  text-decoration: none;
  color: var(--mainColor);
}
button:focus {
  outline: 0;
}
.row {
  margin: 0px;
}
a,
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
@media (max-width: 767px) {
  .container,
  .container-fluid {
    padding: 0px 8px;
  }
}
video,
img {
  max-width: 100%;
  height: auto;
  display: inline-block;
}
.navbar-toggler {
  border: none;
  box-shadow: none !important;
}
.btn:focus {
  box-shadow: none;
}
body {
  background-color: var(--backgroundColor);
  overflow-x: hidden;
}
input {
  accent-color: var(--mainColor) !important;
}
.odometer-inside {
  direction: ltr !important;
}
.modal-backdrop {
  --bs-backdrop-opacity: 0.8;
}
.fancybox__container {
  z-index: 1999;
}
.form-check {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0;
}
.form-check-input {
  width: 20px;
  height: 20px;
  margin: 0 !important;
  float: none !important;
  &:checked {
    background-color: var(--mainColor);
    border-color: var(--mainColor);
  }
  &:focus {
    box-shadow: 0 0 0 0.25rem #00595b30;
  }
}
::placeholder {
  font-size: 12px;
  color: #bababa !important ;
  font-weight: normal !important;
}
[type="email"],
[type="number"],
[type="tel"],
[type="url"] {
  direction: rtl;
}
</style>
