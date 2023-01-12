<template>
  <div class="homeVew">
    <MainIntro />
    <div style="height: 500vh"></div>
    <About id="about" />
  </div>
</template>

<script>
import MainIntro from "@/components/MainIntro.vue";
import About from "@/components/About.vue";

export default {
  name: "HomeView",
  components: {
    MainIntro,
    About,
  },
};
</script>

<style lang="scss">
.homeVew {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
