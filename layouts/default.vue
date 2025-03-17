
<template>
  <div>
    <nve/>
    
    <slot/>

     <footers/>
  </div>
</template>

<script setup>

import footers from '~/components/footer.vue';
import nve from '~/components/nve.vue';
</script>

<style lang="scss" scoped>

</style>