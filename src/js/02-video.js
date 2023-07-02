import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const savePlaybackTime = throttle(async () => {
  try {
    const currentTime = await player.getCurrentTime();
    localStorage.setItem('videoplayer-current-time', currentTime);
  } catch (error) {
    console.error('Error saving playback time:', error);
  }
}, 1000);

const resumePlayback = async () => {
  try {
    const currentTime = localStorage.getItem('videoplayer-current-time');
    if (currentTime !== null) {
      await player.setCurrentTime(parseFloat(currentTime));
    }
  } catch (error) {
    console.error('Error resuming playback:', error);
  }
};

player.on('timeupdate', savePlaybackTime);

document.addEventListener('DOMContentLoaded', resumePlayback);
