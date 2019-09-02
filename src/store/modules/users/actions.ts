import axios from 'axios';
import { ActionTree } from 'vuex';
import { UserState, User } from './types';

export default <ActionTree<UserState, any>> {
  fetchData({ commit }): any {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      const payload: User[] = response.data.map((userObj: User) => <User>{
        email: userObj.email,
        id: userObj.id,
        name: userObj.name,
        phone: userObj.phone,
        username: userObj.username,
        website: userObj.website
      });
      commit('USERS_LOADED', payload);
    }, (error) => {
      console.log(error);
      commit('USERS_ERROR');
    });
  }
};