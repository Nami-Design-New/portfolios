<template>
  <section class="intro">
    <div class="introData">
      <h1 class="introTitle">{{ introTitle }}</h1>
      <div class="introDes">
        <p v-for="des in introDes" :key="des">{{ des }}</p>
      </div>
      <div class="btnGroup">
        <button class="btn">
          <img src="@/assets/img/star.svg" alt="" /> ابدا الآن
        </button>
        <button class="btn">
          <img src="@/assets/img/customer.svg" alt="" /> تحدث مع خبير
        </button>
      </div>
    </div>
    <div class="introVideo">
      <div class="video">
        <div class="inner">
          <div class="bg">
            <img src="@/assets/img/top.jpg" alt="" />
          </div>
          <button><img src="@/assets/img/play.svg" alt="" /></button>
        </div>
      </div>
    </div>
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
  min-height: 70vh;

  .introTitle {
    font-weight: bold;
    font-size: 60px;
    background: linear-gradient(to right, var(--secondColor), var(--mainColor));
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  .introData {
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 24px;

    .introDes {
      display: flex;
      flex-direction: column;
      gap: 8px;
      p {
        color: var(--textColor);
      }
    }
    .btnGroup {
      display: flex;
      gap: 8px;
    }
  }
  .introVideo {
    flex: 1;
    display: flex;
    align-content: center;
    .video {
      position: relative;
      width: 100%;
      display: flex;
      .inner {
        position: relative;
        background: var(--whiteColor);
        aspect-ratio: 1/1;
        width: min(100% - 20px, 500px);
        border-radius: 100% 10px 100% 100%;
        overflow: hidden;
        border: 4px solid #fff;
        .bg {
          position: relative;
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: right;
          }
          &::before {
            content: "";
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            background-color: var(--mainColor);
            z-index: 2;
            opacity: .2;
          }
        }
        button {
          position: absolute;
          top: 45%;
          left: 45%;
          background: var(--mainColor);
          border: none;
          width: 70px;
          height: 70px;
          border-radius: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 4;
          cursor: pointer;
          border:  2px solid #fff;
          img {
            width: 30px;
            height: 30px;
            object-fit: contain;
          }
        }
      }
      &::before {
        content: "";
        top: -670px;
        left: 20px;
        width: 915px;
        height: 915px;
        position: absolute;
        border-radius: 50%;
        background-color: var(--mainColor);
        z-index: -1;
        opacity: 0.1;
      }
      &::after {
        content: "";
        top: -280px;
        left: -350px;
        width: 915px;
        height: 915px;
        opacity: 0.45;
        position: absolute;
        border-radius: 50%;
        background-image: linear-gradient(
          95deg,
          var(--secondColor) 0%,
          var(--mainColor) 110%
        );
        z-index: -1;
        opacity: 0.1;
      }
    }
  }
}
</style>
