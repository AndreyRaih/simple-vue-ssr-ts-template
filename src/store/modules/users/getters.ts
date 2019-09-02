import { GetterTree } from 'vuex';
import { UserState } from './types';
import { State } from '../../types';

export default <GetterTree<UserState, State>> {
  usersCountStr(state): string {
    const lastUser = state.users ? state.users[state.users.length - 1] : null;
    const result = lastUser ? `Last user is ${lastUser.name}` : 'Loading...';
    return result;
  }
};