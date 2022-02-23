<script setup>
import { reactive, computed, ref } from "vue";

const items = ref([{ message: "Foo" }, { message: "Bar" }]);

const myObject = reactive({
  title: "How to do lists in Vue",
  author: "Jane Doe",
  publishedAt: "2016-04-10",
});
</script>

<template>
  <main>
    <li v-for="(item, index) of items" :key="item">
      {{ index }} - {{ item.message }}
    </li>
    <br /><br />
    <li v-for="(value, key, index) in myObject" :key="value">
      {{ index }}. {{ key }}: {{ value }}
    </li>
  </main>
</template>
