/**
 * @TODO: Define all the actions (creator) that uses a combination of actions from various domain
 */

import api from '../../utils/api';
import { receiveUserActionCreator } from '../users/action';
import { receiveTalksActionCreator } from '../talks/action';

function asyncPopulateUsersAndTalks() {
  return async (dispatch) => {
    try {
      const users = await api.getAllUsers();
      const talks = await api.getAllTalks();

      dispatch(receiveUserActionCreator(users));
      dispatch(receiveTalksActionCreator(talks));
    } catch (error) {
      alert(error.message);
    }
  };
}

export { asyncPopulateUsersAndTalks };
