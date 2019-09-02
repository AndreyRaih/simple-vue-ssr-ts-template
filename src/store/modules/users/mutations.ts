import { MutationTree } from 'vuex';
import { UserState, User } from './types';

export default <MutationTree<UserState>> {
  USERS_LOADED (state, payload: User[]) {
    state.error = false;
    state.users = payload;
  },
  USERS_ERROR (state) {
    state.error = true;
    state.users = undefined;
  }
};