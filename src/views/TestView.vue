<script setup>
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const counterStore = useCounterStore();
const { increment } = counterStore;
const { counter, doubleCount, name } = storeToRefs(counterStore);

const inputName = ref("");

const changeName = (newName) => {
  counterStore.$patch((state) => {
    state.name = newName;
  });
};
</script>

<template>
  <main>
    <p>{{ counter }}</p>
    <p>{{ doubleCount }}</p>
    <button @click="increment">+1</button>
    <hr />
    <p>{{ name }}</p>
    <input type="text" placeholder="change name..." v-model="inputName" />
    <button @click="changeName(inputName)">change name</button>
    <hr />
    <button @click="counterStore.$reset()">reset</button>
  </main>
</template>
