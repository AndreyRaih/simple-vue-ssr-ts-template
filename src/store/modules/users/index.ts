import { Module } from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import { UserState } from './types';
import { State } from '../../types';

export const state: UserState = {
  users: [],
  error: false
};

const namespaced: boolean = true;

export default <Module<UserState, State>> {
  namespaced,
  state,
  getters,
  actions,
  mutations
};