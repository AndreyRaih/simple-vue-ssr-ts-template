<template>
  <div :class="$style.home">
    <img alt="Vue logo" src="../public/logo.png">
    <Greeting :count="visitCounter" />
    <a :class="$style.link" @click="$router.push('about')">Go to About page</a>
  </div>
</template>

<style module>
.home {
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

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  title: 'Home Page App',
  async asyncData ({ store }) {
    // This code run only at server
    await store.dispatch('users/fetchData');
  },
  components: {
    Greeting: () => import('../components/Greeting.vue')
  }
})
export default class Home extends Vue {
  visitCounter: number | null = null;
  updateVisitData () {
    if (localStorage.getItem('visit')) {
      const savedValue = localStorage.getItem('visit');
      this.visitCounter = savedValue ? parseInt(savedValue) : 0;
    }
    const visit = this.visitCounter + 1;
    localStorage.setItem('visit', visit.toString());
  }
  mounted () {
    // This code run only at client
    this.updateVisitData();
  }
};
</script>
