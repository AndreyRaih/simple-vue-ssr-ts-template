<template>
  <div :class="$style.about">
    <h1>This is VueJS + SSR + TS + CSS/Stylus Modules template</h1>
    <a :class="$style.link" @click="$router.back()">Go back</a>
  </div>
</template>

<style module>
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  height: calc(100vh - 110px);
}
.link {
  color: #41b883;
  opacity: 0.5;
  transition: 0.2s;
  cursor: pointer;
  margin: 8px;
}
.link:hover {
  color: #41b883;
  opacity: 1;
  transition: 0.2s;
}
</style>
