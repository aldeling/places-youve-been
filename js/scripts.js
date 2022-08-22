// Destination Book Business Logic

function DestinationBook() {
  this.destinations = {};
  //this.currentId = 0;
};

DestinationBook.prototype.addDestination = function (destination) {
  this.destinations[destination.place] = destination;
};


// Destination Business Logic

function Destination (place, city, landmark) {
  this.place = place;
  this.city = city;
  this.landmark = landmark;
};