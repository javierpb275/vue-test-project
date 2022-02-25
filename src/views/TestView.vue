<script setup>
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";

const counterStore = useCounterStore();
const { increment } = counterStore;
const { counter, doubleCount } = storeToRefs(counterStore);
</script>

<template>
  <main>
    <p>{{ counter }}</p>
    <p>{{ doubleCount }}</p>
    <button @click="increment">+1</button>
  </main>
</template>
