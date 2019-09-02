import Vue from 'vue';
import Vuex from 'vuex';
import users from './modules/users/index';
import { State } from './types';
import { Store } from 'vuex';

Vue.use(Vuex);

export function createStore (): Store<State> {
  return new Vuex.Store({
    state: {
      firstName: 'Simon',
      lastName: 'Nomis'
    },
    modules: {
      users
    }
  });
};
