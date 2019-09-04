<template>
  <div :class="$style.container">
    <div :class="$style.greeting">
      <h1>{{greetingStr}}</h1>
    </div>
    <div :class="$style.visits">It's your {{count}} visit</div>
    <div :class="$style.users">
      {{usersStr}}
      <div>
        <a :class="$style.link" @click="changeUserNameInGetter()">Change user name</a>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" module>
.container
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  flex-wrap: nowrap

.users, .visits
  text-align: center;
  margin: 8px

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

// Vue decorator
@Component({
  props: {
    count: {
      default: 0
    }
  }
})
export default class HelloView extends Vue {
  // Vuex decorators
  @State('firstName') firstName: any;
  @State('lastName') lastName: any;
  @Getter('usersCountStr', { namespace }) usersStr: string;
  @Action('changeUserNameInGetter', { namespace }) changeUserNameInGetter: any
  get greetingStr(): string {
    return `Hello, ${this.firstName} ${this.lastName}!`
  }
}
</script>
