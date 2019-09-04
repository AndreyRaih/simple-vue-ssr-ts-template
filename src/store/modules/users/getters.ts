import { GetterTree } from 'vuex';
import { UserState } from './types';
import { State } from '../../types';

export default <GetterTree<UserState, State>> {
  usersCountStr(state): string {
    const currentUser = state.users ? state.users[state.users.length - 1] : null;
    const result = currentUser ? `Current user is ${currentUser.name}` : 'Loading...';
    return result;
  }
};