<template>
  <div>
    <div>
      <input type="text" placeholder="Search" v-model="input" @keypress="getData" />
    </div>
    <div>
      <appSearch :search="search"></appSearch>
    </div>
  </div>
</template>

<script>
import Search from "./Searchfile";
import axios from "axios";
export default {
  data() {
    return {
      input: "",
      search: {}
    };
  },
  components: {
    appSearch: Search
  },
  methods: {
    getData(e) {
      if (e.key == "Enter") {
        axios
          .get(
            `https://deezerdevs-deezer.p.rapidapi.com/search?q=${this.input}`,
            {
              params: {},
              headers: {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key":
                  "7e63757770mshcdef6884ef6cf5dp15685fjsn100ed221c2aa"
              }
            }
          )
          .then(response => (this.search = response))
          .catch(err => {
            console.log("error", err);
          });
      }
    }
  }
};
</script>

<style scoped>
div {
  text-align: center;
  justify-items: center;
}
input {
  margin-top: 20px;
  width: 45%;
  color: white;
  font-size: 20px;
  background: grey;
  padding: 10px;
  border-radius: 10px;
  outline: 0;
  border: none;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  transition: 0.4s;
}
input:focus {
  width: 70%;
}

input::placeholder {
  color: white;
  font-weight: bold;
  font-size: 16px;
  margin-left: 10px;
}
</style>