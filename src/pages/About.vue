<template>
  <div :class="$style.about">
    <h1>This is VueJS + SSR + TS + CSS/Stylus Modules template</h1>
    <h2>Simplify :)</h2>
    <a :class="$style.link" @click="$router.back()">Back</a>
  </div>
</template>

<style module>
.about {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
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
