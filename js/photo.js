import {MIN_LIKES, MAX_LIKES, MIN_COMMENTS, MAX_COMMENTS} from './data.js';
import {getRandomPositiveInteger} from './utils.js';
import {createComment} from './comment.js';

const getRandomCountComments = () => getRandomPositiveInteger(MIN_COMMENTS, MAX_COMMENTS);

let photoId = 1;
const createPhoto = () => {
  const photo = {
    id: photoId,
    url: `photos/${ photoId }.jpg`,
    description: `Как проходят мои летние каникулы: день ${ photoId }.`,
    likes: getRandomPositiveInteger(MIN_LIKES, MAX_LIKES),
    comments: Array.from({length: getRandomCountComments()}, createComment)
  };
  photoId++;
  return photo;
};

export {createPhoto};
