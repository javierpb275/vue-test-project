<script setup>
import { reactive, computed, ref } from "vue";
const type = ref("s");
const awesome = ref(false);
</script>

<template>
  <main>
    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else-if="type === 'C'">C</div>
    <div v-else>Not A/B/C</div>
    <button @click="awesome = !awesome">Toggle</button>
    <h1 v-show="awesome">Hello!</h1>
  </main>
</template>
