// Destination Book Business Logic

function DestinationBook() {
  this.destinations = {};
  this.currentId = 0;
};

DestinationBook.prototype.addDestination = function (destination) {
  destination.id = this.assignId();
  this.destinations[destination.id] = destination;
};

DestinationBook.prototype.assignId = function () {
  this.currentid =+ 1;
  return this.currentId;
};

// Destination Business Logic

function Destination (place, city, landmark) {
  this.place = place;
  this.city = city;
  this.landmark = landmark;
};