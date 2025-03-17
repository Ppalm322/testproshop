<template>
      <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
     </div>
        <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div class="hidden sm:mb-8 sm:flex sm:justify-center">
            <div class="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              เกี่ยวกับร้าน  <a href="/products" class="font-semibold text-indigo-600"><span class="absolute inset-0" aria-hidden="true" />Read more <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
          <div class="text-center">
            <h1 class="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">ร้าน D-Day car wash Wallcome</h1>
            <p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">ยินดีต้อนรับเข้าสู่ ร้านดีเดย์ คาร์วอช เลือกชมสินค้าได้เลย ครับ</p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <a href="/products" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
              <a href="/products" class="text-sm/6 font-semibold text-gray-900">Learn more <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
        <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div class="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
        
 
        <div class="bg-white">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
  
        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div v-for="product in data.products"class="group relative">
            <NuxtLink :to="`/products/${product.id}`">
              <img :src="product.thumbnail" :alt="product.imageAlt" class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <a :href="product.href" class="menu-button">
                    <span aria-hidden="true" class="absolute inset-0" />
                    {{ product.title }}
                  </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">{{ product.description }}</p>
              </div>
              <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
            </div>
            </NuxtLink>
            
       
          </div>
        </div>
      </div>
    </div>
   
</template>

<script setup>
          useHead({
                  title: " D-day sell |สินค้าทั้งหมด",
                  meta: [
                      { name: "description", content: "ข้อมูลสินค้า" }
                  ]
          })
const { data: data } = await useFetch('https://dummyjson.com/products')
console.log(data)


     
</script>

<style  scoped>
/* 
.container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

}

.container div{
  width: 300px;
  height: 300px;
  margin: 30px 15px;
  background: #333;
}
.title{
  color: white;
  text-align: center;
  font-size: 1.2em;
}
.container div:hover{
  background: orange;
}
img{
  width: 300px;
  height: 300px;
  margin-top: auto;
}
a{
  text-decoration: none;
} */

</style>