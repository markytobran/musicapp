<template>
  <div class="container">
    <div class="player">
      <div class="music-info">
        <h4 id="title">Dance Monkey</h4>
        <div class="progress-container" id="progress-container">
          <div class="progress" id="progress"></div>
        </div>
      </div>
      <audio
        id="audio"
        src="https://cdns-preview-a.dzcdn.net/stream/c-afc87c284ff12b8a80947bbce13b408b-3.mp3"
      ></audio>
      <div class="img-container">
        <img
          src="https://cdns-images.dzcdn.net/images/cover/5c8b9fe62c67cb0257ea76bcdf4ee06f/56x56-000000-80-0-0.jpg"
        />
      </div>
      <div class="navigation">
        <button class="action-btn">
          <i class="fas fa-angle-double-left"></i>
        </button>
        <button class="action-btn" @click="play">
          <i class="fas fa-play" id="play" @click="isPlaying = !isPlaying"></i>
        </button>
        <button class="action-btn">
          <i class="fas fa-angle-double-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isPlaying: false
    };
  },
  methods: {
    play() {
      const div = document.querySelector(".player");
      const button = document.querySelector("#play");
      const audio = document.querySelector("#audio");
      if (this.isPlaying === true) {
        div.classList.add("play");
        button.classList.remove("fa-play");
        button.classList.add("fa-pause");
        audio.play();
      } else if (this.isPlaying === false) {
        if (button.classList.contains("fa-pause"))
          button.classList.remove("fa-pause");
        button.classList.add("fa-play");
        div.classList.remove("play");

        audio.pause();
      }
    },
    playSong() {
      music;
    },
    pauseSong() {}
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.player {
  background: #fff;
  width: 80%;
  border-radius: 15px;
  box-shadow: 0 20px 20px 0 rgba(252, 169, 169, 0.6);
  padding: 20px 30px;
  position: relative;
  margin: 100px 0;
  z-index: 10;
}

.img-container {
  position: relative;
  width: 80px;
}

.img-container::after {
  content: "";
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  bottom: 100%;
  left: 50px;
  width: 10px;
  height: 10px;
  transform: translate(-150%, -80%);
}

.img-container img {
  border-radius: 50%;
  object-fit: cover;
  height: 80px;
  width: 80px;
  position: absolute;
  bottom: -25px;
  left: 0;
  animation: rotate 3s linear infinite;

  animation-play-state: paused;
}

.player.play .img-container img {
  animation-play-state: running;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  margin-left: 100px;
}

.navigation button:nth-child(2) {
  color: #cdc2d0;
  font-size: 30px;
}

.action-btn {
  background-color: #fff;
  border: 0;
  color: #dfdbdf;
  font-size: 20px;
  cursor: pointer;
  padding: 0 10px;
}

.action-btn:focus {
  outline: none;
}

.music-info {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 15px 15px 0 0;
  position: absolute;
  top: 0;
  height: 0px;
  left: 20px;
  width: calc(100% - 40px);
  padding: 5px 5px 5px 100px;
  transform: translateY(0%);
  transition: transform 0.3s ease-in, opacity 0.3s ease-in, height 1s ease-in;
  opacity: 0;
}

.player.play .music-info {
  opacity: 1;
  transform: translateY(-100%);
  height: 70px;
}

.music-info h4 {
  margin: 0;
}

.progress-container {
  background: #fff;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
  height: 4px;
  width: 100%;
}

.progress {
  background-color: #db1d40;
  border-radius: 5px;
  height: 100%;
  width: 0%;
  transition: width 0.1s linear;
}
</style>
