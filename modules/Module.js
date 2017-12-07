var speed;
var positionoptions = {timeout: 200};
var startingDistance = 0;
var goal = 10;
var total = 0;
var prevLat = 0;
var prevLon = 0;
var currLat;
var currLon;

function successcallback1(position)
{
  speed = position.coords.speeding;
}

function measureSpeed(changeSpeed) {
  changeSpeed = speed;
}

function degreesToRadians(degrees) {
  return degrees * Math.PI / 180;
}

function distanceBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
  var earthRadiusM = 6371000;

  var dLat = degreesToRadians(lat2-lat1);
  var dLon = degreesToRadians(lon2-lon1);

  lat1 = degreesToRadians(lat1);
  lat2 = degreesToRadians(lat2);

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  return earthRadiusM * c;
}