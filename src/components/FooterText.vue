<script>
export default {
   data() {
      return {
         data: [
            {
               title: 'Our company',
               paragraph: ['How we work', 'Why Insure?', 'View plans', 'Reviews']
            },
            {
               title: 'Help me',
               paragraph: ['FAQ', 'Terms of use', 'Privacy policy', 'Cookies']
            },
            {
               title: 'Contact',
               paragraph: ['Sales', 'Support', 'Live chat']
            },
            {
               title: 'Others',
               paragraph: ['Careers', 'Press', 'Licenses']
            }
         ]
      }
   },
   props: {
      txt: String,
      index: Number,
   }
}
</script>
<template>
   <div class=" flex flex-col gap-9 TB:gap-5 DT:gap-9">
      <h4 class=" text-neo-grayish-violet uppercase">{{ data[index].title }}</h4>
      <div class=" flex flex-col gap-4">
         <h5 class=" uppercase hover:underline cursor-pointer select-none" 
         v-for=" item in data[index].paragraph">
            {{ item }}
         </h5>
      </div>
   </div>
</template>