<template>
  <header :class="{ headerAnimate: isScrolled }">
    <nav>
      <!-- logo -->
      <router-link to="/" class="logo">
        <img src="@/assets/img/logo.svg" />
      </router-link>
      <!-- nav menu -->
      <div
        class="navMenu"
        :class="{ active: sideShow }"
        @click="sideShow = !sideShow"
      >
        <router-link to="/" @click="goToTop" > الرئيسية </router-link>
        <router-link to="/" v-scroll-to="'#about'"> من نحن </router-link>
        <router-link to="/reviews"> اراء العملاء </router-link>
        <router-link to="/portofolios"> نماذج الابداع </router-link>
        <router-link to="/pricing"> التسعير </router-link>
      </div>
      <!-- toggle btn -->
      <div
        class="navBtn"
        :class="{ active: sideShow }"
        @click="sideShow = !sideShow"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  </header>
</template>
  
  <script>
export default {
  name: "Header",
  data() {
    return {
      sideShow: false,
      isScrolled: false,
    };
  },
  methods: {
    goToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    },
  },
  mounted() {
    window.onscroll = () => {
      if (document.documentElement.scrollTop > 10) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    };
  },
};
</script>
  
  <style lang="scss">
header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1024;
  transition: var(--transition);
  backdrop-filter: blur(15px);
  background-color: #ffffff30;
  @media (max-width: 576px) {
    background-color: #ffffff;
  }
  nav {
    width: min(100% - 20px, 1320px);
    display: flex;
    justify-content: space-between;
    margin: auto;
    padding: 16px;
    gap: 16px;
    .logo {
      margin: auto 0;
      img {
        height: 40px;
        transition: var(--transition);
        width: 100%;
        object-fit: contain;
        @media (max-width: 576px) {
          height: 30px;
        }
      }
    }
    .navMenu {
      display: flex;
      width: 100%;
      justify-content: end;
      gap: 6px;
      transition: var(--transition);
      a {
        padding: 4px 12px;
        display: flex;
        align-items: center;
        color: var(--blackColor);
        // &.router-link-exact-active,
        &:hover {
          color: var(--mainColor);
        }
        &.btn {
          border: 1px solid var(--mainColor);
          border-radius: 8px;
          background-color: var(--mainColor);
          color: var(--whiteColor);
          padding: 8px 24px;
        }
      }
      @media (max-width: 768px) {
        position: fixed;
        z-index: -1;
        right: -100%;
        top: 0px;
        width: 100%;
        height: 100vh;
        padding: 60px 0;
        flex-direction: column;
        justify-content: center;
        background-color: var(--headerBackgroundColor);
        align-items: center;
        router-link {
          text-align: center;
          justify-content: center;
          padding: 12px;
        }
      }
      &.active {
        right: 0;
      }
    }
    .navBtn {
      margin: auto 0;
      position: relative;
      min-width: 24px;
      height: 24px;
      padding: 5px;
      cursor: pointer;
      transition: var(--transition);
      z-index: 2;
      span {
        position: absolute;
        left: 0;
        display: block;
        width: 24px;
        height: 2px;
        background-color: var(--mainColor);
        margin: 4px 0;
        transition: var(--transition);
        &:first-child {
          top: 0;
        }
        &:nth-child(2) {
          width: 10px;
          top: 7px;
        }
        &:nth-child(3) {
          width: 16px;
          bottom: 0;
        }
      }
      &:not(.active):hover span:first-child {
        width: 16px;
      }
      &:not(.active):hover span:nth-child(2) {
        width: 20px;
      }
      &.active {
        span {
          background-color: var(--mainColor) !important;
          &:first-child {
            transform: rotate(45deg);
            top: 8px;
            width: 20px;
          }
          &:nth-child(2) {
            width: 0;
            opacity: 0;
          }
          &:last-child {
            transform: rotate(-45deg);
            top: 8px;
            width: 20px;
          }
        }
      }
      @media (min-width: 768px) {
        display: none;
      }
    }
  }
}

.headerAnimate {
  box-shadow: var(--BigShadow);
  padding: 0 5px;
  background-color: var(--whiteColor);
}
</style>