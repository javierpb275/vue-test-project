<script setup>
import { reactive, computed, ref } from "vue";
const toggle = ref("yes");

const toggle2 = ref("TRUE");
const dynamicFalseValue = ref("FALSE");
const dynamicTrueValue = ref("TRUE");

const pick = ref("two");
const first = ref("one");
const second = ref("two");

const selected = reactive({ number: 321 });
</script>

<template>
  <main>
    <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />
    <span>{{ toggle }}</span>
    <input
      type="checkbox"
      v-model="toggle2"
      :true-value="dynamicTrueValue"
      :false-value="dynamicFalseValue"
    />
    <span>{{ toggle2 }}</span>

    <input type="radio" v-model="pick" :value="first" />
    <input type="radio" v-model="pick" :value="second" />
    <span>{{ pick }}</span>

    <select v-model="selected">
      <option :value="{ number: 123 }">123</option>
      <option :value="{ number: 321 }">321</option>
    </select>
    <span>{{ selected.number }}</span>
  </main>
</template>
