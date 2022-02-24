<script setup>
import BaseLayout from "../components/BaseLayout.vue";
</script>

<template>
  <main>
    <BaseLayout>
      <template #header>
        <h1>Here might be a page title</h1>
      </template>

      <template #default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>

      <template #footer>
        <p>Here's some contact info</p>
      </template>
    </BaseLayout>
    <BaseLayout>
      <template #header>
        <h1>Here might be a page title</h1>
      </template>

      <!-- implicit default slot -->
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <template #footer>
        <p>Here's some contact info</p>
      </template>
    </BaseLayout>
  </main>
</template>
