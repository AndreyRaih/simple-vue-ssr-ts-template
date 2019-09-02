<template>
  <div :class="$style.container">
    <div :class="$style.greeting">
      <h1>{{greetingStr}}</h1>
    </div>
    <div :class="$style.users">
      {{usersStr}}
    </div>
    <div :class="$style.visits">It's your {{count}} visit</div>
  </div>
</template>

<style lang="stylus" module>
.container
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  flex-wrap: nowrap

.greeting, .users, .visits
  margin: 4px;

.link
  color: #41b883;
  opacity: 0.5;
  transition: 0.2s;
  cursor: pointer;
  margin: 8px;
  &:hover
    color: #41b883;
    opacity: 1;
    transition: 0.2s;

</style>

<script lang="ts">
import Vue from "vue";
import Component from 'vue-class-component';
import { State, Action, Getter } from "vuex-class";
import users from '../store/modules/users'
const namespace: string = "users";

@Component({
  props: {
    count: {
      default: 0
    }
  }
})
export default class HelloView extends Vue {
  @State('firstName') firstName: any;
  @State('lastName') lastName: any;
  @Getter('usersCountStr', { namespace }) usersStr: string;

  get greetingStr(): string {
    return `Hello, ${this.firstName} ${this.lastName}!`
  }

}
</script>
