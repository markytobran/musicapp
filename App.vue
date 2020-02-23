<template>
  <div id="app">
    <div class="container">
      <div class="red">
        <div class="menu">
          <div class="logo">
            <div>
              <i class="fas fa-compact-disc"></i>
            </div>
            <div>
              <router-link to="/" tag="h1">Music App</router-link>
            </div>
          </div>
          <div class="explore">
            <h2>Explore</h2>
            <ul>
              <router-link to="/discover/pop" activeClass="active" tag="li">
                <i class="fas fa-headphones-alt"></i>
                <i class="fas fa-compact-disc"></i>Discover
              </router-link>

              <router-link to="/search" activeClass="active" tag="li">
                <i class="fas fa-headphones-alt"></i>
                <i class="fas fa-search"></i>Search
              </router-link>

              <router-link to="/likes" activeClass="active" tag="li">
                <i class="fas fa-headphones-alt"></i>
                <i class="fas fa-heart"></i>Your Tunes
              </router-link>
            </ul>
          </div>
          <div class="services">
            <h2>Services</h2>
            <ul>
              <router-link to="/app" activeClass="active" class="menubtn" tag="li">
                <i class="fas fa-headphones-alt"></i>
                <i class="fas fa-circle"></i>Get The App
              </router-link>
              <router-link to="/premium" activeClass="active" class="menubtn" tag="li">
                <i class="fas fa-headphones-alt"></i>
                <i class="fas fa-star"></i>Premium
              </router-link>
              <router-link to="/settings" activeClass="active" class="menubtn" tag="li">
                <i class="fas fa-headphones-alt"></i>
                <i class="fas fa-cogs"></i>Settings
              </router-link>
            </ul>
          </div>
        </div>
        <div class="music">
          <simplebar class="test" data-simplebar-auto-hide="false">
            <router-view></router-view>
          </simplebar>
        </div>
      </div>
      <div class="black">
        <div class="musicon">
          <musicon></musicon>
        </div>
      </div>
    </div>
  </div>
</template>

 <script>
import simplebar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";
import musicon from "./components/Musicon";

export default {
  name: "app",
  components: {
    simplebar,
    musicon
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");

* {
  box-sizing: border-box;
}

body,
html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100%;
  font-family: Montserrat, open-sans;
}

#app {
  height: 100%;
}
.container {
  height: 100vh;
  display: flex;
  flex-direction: row;
}

.test {
  height: 100%;
}

/********************
Styles for red 
*********************/

.red {
  background-color: #db1d40;
  height: 100vh;
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

/********************
Styles for menu 
*********************/
.menu {
  color: white;
  width: 25%;
  background-color: #7e2236;
  height: 80vh;
}

/*********************
Styles for logo 
*********************/

.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 20px;
  cursor: pointer;
}

.logo i {
  font-size: 2rem;
  padding-right: 15px;
}

.logo h1 {
  text-transform: uppercase;
  font-weight: bold;
}
/********************
Styles for Explore 
*********************/
.explore,
.services {
  justify-content: flex-start;
  cursor: pointer;
}

.explore h2,
.services h2 {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 22px;
  margin-left: 10px;
  cursor: pointer;
}

.explore ul,
.services ul {
  list-style-type: none;
  cursor: pointer;
}

.explore li,
.services li {
  display: flex;
  font-size: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-weight: bold;
  letter-spacing: 2px;
  opacity: 0.9;
  cursor: pointer;
}
.fas,
.fas {
  padding-right: 8px;
}

.fa-headphones-alt {
  color: black;
  font-size: 18px;
  visibility: hidden;
  transition: 0.2s;
  padding-right: 20px;
}

.services li:nth-child(2) i:nth-child(2) {
  color: yellow;
}
.services {
  margin-top: 100px;
}
/********************
Styles for music 
*********************/

.music {
  width: 60%;
  background-color: #232323;
  height: 80vh;
  margin-right: 1px;
  padding: 10px;
}
/********************
Styles for black 
*********************/
.black {
  background-color: #232323;
  display: flex;
  height: 100vh;
  width: 30%;
  align-items: center;
}

.musicon {
  height: 80vh;
  background-image: linear-gradient(0deg, #7e2236, #db1d40);
  width: 65%;
}

.active i:nth-child(1) {
  color: black;
  visibility: visible;
  -webkit-transform: scale(1.2);
  -ms-transform: scale(0.8);
  transform: scale(1.2);
}
</style>