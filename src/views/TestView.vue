<script setup>
import { reactive, computed, ref, onMounted, onUpdated, onUnmounted } from "vue";

onMounted(() => {
  console.log(`hello`);
});

const count = ref(0);

onUpdated(() => {
  console.log(count.value);
});

onUnmounted(() => console.log(`goodbye`))
</script>

<template>
  <main>
    <button id="count" @click="count++">{{ count }}</button>
  </main>
</template>
