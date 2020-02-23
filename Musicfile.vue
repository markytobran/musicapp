<template>
  <div class="result">
    <div class="header">
      <p>Tune cover</p>
      <p>Track title / Artist</p>
      <p>Duration</p>
      <p>Like</p>
    </div>
    <div class="tune">
      <div class="image">
        <img />
      </div>
      <div class="track">
        <p class="title"></p>
        <p class="artist"></p>
      </div>
      <div class="duration"></div>
      <div class="icon">
        <p>
          <i class="far fa-heart"></i>
        </p>
      </div>
    </div>
  </div>
</template>


<script>
export default {};
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
  border: 2px solid white;
  border-radius: 35px;
  cursor: pointer;
  margin-left: 10px;
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

.icon i {
  font-size: 20px;
  color: #c0c0c0;
  margin-left: 7px;
}

.icon i:hover {
  color: red;
  transition: 2s ease-out;
}

.duration {
  color: white;
  font-size: 18px;
  margin-left: 18px;
}
</style>