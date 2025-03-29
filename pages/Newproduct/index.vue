<template>

<div class="bg-white">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            </div>

            <div class=" mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 class="text-2xl font-bold tracking-tight text-gray-900">ADD PRODUCT
                    <NuxtLink to="/" class="btn-primary float-end">
                    BLACK </NuxtLink>   
            </h2> 
            
           
              <div class="bg-white p-8 rounded-lg shadow-md w-350">
              <h2 class="text-center text-xl font-bold mb-4">:: เพิ่มข้อมูลสมาชิก ::</h2>
                <form @submit.prevent="submitForm" class="mt-15 grid">
                    <div class="mb-3 ml-20">
                        <label>Name :</label>      
                        <input type="text"
                        v-model="formData.name" id="name" required  class="rounded hover:bg-gray-500 ml-15 rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/50 focus:outline-none">
                        <p v-if="nameError" class="text-red-600">{{ nameError }}</p>
                    </div>
                   <div class="mb-3 ml-20 ">
                        <label>Phone :</label>
                         <input type="teส" v-model="formData.phone" placeholder="กรอกตัวเลข" @input="formData.phone = formData.phone.replace(/\D/g, '')"
                         required id="phone" maxlength="10"  class="rounded hover:bg-gray-500 ml-15 rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/50 focus:outline-none">
                     
                         <p v-if="PhoneError" class="text-red-600">{{ PhoneError }}</p>
                        </div>
                   <div class="mb-3 ml-20">
                        <label>Email :</label>  
                        <input type="Email" v-model="formData.email" required id="email"  class="rounded hover:bg-gray-500 ml-15 rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/50 focus:outline-none">                   
                        <p v-if="emailError">{{ emailError }}</p>
                    </div>
                   <div class="mb-3 ml-20">
                        <label>Discription :</label>   
                        <input type="text" v-model="formData.description" required id="description"  class="rounded hover:bg-gray-500 ml-15 rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/50 focus:outline-none">
                      
                   </div>
                   <div class="mb-3 ml-20">
                        <label >Type :</label>               
                        <input type="text" v-model="formData.type" required id="type"  class="rounded hover:bg-gray-500 ml-15 rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/50 focus:outline-none">
                        <p v-if="TypeError">{{ TypeError }}</p>
                   </div>
                    <div class="mb-3 ">
                        <span v-if="errorMessage" style="color: red;">{{ errorMessage }}</span>
                        <button type="submit" class="btn-primary m-5 ">Save changes</button>                 
                    </div>
                </form>
          
                <p v-if="responseMessage">{{ responseMessage }}</p>
            </div>
        </div>
    </div>


 
</template>

<script setup>
import axios from 'axios';

import { ref } from 'vue';
const formData = ref({
  name: '',
  email: '',
  phone: '',
  type: '',
  description: ''
});

const nameError = computed(() => !formData.value.name ? 'กรุณากรอกชื่อ' : '')
const emailError = computed(() => {
  if (!formData.value.email) return 'กรุณากรอกอีเมล'
  return !formData.value.email.includes('@') ? 'อีเมลไม่ถูกต้อง' : ''
})
const TypeError = computed(() => formData.value.type < 18 ? 'อายุขั้นต่ำคือ 18 ปี' : '')



const submitForm = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/store-data', formData.value, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    alert('Data saved successfully!');
    console.log(response.data);

    // รีเซ็ตฟอร์มหลังจากส่งสำเร็จ
    formData.value = { name: '', email: '', phone: '', type: '', description: '' };
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    alert('Failed to save data!');
  }
};

</script>

<style lang="scss" scoped>

</style>