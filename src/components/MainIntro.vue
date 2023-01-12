<template>
  <section class="intro">
    <div class="introData">
      <h1 class="introTitle">{{ introTitle }}</h1>
      <div class="introDes">
        <p v-for="des in introDes" :key="des" >{{ des }}</p>
      </div>
      <div class="btnGroup">
        <button class="btn">ابدا الآن</button>
        <button class="btn">تحدث مع خبير</button>
      </div>
    </div>
    <div class="introVideo"></div>
  </section>
</template>

<script>
export default {
  name: "MainIntro",
  data() {
    return {
      introTitle: " تستحق شيئاً رائعاً ",
      introDes: [
        " تم صناعة هذا العرض خصيصا لك  ",
        " انضم لاكثر من 200 عميل اعادو صناعة علامتهم التجارية ",
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.intro {
  width: min(100% - 20px, 1320px);
  margin: auto;
  padding: 50px 0;
  display: flex;
  gap: 24px;

  .introTitle{
    font-weight: bold;
    font-size: 45px;
  }
  .introData {
    flex: 1;
    display: flex;
    align-content: center;
    flex-direction: column;
    gap: 24px;
    .introDes{
      display: flex;
      flex-direction: column;
      gap: 8px;
      p{
        color: var(--textColor);
      }
    }
    .btnGroup{
      display: flex;
      gap: 8px;
      
    }
  }
  .introVideo {
    flex: 1;
    display: flex;
    align-content: center;
  }
}
</style>
