<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
<div>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  </div>
</template>

