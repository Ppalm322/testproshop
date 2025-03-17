<template>

<div class="bg-white">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            </div>

            <div class=" mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 class="text-2xl font-bold tracking-tight text-gray-900">ADD PRODUCT
                    <NuxtLink to="/" class="btn-primary float-end">
                    BLACK </NuxtLink>   
            </h2> 
            
          
            <div >
                <form @submit.prevent="handleSubmit" class="mt-15 grid">
                    <div class="mb-3 ml-20">
                        <label>Name :</label>      
                        <input type="text" v-model="name" id="" required  class="rounded hover:bg-gray-500 ml-15 rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/50 focus:outline-none">
                        <p v-if="nameError">{{ nameError }}</p>
                    </div>
                   <div class="mb-3 ml-20 ">
                        <label>Phone :</label>
                         <input type="text" v-model="Phone" required id=""  class="rounded hover:bg-gray-500 ml-15 rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/50 focus:outline-none">
                     
                         <p v-if="PhoneError" class="text-red-600">{{ PhoneError }}</p>
                        </div>
                   <div class="mb-3 ml-20">
                        <label>Email :</label>  
                        <input type="Email" v-model="Email" required id=""  class="rounded hover:bg-gray-500 ml-15 rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/50 focus:outline-none">                   
                        <p v-if="emailError">{{ emailError }}</p>
                    </div>
                   <div class="mb-3 ml-20">
                        <label>Discription :</label>   
                        <input type="text" v-model="Discription" required id=""  class="rounded hover:bg-gray-500 ml-15 rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/50 focus:outline-none">
                      
                   </div>
                   <div class="mb-3 ml-20">
                        <label>Type :</label>               
                        <input type="text" v-model="Type" required id=""  class="rounded hover:bg-gray-500 ml-15 rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/50 focus:outline-none">
                        <p v-if="TypeError">{{ TypeError }}</p>
 
                   </div>
                    <div class="mb-3 ">
                        <button type="submit" class="btn-primary m-5 ">Save changes</button>                 
                    </div>
                 
                </form>
                <p v-if="responseMessage">{{ responseMessage }}</p>
            </div>
        </div>
    </div>


 
</template>

<script setup>


// const Phone = ref('');
// const name = ref('');
// const Type = ref('');
// const Discription = ref('');
// const Email = ref('');
// const responseMessage = ref('');

// const handleSubmits = async () => {
//   try {
//     console.log(Type,Phone,name,Email,Discription,responseMessage )
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };



import { ref } from 'vue';

import { useForm } from '~/form.js';
const { responseMessage, submitForm } = useForm();
const Phone = ref('');
const name = ref('');
const Type = ref('');
const Discription = ref('');
const Email = ref('');


// ตรวจสอบเงื่อนไข
const nameError = computed(() => !name.value ? 'กรุณากรอกชื่อ' : '')
const PhoneError = computed(() => !Phone.value  ? 'กรุณากรอกเบอร์' : '')
const emailError = computed(() => {
  if (!Email.value) return 'กรุณากรอกอีเมล'
  return !Email.value.includes('@') ? 'อีเมลไม่ถูกต้อง' : ''
})
const TypeError = computed(() => Type.value < 18 ? 'อายุขั้นต่ำคือ 18 ปี' : '')

// ฟังก์ชันส่งฟอร์ม

const handleSubmit = async () => {
    if (!nameError.value && !emailError.value && !ageError.value) {
        submitForm(name.value, Email.value, Phone.value,Type.value ,Discription.valueasf);
    console.log('✅ ส่งฟอร์มสำเร็จ:', { name: name.value, Email: Email.value, Type: Type.value })
  }

};
</script>

<style lang="scss" scoped>

</style>