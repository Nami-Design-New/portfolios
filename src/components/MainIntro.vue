<template>
  <section class="intro">
    <div class="introData">
      <h1 class="introTitle">{{ introTitle }}</h1>
      <div class="introDes">
        <h5 v-for="des in introDes" :key="des">{{ des }}</h5>
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
  gap: 48px;
  min-height: 70vh;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
  .introTitle {
    font-weight: bold;
    font-size: 60px;
    background: linear-gradient(to right, var(--secondColor), var(--mainColor));
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    @media (max-width: 992px) {
      font-size: 40px;
    }
    @media (max-width: 768px) {
      font-size: 30px;
    }
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
      @media (max-width: 768px) {
        padding: 0 20px;
      }
      h5 {
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
        width: min(100% - 20px, 550px);
        border-radius: 100% 10px 100% 100%;
        overflow: hidden;
        border: 4px solid #fff;

        @media (max-width: 768px) {
          width: min(100% - 20px, 350px);
          margin: auto;
          border-radius:  100% 100% 10px 10px;

        }

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
            opacity: 0.2;
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
          border: 2px solid #fff;
          img {
            width: 30px;
            height: 30px;
            object-fit: contain;
          }
          &::before {
            content: "";
            width: 120%;
            height: 120%;
            border-radius: 50%;
            background-color: #ffffff4f;
            position: absolute;
            left: 50%;
            top: 50%;
            z-index: 0;
            transform: translate(-50%, -50%);
            animation: breathe 2s infinite linear;
            @keyframes breathe {
              50% {
                box-shadow: 0 0 0 10px #ffffffba;
              }
            }
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
