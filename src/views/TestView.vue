<script setup>
import { reactive } from "vue";

const state = reactive({ count: 0 });

function increment() {
  state.count++;
  nextTick(() => {
    // access updated DOM
  });
}

const obj = reactive({
  nested: { count: 0 },
  arr: ["foo", "bar"],
});

function mutateDeeply() {
  obj.nested.count++;
  obj.arr.push("baz");
}
</script>

<template>
  <main>
    <button @click="increment">
      {{ state.count }}
    </button>

    <button @click="mutateDeeply">
      {{ obj.nested.count }}
    </button>

    <ul>
      <li v-for="item in obj.arr" :key="item">{{ item }}</li>
    </ul>
  </main>
</template>
