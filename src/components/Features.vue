<script>
import One from '@/assets/images/icon-snappy-process.svg?component'
import Two from '@/assets/images/icon-affordable-prices.svg?component'
import Three from '@/assets/images/icon-people-first.svg?component'
export default {
   data() {
      return {
         data: [
            {
               title: 'Snappy Process',
               paragraph: 'Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.'
            },
            {
               title: 'Affordable Prices',
               paragraph: 'We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.'
            },
            {
               title: 'People First',
               paragraph: 'Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.'
            }
         ]
      }
   },
   components: {
      One,
      Two,
      Three,
   }
   ,
   props: {
      index: Number,
      icon: {
         String,
         default: 'One'
      }
   }
}
</script>
<template>
   <div class=" flex flex-col TB:flex-row-reverse DT:flex-col TB:justify-center items-center DT:items-start gap-8">
      <component :is="icon" />
      <div class=" flex flex-col gap-4 TB:w-[475px] DT:w-[350px]">
         <h2 class=" text-[28px] leading-[38px] tracking-[-.39px] font-serif-display">
            {{ data[index].title }}
         </h2>
         <p class=" text-neo-grayish-violet text-[16px] leading-[26px]">
            {{ data[index].paragraph }}
         </p>
      </div>
   </div>
</template>