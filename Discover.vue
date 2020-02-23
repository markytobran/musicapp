<template>
  <div id="discover">
    <h1>Discover The Best Playlists</h1>
    <nav>
      <ul>
        <router-link to="/discover/pop" activeClass="active" tag="li">
          <span>Pop</span>
        </router-link>
        <router-link to="/discover/rap" activeClass="active" tag="li">
          <span>Rap/Hip Hop</span>
        </router-link>
        <router-link to="/discover/rock" activeClass="active" tag="li">
          <span>Rock</span>
        </router-link>
        <router-link to="/discover/dance" activeClass="active" tag="li">
          <span>Dance</span>
        </router-link>
        <router-link to="/discover/randb" activeClass="active" tag="li">
          <span>R&amp;B</span>
        </router-link>
        <router-link to="/discover/alternative" activeClass="active" tag="li">
          <span>Alternative</span>
        </router-link>
        <router-link to="/discover/reggae" activeClass="active" tag="li">
          <span>Reggae</span>
        </router-link>
        <router-link to="/discover/jazz" activeClass="active" tag="li">
          <span>Jazz</span>
        </router-link>
        <router-link to="/discover/classical" activeClass="active" tag="li">
          <span>Classical</span>
        </router-link>
      </ul>
    </nav>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
/********************
Styles for music 
*********************/
.music h1 {
  color: white;
  opacity: 0.9;
  margin-left: 40px;
  margin-top: 35px;
  text-transform: uppercase;
  font-size: 26px;
}

.music ul {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
}

.music li {
  padding-right: 22px;
  padding-top: 10px;
  font-size: 18px;
  display: block;
  font-weight: bold;
  color: #8f8f8f;
  cursor: pointer;
  transition: all 1s;
}

.music li:hover {
  color: white;
}

.active span {
  color: red;
  font-size: 22px;
}
</style>;
