<script>
export default {
   props: {
      txt: String,
      specialTxt: {
         Boolean,
         default: false,
      }
   },
   computed: {
      txtManager() {
         if (this.specialTxt) {
            return 'w-[146px] h-[40px] hover:bg-neo-dark-violet text-neo-dark-violet hover:text-neo-light-gray border-[1.5px] border-neo-dark-violet'
         }
         else {
            return 'text-neo-grayish-violet hover:text-neo-dark-violet'
         }
      }
   }
}
</script>
<template>
   <h3 :class="` flex justify-center items-center ${txtManager} text-[13px] leading-[15px] tracking-[1.5px] font-bold uppercase cursor-pointer`">
      {{ txt }}
   </h3>
</template>