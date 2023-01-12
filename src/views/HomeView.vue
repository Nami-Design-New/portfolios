<template>
  <div class="home">
    <MainIntro />
    <Features id="Features" v-if="$route.path === '/about'" />
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
