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
