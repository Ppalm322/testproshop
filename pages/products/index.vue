<template>
    <div class="bg-white">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
  
        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div v-for="product in data"class="group relative">
            <img :src="product.thumbnail" :alt="product.imageAlt" class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <a :href="product.href">
                    <span aria-hidden="true" class="absolute inset-0" />
                    {{ product.title }}
                  </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">{{ product.description }}</p>
              </div>
              <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>

import { ref, onMounted } from 'vue'

const { $axios } = useNuxtApp()
// สร้างตัวแปร data สำหรับเก็บข้อมูลจาก API
const data = ref([])

// เรียกใช้งาน axios เมื่อ component ถูกโหลด
onMounted(async () => {
  try {
    const response = await $axios.get('/products') // เปลี่ยนเป็น endpoint ของคุณ
    data.value = response.data.products
    

  } catch (error) {
    console.error('Error fetching data:', error)
  }
})
    // useHead({
    //               title: " D-day sell |สิ้นค้าทั้งหมด",
    //               meta: [
    //                   { name: "description", content: "ข้อมูลสิ้นค้า" }
    //               ]
    //       })
    //       const { data: data } = await useFetch('https://dummyjson.com/products')
    //       console.log(data)
  </script>