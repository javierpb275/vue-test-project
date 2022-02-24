<script setup>
import { reactive, computed, ref } from "vue";

const message = ref("");
</script>

<template>
  <main>
    <p>Message is: {{ message }}</p>
    <input v-model="message" placeholder="edit me" />
    <br>
    <span>Multiline message is:</span>
    <p style="white-space: pre-line">{{ message }}</p>
    <textarea v-model="message" placeholder="add multiple lines"></textarea>
  </main>
</template>
