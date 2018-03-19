<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-size: 16px;
    padding: 20px 100px 0px 100px;
    font-family: 'Indie Flower', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
#container {
   min-height:100%;
   position:relative;
}
#body {
   padding:10px;
   padding-bottom:30px;   /* Height of the footer */
   border: 3px;
   height: 100%;
}
#footer {
   margin: 30px;
   font-family: 'Amatic SC', cursive;
   font-size: 20px;
   font-weight: bold;
   text-decoration: none;
   color: black !important;
}
#grid {
  display: grid;
  height: 620px;
  display: grid;
  grid-template-rows: 15% 85%;
  
}
#sidebar {
  background-color: #e8e8e8;
  border: 4px #e8e8e8 solid;
  border-radius: 6px;
  display: grid;
  height: 100px;
}
#title {
  font-family: 'Amatic SC', cursive;
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  margin-top: 6px;
}
#instructions {
  font-family: 'Indie Flower', cursive;
  text-align: center;
  font-size: 16px;
}
#header {
}
#content {
  padding: 0px;
  display: grid;
  grid-template-columns: 20% 60% 10% 10%;
}
#options {
    padding-top: 20px;
}
#options input:checked {
    color: green;
}
#plantButtons { 
    text-align: center;
    margin: 20px 15px;
}
.circle {
      width: 65px;
      height: 65px;
      background: none; 
      margin: 0px 3px;
      border: 3px black solid;
      border-radius: 3px;
    }
.circle:hover {
  background-color: #c9ddb5;
}
button:focus {
  outline: none;
}
button:active {
  background-color: #b7c9a5;
}
#resetButton {
  border-radius: 0;
  height: 25px;
  width: 60px;
  background-color: #f7f7f7;
  font-family: 'Indie Flower', cursive;
  border: 2px black solid;
}
#resetButton:hover {
  background-color: ghostwhite;
  border: 2px gray solid;
}
#reset {
 margin: 20px;
}

#main {
  display: grid;
  grid-template-rows: 60% 40%;
  height: 500px;
}

#plantArea {
  position:relative;
  margin-bottom: 70px;
  margin-left: -80px;
}
.plant {
  width: 250px;
}
#potArea {
    position: absolute;
    margin-top: 300px;
}
#pot {
  margin-left: 65px;
  display: block;
}
#root {
  position: absolute;
  bottom: 0;
  width: 900px;
  height: 228px;
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  left: 50%;
  transform: translate(-50%, -0%);
}


</style>
