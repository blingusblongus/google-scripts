function GETDISTANCE(start, end) {

  var directions = Maps.newDirectionFinder()
    .setOrigin(start)
    .setDestination(end)
    .setMode(Maps.DirectionFinder.Mode.DRIVING)
    .getDirections();
  var meters = directions.routes[0].legs[0].distance.value;
  var miles = meters / 1609.34;
  
  return miles;
}
