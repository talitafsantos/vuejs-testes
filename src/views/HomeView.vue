<script setup lang="ts">
import { ref } from 'vue/dist/vue.js';
import ProductCard from '@/components/ProductCard/ProductCard.vue'

const product = ref([{title: 'Titulo', body:'lorem ipsum dolor sit amet'}])
</script>

<template>
  <main>
    <ProductCard :product="product"/>
  </main>
</template>
