<script setup>
import { ref } from "vue";
defineProps({
  count: {
    type: Number,
    required: true,
  },
});
const emit = defineEmits(["increaseBy"]);
</script>

<template>
  <button @click="emit('increaseBy', count)">Increase by {{ count }}</button>
</template>
