const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;

const messages = ['Всё отлично!', 'Всё отлично! Но не всё.', 'В целом всё неплохо.', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!', 'Как можно было поймать такой неудачный момент?!'];

const userNames = ['Фрося', 'Ваня', 'Петя', 'Паша', 'Катя', 'Кристина', 'Вика', 'Савелий', 'Игорь', 'Денис', 'Марк', 'Максим', 'Даша', 'Глаша', 'Егор', 'Александр', 'Михаил', 'Сергей', 'Тимофей', 'Алексей', 'Петр', 'Виктория', 'Жанна', 'Диана', 'Павел'];

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (element) => element[getRandomPositiveInteger(0, element.length - 1)];

const getRandomCountComments = () => getRandomPositiveInteger(MIN_COMMENTS, MAX_COMMENTS);

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

const photoArray = Array.from({length: 25}, createPhoto);

console.log(photoArray);
