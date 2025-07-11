import {MESSAGES, USER_NAMES, MIN_AVATAR_NUMBER, MAX_AVATAR_NUMBER} from './data.js';
import {getRandomPositiveInteger, getRandomArrayElement} from './utils.js';

let commentId = 1;
const createComment = () => {
  const comment = {
    id: commentId,
    avatar: `img/avatar-${ getRandomPositiveInteger(MIN_AVATAR_NUMBER, MAX_AVATAR_NUMBER) }.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(USER_NAMES)
  };
  commentId++;
  return comment;
};

export {createComment};
