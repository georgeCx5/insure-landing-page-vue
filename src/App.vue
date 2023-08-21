<script>
import NavBtn from './components/NavBtn.vue'
import NavNoBarBtn from './components/NavNoBarBtn.vue'
import Features from './components/Features.vue'
import NetworkIcon from './components/NetworkIcon.vue'
import FooterText from './components/FooterText.vue'

import Logo from '@/assets/images/logo.svg?component'
import IconOpen from '@/assets/images/icon-hamburger.svg?component'
import IconClose from '@/assets/images/icon-close.svg?component'
import BgPatternNav from '@/assets/images/bg-pattern-mobile-nav.svg?component'
import BgPatternIntroLeftMobile from '@/assets/images/bg-pattern-intro-left-mobile.svg?component'
import BgPatternIntroLeftDesktop from '@/assets/images/bg-pattern-intro-left-desktop.svg?component'
import BgPatternIntroRightMobile from '@/assets/images/bg-pattern-intro-right-mobile.svg?component'
import BgPatternIntroRightDesktop from '@/assets/images/bg-pattern-intro-right-desktop.svg?component'
import BgPatternHowWeWorkMobile from '@/assets/images/bg-pattern-how-we-work-mobile.svg?component'
import BgPatternHowWeWorkDesktop from '@/assets/images/bg-pattern-how-we-work-desktop.svg?component'
import BgPatternFooterMobile from '@/assets/images/bg-pattern-footer-mobile.svg?component'
import BgPatternFooterDesktop from '@/assets/images/bg-pattern-footer-desktop.svg?component'

import imgMobile from '@/assets/images/image-intro-mobile.jpg';
import imgDesktop from '@/assets/images/image-intro-desktop.jpg';
export default {
  data() {
    return {
      imgMobile,
      imgDesktop,
      barClosed: false,
    }
  },
  components: {
    NavBtn,
    NavNoBarBtn,
    Features,
    NetworkIcon,
    FooterText,

    Logo,
    IconOpen,
    IconClose,
    BgPatternNav,
    BgPatternIntroLeftMobile,
    BgPatternIntroLeftDesktop,
    BgPatternIntroRightMobile,
    BgPatternIntroRightDesktop,
    BgPatternHowWeWorkMobile,
    BgPatternHowWeWorkDesktop,
    BgPatternFooterMobile,
    BgPatternFooterDesktop,
  }
}
</script>
<template>
  <body class="flex flex-col items-center text-neo-violet font-karla">
    <nav
      class=" flex justify-between items-center w-full h-20 bg-white px-6 TB:px-10 DT:px-24 DTL:px-40 DTX:px-[12.5rem] DT:z-50">
      <Logo />
      <!-- Nav Mobile -->
      <button @click="barClosed = !barClosed" class=" TB:hidden cursor-pointer">
        <IconOpen v-show="!barClosed" />
        <IconClose v-show="barClosed" />
      </button>
      <div v-show="barClosed"
        class=" absolute right-0 top-20 flex TB:hidden flex-col items-center gap-6 w-full h-[587px] px-6 pt-10 bg-neo-dark-violet text-center z-50">
        <NavBtn txt="How we work" />
        <NavBtn txt="Blog" />
        <NavBtn txt="Account" />
        <NavBtn txt="View plans" hSize="h-[56px]" borderColor="border-neo-light-gray" />
        <BgPatternNav class=" absolute right-0 bottom-0 pointer-events-none" />
      </div>
      <!-- Nav Tablet/Desktop -->
      <div class=" hidden TB:flex TB:items-center TB:gap-[20px] DT:gap-[25px] DTL:gap-[28px] DTX:gap-10">
        <NavNoBarBtn txt="How we work" />
        <NavNoBarBtn txt="Blog" />
        <NavNoBarBtn txt="Account" />
        <NavNoBarBtn txt="View plans" :specialTxt="true" />
      </div>
    </nav>
    <main class=" flex flex-col gap-[140px] DT:gap-[158px] w-[375px] TB:w-[768px] DT:w-full mb-[140px] DT:mb-[150px]">
      <div class=" DT:relative TB:flex TB:h-[451px] DT:h-[540px] DTL:h-[600px] DT:mb-[148px]">
        <img class=" DT:hidden" :src="imgMobile" alt="imgMobile" draggable="false">
        <img
          class=" DT:absolute DT:top-[105px] DT:right-[115px] DTL:right-[165px] DTX:right-[12.5rem] hidden DT:block DT:w-[459px] DTL:w-[540px] DTX:w-[621px] DT:z-40 "
          :src="imgDesktop" alt="imgDesktop" draggable="false">
        <div
          class=" relative DT:w-full px-6 DT:px-[115px] DTL:px-[165px] DTX:px-[12.5rem] bg-neo-violet text-neo-light-gray text-center DT:text-left">
          <div class=" absolute left-0 top-0 DT:top-[428px] pointer-events-none">
            <BgPatternIntroLeftMobile class=" DT:hidden" />
            <BgPatternIntroLeftDesktop class=" hidden DT:block" />
          </div>
          <div class=" absolute right-0 -bottom-[156px] DT:bottom-auto DT:-top-[57px] pointer-events-none">
            <BgPatternIntroRightMobile class=" DT:hidden" />
            <BgPatternIntroRightDesktop class=" hidden DT:block" />
          </div>
          <div
            class=" DT:relative flex flex-col justify-center items-center DT:items-start gap-4 DTX:gap-6 DT:w-[490px] DTL:w-[540px] DTX:w-[625px] h-[500px] TB:h-full">
            <div class=" absolute top-[104px] hidden DT:block w-[150px] h-[1px] bg-white "></div>
            <h1
              class=" DTL:pr-4 DTX:pr-32 text-[48px] DT:text-[64px] DTL:text-[72px] leading-[48px] DT:leading-[56px] DTL:leading-[64px] tracking-[-.67px] DT:tracking-[-1px] font-serif-display z-30">
              Humanizing your insurance.
            </h1>
            <p class=" mb-4 DT:mb-2 px-[2px] text-[16px] leading-[26px]">
              Get your life insurance coverage easier and faster. We blend our expertise
              and technology to help you find the plan that’s right for you. Ensure you
              and your loved ones are protected.
            </p>
            <button
              class=" w-[146px] h-[40px] hover:bg-neo-light-gray hover:text-neo-dark-violet text-[13px] leading-[15px] tracking-[1.5px] font-bold uppercase border-[1.5px] border-neo-light-gray select-none ">View
              plans</button>
          </div>
        </div>
      </div>
      <div class=" flex flex-col DT:items-center gap-20 text-center DT:text-left">
        <div class=" flex flex-col items-center DT:items-start DT:w-[1110px] DTX:w-[1440px] gap-10">
          <div class=" w-[150px] h-[1px] bg-extra1"></div>
          <h1
            class=" text-[48px] DT:text-[64px] DTL:text-[72px] leading-[48px] DT:leading-[56px] DTL:leading-[64px] tracking-[-.67px] DT:tracking-[-1px] font-serif-display">
            We’re different</h1>
        </div>
        <div class=" flex flex-col DT:flex-row DTX:justify-between gap-14 DT:gap-[30px] DTX:gap-[10rem]">
          <Features :index="0" icon="One" />
          <Features :index="1" icon="Two" />
          <Features :index="2" icon="Three" />
        </div>
      </div>
      <div
        class=" relative flex flex-col TB:flex-row justify-center TB:justify-between items-center gap-10 h-[344px] TB:h-[250px] bg-neo-violet mx-6 TB:mx-10 DT:mx-[115px] DTL:mx-[165px] DTX:mx-[12.5rem] TB:px-8 DT:px-16 DTL:px-20 DTX:px-24 text-neo-light-gray text-center DT:text-left">
        <div class=" absolute right-0 top-0 pointer-events-none">
          <BgPatternHowWeWorkMobile class=" TB:hidden" />
          <BgPatternHowWeWorkDesktop class=" hidden TB:block" />
        </div>
        <h1
          class=" TB:w-[415px] DTL:w-[475px] text-[40px] DT:text-[48px] DTL:text-[56px] leading-[40px] DT:leading-[48px] DTL:leading-[56px] tracking-[-.56px] DT:tracking-[-.72px] font-serif-display z-30">
          Find out more about how we work</h1>
        <button
          class=" w-[160px] h-[40px] hover:bg-neo-light-gray hover:text-neo-dark-violet text-[13px] leading-[15px] tracking-[1.5px] font-bold uppercase border-[1.5px] border-neo-light-gray select-none z-30">How
          we work</button>
      </div>
    </main>
    <footer
      class=" relative flex flex-col gap-10 DT:gap-9 items-center w-full px-6 TB:px-12 DT:px-[115px] DTL:px-[165px] DTX:px-[12.5rem] py-[88px] DT:py-16 bg-neo-light-gray">
      <div class=" absolute top-0 left-0 pointer-events-none">
        <BgPatternFooterMobile class=" TB:hidden" />
        <BgPatternFooterDesktop class=" hidden TB:block" />
      </div>
      <div class=" flex flex-col TB:flex-row TB:justify-between items-center gap-8 TB:w-full z-30">
        <Logo />
        <div class=" flex items-center gap-4">
          <NetworkIcon iconName="facebook" />
          <NetworkIcon iconName="twitter" />
          <NetworkIcon iconName="pinterest" />
          <NetworkIcon iconName="instagram" />
        </div>
      </div>
      <div class=" w-full h-[1px] bg-neo-grayish-violet TB:z-30"></div>
      <div
        class=" flex flex-col TB:flex-row TB:justify-center DT:justify-start gap-10 TB:gap-24 DT:gap-44 DTL:gap-48 DTX:gap-[16rem] w-[200px] TB:w-full text-center DT:text-left text-[13px] leading-[15px] tracking-[1.5px] font-bold TB:z-30">
        <FooterText :index="0" />
        <FooterText :index="1" />
        <FooterText :index="2" />
        <FooterText :index="3" />
      </div>
    </footer>
  </body>
</template>