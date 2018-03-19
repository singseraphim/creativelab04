<template>
<div id = "grid">
 <div id = "sidebar">
    	<div id = "content">
    	<div id = "header">
    		<div id = "title">
    			Plant Mom
    		</div>
    		<div id = "instructions">
    			Click on a plant icon to put it in your planter
    		</div>
    	</div>
    	<div id = "plantButtons">
	    		<button class="circle" id = "button1" v-on:click = "addItem('plant1.png')"><img class = "icon" src = "static/plants/plant1.png" width = "40px"></button>
	    		<button class="circle" id = "button2" v-on:click = "addItem('plant2.png')"><img class = "icon" src = "static/plants/plant2.png" width = "40px"></button>
	    		<button class="circle" id = "button3" v-on:click = "addItem('plant3.png')"><img class = "icon" src = "static/plants/plant3.png" width = "40px"></button>
	    		<button class="circle" id = "button7" v-on:click = "addItem('plant7.png')"><img class = "icon" src = "static/plants/plant7.png" width = "40px"></button>
	    		<button class="circle" id = "button4" v-on:click = "addItem('plant4.png')"><img class = "icon" src = "static/plants/plant4.png" width = "40px"></button>
	    		<button class="circle" id = "button5" v-on:click = "addItem('plant5.png')"><img class = "icon" src = "static/plants/plant5.png" width = "40px"></button>
	    		<button class="circle" id = "button6" v-on:click = "addItem('plant6.png')"><img class = "icon" src = "static/plants/plant6.png" width = "40px"></button>
	    		<button class="circle" id = "button8" v-on:click = "addItem('plant8.png')"><img class = "icon" src = "static/plants/plant8.png" width = "40px"></button>
    	</div>
        <div id = "options">
          <form>
            <input type="radio" name="setting" value="color" checked v-on:click = "update()"> Color<br>
            <input type="radio" name="setting" value="line" v-on:click = "update()"> Line Art<br>
          </form>
        </div>
    	<div id = "reset">
    	<button id = "resetButton" v-on:click = "deleteItems()">Reset</button>
    	</div>
		</div>
    </div>
        <div id = "main">
    	<div id = "plantArea">
    		<div id = "root">
                <img class = "plant" v-for = "item in items" v-if = "item.color == true" v-bind:src="'/static/plants/' + item.text">
                <img class = "plant" v-else v-bind:src="'/static/plants/b' + item.text">
    		</div>
    	</div>
    	<div id = "potArea">
    		<img id = "pot" src = "/static/plants/flowerpot.png" width = "1000px">
    	</div>
        </div>
        <div id = "footer"><a href="https://github.com/singseraphim/creativelab04.git">Github</a></div>
    </div>
</template>
<script>

import axios from 'axios';
 export default {
   name: 'PlantMom',
   data () {
     return {
       items: [],
       text: '',
       show: 'all',
       drag: {},
     }
   },
   created: function() {
     this.getItems();
   },
   methods: {
     getItems: function() {
     axios.get("/api/items").then(response => {
	 this.items = response.data;
	 return true;
       }).catch(err => {
       });
     },
     addItem: function(input) {
    axios.post("/api/items", {
	 text: input,
     completed: false,
       }).then(response => {
	 this.text = "";
	 this.getItems();
	 return true;
       }).catch(err => {
       });
       ++this.count;
     },
     
     deleteItems: function() {
       axios.delete("/api/items/").then(response => {
	 this.getItems();
	 return true;
       }).catch(err => {
       });
     },
     update: function() {
       axios.put("/api/items/").then(response => {
        this.getItems();
	    return true;
       }).catch(err => {
       });
     },
   }
 }

</script>