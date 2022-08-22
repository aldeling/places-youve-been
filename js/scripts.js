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
  this.currentId =+ 1;
  return this.currentId;
};

DestinationBook.prototype.findDestination = function(id) {
  if (this.destinations[id] !== undefined) {
    return this.destinations[id];
  }
  return false;
};

DestinationBook.prototype.deleteDestination = function(id) {
  if (this.destinations[id] === undefined) {
    return false;
  }
  delete this.destinations[id]
  return true;
}

// Destination Business Logic

function Destination (place, city, landmark) {
  this.place = place;
  this.city = city;
  this.landmark = landmark;
};