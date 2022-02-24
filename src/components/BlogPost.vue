<script setup>
defineProps({
  postTitle: {
    type: String,
    required: true,
  },
});
defineEmits(["enlarge-text"]);
</script>

<template>
  <div class="blog-post">
    <h4>{{ postTitle }}</h4>
    <button @click="$emit('enlarge-text')">Enlarge text</button>
  </div>
</template>
