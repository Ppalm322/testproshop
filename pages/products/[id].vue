<template>
  
  <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
     </div>
       <img :src="product.thumbnail" :alt="product.imageAlt" class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 w-lg h-lg m-auto mt-50
" />
            <div class="mt-4 flex justify-self-center ">
              <div class="grid ">
                <h3 class="text-sm text-gray-700 ">
                  <a :href="product.href" class="menu-button ">
                    <span aria-hidden="true" class="absolute inset-0 " />
                    {{ product.title }}
                  </a>
                </h3>
               
                <p class="mt-1 text-sm text-gray-500 ">{{ product.description }}</p>
              </div>
              <p class="text-sm font-medium text-gray-900 ">{{ product.price }}</p>
            </div>
</template>
<script setup>
    const {id} = useRoute().params;
    const{data: product} =await useFetch('https://dummyjson.com/products/'+id);







</script>