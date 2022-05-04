import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_DATA = 'videoplayer-current-time';

const onLocalStorage = data => {
  localStorage.setItem(STORAGE_DATA, data.seconds);
};

player.on('timeupdate', throttle(onLocalStorage, 1000));

const savedTime = localStorage.getItem(STORAGE_DATA);

player.setCurrentTime(+savedTime).then(function (seconds) {
  seconds = +savedTime;
});
