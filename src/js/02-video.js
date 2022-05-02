import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onLocalStorage = data => {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', throttle(onLocalStorage, 1000));

const currentPlaybackPosition = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(Number(currentPlaybackPosition)).then(function (seconds) {
  seconds = Number(currentPlaybackPosition);
});