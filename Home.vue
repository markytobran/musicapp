<template>
  <div id="home">
    <div class="first">
      <h1>Top artists</h1>
      <hr />
      <div class="track" v-if="artists.length >= 5">
        <div class="content" v-for="index in 5" :key="index">
          <div class="artists">
            <img
              :src="artists[index - 1].data.picture_medium"
              :alt="artists[index - 1].data.name"
              :title="artists[index - 1].data.name"
            />
          </div>
          <h5>{{ artists[index - 1].data.name}}</h5>
          <h6>{{ getFans(artists[index - 1].data.nb_fan)}} fans</h6>
          <button>
            <a :href="artists[index - 1].data.link" target="_blank">
              <i class="fas fa-headphones"></i>
            </a>
          </button>
        </div>
      </div>
    </div>
    <div v-if="charts.data != undefined">
      <h1>Top Charts</h1>
      <hr />
      <div class="track">
        <div class="content" v-for="index in 5" :key="index">
          <div class="image-container">
            <img
              :src="charts.data.tracks.data[index - 1].artist.picture_medium"
              :alt="charts.data.tracks.data[index - 1].artist.name"
              :title="charts.data.tracks.data[index - 1].artist.name"
            />
            <span>
              <i class="fas fa-play"></i>
            </span>
          </div>
          <h5>{{ charts.data.tracks.data[index - 1].artist.name }}</h5>
          <p class="title">{{ charts.data.tracks.data[index - 1].title }}</p>
          <h6>Rank: {{ index }}</h6>
          <button>
            <a :href="charts.data.tracks.data[index - 1].link" target="_blank">
              <i class="fas fa-headphones"></i>
            </a>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      artists: [],
      charts: {}
    };
  },
  created() {
    this.getArtists(384236);
    this.getArtists(75798);
    this.getArtists(13);
    this.getArtists(1);
    this.getArtists(174);
    this.getCharts();
  },
  methods: {
    getArtists(id) {
      axios
        .get(`https://deezerdevs-deezer.p.rapidapi.com/artist/${id}`, {
          params: {},
          headers: {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key":
              "7e63757770mshcdef6884ef6cf5dp15685fjsn100ed221c2aa"
          }
        })
        .then(response => this.artists.push(response))
        .catch(err => {
          console.log("error", err);
        });
    },
    getFans(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    getCharts() {
      axios
        .get("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
        .then(response => (this.charts = response))
        .catch(err => console.log("error", err));
    }
  }
};
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
}

#home {
  padding-left: 10px;
  padding-right: 10px;
  overflow: hidden;
}

h1 {
  font-weight: bold;
  font-size: 25px;
  margin-top: 20px;
  color: white;
  text-transform: uppercase;
}

hr {
  height: 0px;
  border: none;
  border-top: 1px solid grey;
  margin-bottom: 25px;
}

.first {
  padding-bottom: 60px;
}

.track {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
  color: white;
  padding: 0 15px;
}

.track p {
  font-size: 12px;
  margin-top: 8px;
}

.content {
  text-align: center;
}

.artists img {
  width: 115px;
  height: 115px;
  border: 2px solid white;
  border-radius: 25px;
  transition: border-radius 0.8s ease-in-out;
  cursor: pointer;
}

.content img {
  max-width: 100%;
  max-height: 100%;
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

.content button:hover {
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

.content h5 {
  padding: 5px;
  font-size: 20px;
}

.content h6 {
  opacity: 0.7;
  font-size: 15px;
}

.content p :nth-child(1) {
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 13px;
  padding-right: 13px;
  border-radius: 5px;
  background: #7e2236;
  font-size: 15px;
  margin-bottom: 40px;
  margin-top: 10px;
  margin-right: 5px;
  margin-left: 5px;
}

.content .title {
  padding: 0;
  font-size: 14px;
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