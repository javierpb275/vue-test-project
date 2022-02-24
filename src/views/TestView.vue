<script setup>
import { reactive, computed, ref } from "vue";

const name = ref("Vue.js");

function greet(event) {
  alert(`Hello ${name.value}!`);
  if (event) {
    alert(event.target.tagName);
  }
}

function say(message) {
  alert(message);
}

function warn(message, event) {
  if (event) {
    event.preventDefault();
  }
  alert(message);
}
</script>

<template>
  <main>
    <button @click="greet">Greet</button>
    <button @click="say('hello')">Say hello</button>
    <button @click="say('bye')">Say bye</button>
    <button @click="warn('Form cannot be submitted yet.', $event)">
      Submit
    </button>
    <button @click="(event) => warn('Form cannot be submitted yet.', event)">
      Submit
    </button>
    <form @submit.prevent="onSubmit"></form>
    <form @submit.prevent></form>
  </main>
</template>
