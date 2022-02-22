<script setup>
import { ref } from "vue";

const count = ref(0);

function increment() {
  count.value++;
}
</script>

<template>
  <main>
    <button @click="increment">
      {{ count }}
    </button>
  </main>
</template>
