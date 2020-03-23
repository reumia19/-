const dMap =document.querySelector(".js-map");
const setting ={
	center:{lat:37.3339337,lng:126.835851},
	scrollwheel : false,
	zoom : 8
}
const newMap = new google.maps.Map(dMap,setting);
function initMap() {
}

console.log(dMap);