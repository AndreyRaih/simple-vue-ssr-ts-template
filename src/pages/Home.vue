<template>
  <div :class="$style.home">
    <img alt="Vue logo" src="../public/logo.png">
    <Greeting :count="visitCounter" />
    <a :class="$style.link" @click="$router.push('about')">About page</a>
  </div>
</template>

<style module>
.home {
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

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  title: 'test',
  components: {
    Greeting: () => import('../components/Greeting.vue')
  },
  asyncData ({ store }) {
    return store.dispatch('users/fetchData');
  },
  data () {
    return {
      visitCounter: null
    }
  },
  methods: {
    updateVisitData () {
      if (localStorage.getItem('visit')) {
        const savedValue = localStorage.getItem('visit');
        this.visitCounter = savedValue ? parseInt(savedValue) : 0;
      }
      const visit = this.visitCounter + 1;
      localStorage.setItem('visit', visit.toString());
    }
  },
  mounted () {
    this.updateVisitData();
  }
})

</script>
