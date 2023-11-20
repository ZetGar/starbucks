var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'An6LvWQuj_8', // 최초 시작할 영상 ID
    playerVars:{
      autoplay: true, // 자동 재생 여부
      loop: true, // 반복 재생 여부
      playList:'An6LvWQuj_8', // 반복할 영상 ID
    },
    events:{
      onReady:function(event){
        event.target.mute() //음소거
      }
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}