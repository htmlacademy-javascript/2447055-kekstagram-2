import {messages, userNames, MIN_COMMENTS, MAX_COMMENTS} from './data.js';
import {getRandomPositiveInteger, getRandomArrayElement} from './utils.js';

let commentId = 1;
const createComment = () => {
  const comment = {
    id: commentId,
    avatar: `img/avatar-${ getRandomPositiveInteger(0, 6) }.svg`,
    message: getRandomArrayElement(messages),
    name: getRandomArrayElement(userNames)
  };
  commentId++;
  return comment;
};

const getRandomCountComments = () => getRandomPositiveInteger(MIN_COMMENTS, MAX_COMMENTS);

export {createComment, getRandomCountComments};
