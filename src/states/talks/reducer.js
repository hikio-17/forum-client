/* eslint-disable max-len */
/**
 * @TODO: Define the reducer for the talks state
 */

import { ActionType } from './action';

function talksReducer(talks = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_TALKS:
      return action.payload.talks;
    case ActionType.ADD_TALK:
      return [action.payload.talk, ...talks];
    case ActionType.TOGGLE_LIKE_TALK:
      return talks.map((talk) => {
        if (talk.id === action.payload.talkId) {
          return {
            ...talk,
            likes: talks.likes.includes(action.payload.userId) ? talks.likes.filter((like) => like.id !== action.payload.userId) : talks.likes.concat([action.payload.userid]),
          };
        }
        return talk;
      });
    default:
      return talks;
  }
}

export default talksReducer;