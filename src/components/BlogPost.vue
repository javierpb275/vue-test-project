<script setup>
defineProps(["title"]);
defineEmits(["enlarge-text"]);
//const emit = defineEmits(['enlarge-text']) this way you do not need to use the $
</script>

<template>
  <div class="blog-post">
    <h4>{{ title }}</h4>
    <button @click="$emit('enlarge-text')">Enlarge text</button>
  </div>
</template>
