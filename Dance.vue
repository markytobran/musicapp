<template>
  <div class="result" v-if="playlist.data != undefined">
    <div class="playlist_header">
      <div class="header_image">
        <img
          :src="playlist.data.picture_medium"
          :alt="playlist.data.title"
          :title="playlist.data.title"
          height="220"
          width="220"
        />
      </div>
      <div class="header_description">
        <h2>{{ playlist.data.title }}</h2>
        <h4>{{ playlist.data.creator.name}}</h4>
        <p>{{ playlist.data.description}}</p>
        <p>
          <a :href="playlist.data.link" target="_blank">Link</a>
        </p>
      </div>
    </div>
    <div class="header">
      <p>Tune cover</p>
      <p>Track title / Artist</p>
      <p>Duration</p>
      <p>Like</p>
    </div>
    <div class="tune" v-for="index in 5" :key="index">
      <div class="image">
        <img
          :src="playlist.data.tracks.data[index - 1].album.cover_small"
          :alt="playlist.data.tracks.data[index - 1].title"
          height="70"
          width="70"
          :title="playlist.data.tracks.data[index - 1].title"
        />
        <span>
          <i class="fas fa-play"></i>
        </span>
      </div>
      <div class="track">
        <p class="title">{{ playlist.data.tracks.data[index - 1].title}}</p>
        <p class="artist">{{ playlist.data.tracks.data[index - 1].artist.name}}</p>
      </div>
      <div class="duration">{{time(playlist.data.tracks.data[index - 1].duration)}}</div>
      <div class="icon">
        <p>
          <i @click="addClass($event.target)" class="fas fa-heart"></i>
        </p>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      playlist: {}
    };
  },
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
  },
  created() {
    axios
      .get("https://deezerdevs-deezer.p.rapidapi.com/playlist/4613753548", {
        params: {},
        headers: {
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          "x-rapidapi-key": "7e63757770mshcdef6884ef6cf5dp15685fjsn100ed221c2aa"
        }
      })
      .then(response => (this.playlist = response))
      .catch(err => {
        console.log("error", err);
      });
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

.playlist_header {
  display: flex;
  font-weight: bold;
  margin-bottom: 15px;
  padding-right: 15px;
}

.header_image {
  margin-right: 20px;
}

.header_description h2 {
  color: white;
  text-shadow: 2px 0px grey;
}

.header_description h4 {
  color: white;
  text-shadow: 1px grey;
}

.header_description p {
  color: grey;
  padding-top: 15px;
  width: 70%;
}

.header_description a {
  text-decoration: none;
  letter-spacing: 0.1rem;
  color: white;
  background: #7e2236;
  border: 1px solid white;
  border-radius: 25px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr;
  justify-items: start;
  color: white;
  font-weight: bold;
  text-shadow: 2px grey;
  font-size: 20px;
}
.tune {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr;
  justify-items: start;
  align-items: center;
  margin-bottom: 20px;
}

.image img {
  cursor: pointer;
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

img {
  opacity: 0.7;
}

span {
  position: absolute;
  opacity: 0;
  font-size: 1.5rem;
  transition: opacity 1s ease-in-out;
}

.image {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 2px solid white;
  border-radius: 25px;
  transition: border-radius 0.8s ease-in-out;
  cursor: pointer;
}

.image:hover {
  border-radius: 50%;
  opacity: 0.5;
}

span:hover {
  opacity: 1;
}

.image img {
  border-radius: inherit;
}
</style>