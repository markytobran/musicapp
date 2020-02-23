<template>
  <div>
    <div>
      <h1>Favorite tunes</h1>
      <hr />
    </div>
    <div>
      <appMusic></appMusic>
    </div>
  </div>
</template>

<script>
import Music from "./Musicfile";
import axios from "axios";
export default {
  components: {
    appMusic: Music
  },
  methods: {
    getData() {
      axios
        .get("https://musicapp-57ca9.firebaseio.com/data.json")
        .then(response => console.log(response))
        .catch(err => {
          console.log("error", err);
        });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped>
h1 {
  color: white;
  opacity: 0.9;
  margin-left: 40px;
  margin-top: 35px;
  text-transform: uppercase;
  font-size: 26px;
}

hr {
  height: 0px;
  border: none;
  border-top: 1px solid grey;
  margin-bottom: 25px;
}
</style>