const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);


function onPlayer(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
}

player.on('timeupdate', onPlayer);

const savedTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(savedTime).then(function (seconds) {
  if (savedTime) {
    seconds = savedTime;
  }
});
