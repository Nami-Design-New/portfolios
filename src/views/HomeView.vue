<template>
  <div class="homeVew">
    <MainIntro />
    <div style="height: 5000vh;"></div>
    <Features />
  </div>
</template>

<script>
import MainIntro from "@/components/MainIntro.vue";
import Features from "@/components/Features.vue";

export default {
  name: "HomeView",
  components: {
    MainIntro,
    Features,
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
