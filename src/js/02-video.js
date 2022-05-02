import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', function(data) {
   localStorage.setItem("videoplayer-current-time", data.seconds);
   console.log(data.seconds);
});

const currentPlaybackPosition = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(Number(currentPlaybackPosition)).then(function(seconds) {
   seconds = number(currentPlaybackPosition);
}).catch(function(error) {
   switch (error.name) {
       case 'RangeError':
           console.log('Ups:)');
           break;
   }
});


