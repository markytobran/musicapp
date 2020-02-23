<template>
  <div class="result" v-if="search.data != undefined">
    <div class="header">
      <p>Tune cover</p>
      <p>Track title / Artist</p>
      <p>Link</p>
      <p>Duration</p>
      <p>Like</p>
    </div>
    <div>
      <div class="tune" v-for="index in 5" :key="index">
        <div class="image">
          <div class="image-container">
            <img
              :src="search.data.data[index - 1].album.cover_medium"
              :alt="search.data.data[index - 1].artist.name"
              :title="search.data.data[index - 1].artist.name"
              height="100"
              width="100"
            />
            <span>
              <i class="fas fa-play"></i>
            </span>
          </div>
        </div>
        <div class="track">
          <p class="title">{{ search.data.data[index - 1].title }}</p>
          <p class="artist">{{ search.data.data[index - 1].artist.name }}</p>
        </div>
        <div class="head">
          <button>
            <a :href="search.data.data[index - 1].link" target="_blank" class="link">
              <i class="fas fa-headphones"></i>
            </a>
          </button>
        </div>
        <div class="duration">{{ time(search.data.data[index - 1].duration) }}</div>
        <div class="icon">
          <p>
            <i @click="addClass($event.target)" class="fas fa-heart"></i>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["search"],
  methods: {
    time(time) {
      let minutes = 0;
      let seconds = 0;

      if (time != "undefined") {
        minutes = Math.floor(time / 60);
        seconds = time - 60 * minutes;
      }
      if (
        seconds === 0 ||
        seconds === 1 ||
        seconds === 2 ||
        seconds === 3 ||
        seconds === 4 ||
        seconds === 5 ||
        seconds === 6 ||
        seconds === 7 ||
        seconds === 8 ||
        seconds === 9
      ) {
        seconds = "0" + seconds;
      }
      return `${minutes}:${seconds}`;
    },
    addClass(target) {
      let list = target.classList;
      if (list.contains("active")) {
        list.remove("active");
      } else {
        list.add("active");
      }
    }
  }
};
</script>


<style scoped>
/********************
Styles for result
*********************/
.result {
  padding-left: 40px;
  font-family: "Railway", "Open-sans";
  margin-top: 30px;
}

.header {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  justify-items: center;
  color: white;
  font-weight: bold;
  text-shadow: 2px grey;
  font-size: 20px;
}
.tune {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  justify-items: center;
  margin-bottom: 20px;
}

.track {
  font-size: 18px;
  font-weight: bold;
}

.artist {
  color: #c0c0c0;
}
.title {
  color: white;
}

i {
  font-size: 20px;
  color: #c0c0c0;
  margin-left: 7px;
  cursor: pointer;
}

.duration {
  color: white;
  font-size: 18px;
  margin-left: 18px;
}

.active {
  color: red;
}

button,
button:visited {
  margin-top: 10px;
  padding: 2px 0px;
  width: 80px;
  border: 1px solid white;
  border-radius: 5px;
  background-color: #7e2236;
}

button i {
  color: white;
  font-size: 16px;
}

button:hover {
  animation: shake 0.6s infinite;
}

@keyframes shake {
  0% {
    transform: translate(0px, 0px) rotate(0deg);
  }
  25% {
    transform: translate(1px, 1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, -1px) rotate(-1deg);
  }
  75% {
    transform: translate(2px, -1px) rotate(2deg);
  }
  100% {
    transform: translate(-1px, 1px) rotate(-1deg);
  }
}

img {
  opacity: 0.8;
}

span {
  position: absolute;
  opacity: 0;
  font-size: 1.5rem;
  transition: opacity 1s ease-in-out;
}

.image-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 115px;
  height: 115px;
  border: 2px solid white;
  border-radius: 25px;
  transition: border-radius 0.8s ease-in-out;
  cursor: pointer;
}

.image-container:hover,
.artists img:hover {
  border-radius: 50%;
  opacity: 0.5;
}

span:hover {
  opacity: 1;
}

.image-container img {
  border-radius: inherit;
}
</style>