<script>
export default {
   props: {
      txt: String,
      hSize: {
         String,
         default: 'h-[40px]'
      },
      borderColor: {
         String,
         default: 'border-transparent',
      }
   }
}
</script>
<template>
   <h3
      :class="` flex justify-center items-center w-full ${hSize} hover:bg-neo-light-gray text-neo-light-gray hover:text-neo-dark-violet text-[20px] leading-[40px] tracking-[1.36px] font-bold uppercase border ${borderColor} border-[1.5px] cursor-pointer select-none`">
      {{ txt }}</h3>
</template>