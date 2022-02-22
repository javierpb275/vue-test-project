<script setup>
const hello = false;
const googleLink = "https://www.google.com/";
const saySth = () => {
  if (hello) {
    alert("hello");
  } else {
    alert("bye");
  }
};
const someAttribute = 'href';
const someUrl = "https://www.google.com/";
const someEvent = 'focus';
const onSubmit = () => {
  alert('submitted form!')
}
</script>

<template>
  <main>
    <p v-if="hello">hello</p>
    <p v-else>bye</p>
    <a :href="googleLink">google</a>
    <br>
    <a :[someAttribute]="someUrl">some place</a>
    <p @click="saySth">say sth</p>
    <input @[someEvent]="saySth" type="text"/>
    <form @submit.prevent="onSubmit">
      <button type="submit">submit form</button>
    </form>
  </main>
</template>
