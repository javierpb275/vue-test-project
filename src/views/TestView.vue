<script setup>
import BlogPost from "../components/BlogPost.vue";
import CountButton from "../components/CountButton.vue";
import { ref } from "vue";

const posts = ref([
  { id: 1, title: "My journey with Vue" },
  { id: 2, title: "Blogging with Vue" },
  { id: 3, title: "Why Vue is so fun" },
]);

const postFontSize = ref(1);

const count = ref(1)

function increaseCount(n) {
  count.value += n;
}
</script>

<template>
  <main>
    <div :style="{ fontSize: postFontSize + 'em' }">
      <blog-post
        v-for="post in posts"
        :key="post.id"
        :post-title="post.title"
        @enlarge-text="postFontSize += 0.1"
      ></blog-post>
    </div>
    <CountButton @increase-by="increaseCount" :count="count"/>
  </main>
</template>
