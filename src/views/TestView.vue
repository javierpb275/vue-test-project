<script setup>
import { ref, reactive, watch } from "vue";

const x = ref(0);
const y = ref(0);

// single ref
watch(x, (newX) => {
  console.log(`x is ${newX}`);
});

// getter
watch(
  () => x.value + y.value,
  (sum) => {
    console.log(`sum of x + y is: ${sum}`);
  }
);

// array of multiple sources
watch([x, () => y.value], ([newX, newY]) => {
  console.log(`x is ${newX} and y is ${newY}`);
});

const obj = reactive({ count: 0 })

watch(
  () => obj.count,
  (count) => {
    console.log(`count is: ${count}`)
  }
)
</script>

<template>
  <main>
    <input type="text" v-model.number="x" />
    <input type="text" v-model.number="y" />
    <br>
    <input type="text" v-model.number="obj.count" />
  </main>
</template>
