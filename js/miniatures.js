import {createPhoto} from './photo.js';

const photoArray = Array.from({length: 25}, createPhoto);

const galleryMiniatures = document.querySelector('.pictures');
const miniaturesTemplate = document.querySelector('#picture').content.querySelector('.picture');

const miniatureFragment = document.createDocumentFragment();

photoArray.forEach(({url, description, comments, likes}) => {
  const miniature = miniaturesTemplate.cloneNode(true);
  const miniatureImg = miniature.querySelector('img');
  miniatureImg.src = url;
  miniatureImg.alt = description;
  miniature.querySelector('.picture__comments').textContent = comments.length;
  miniature.querySelector('.picture__likes').textContent = likes;
  miniatureFragment.appendChild(miniature);
});

galleryMiniatures.appendChild(miniatureFragment);
