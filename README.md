Test

// DestinationBook Business Logic

Describe: DestinationBook()

Test: "It should add destinations."
Code:
destinationBook.prototype.addDestination = function (destination) {
  this.destinations[destination.place] = destination;
Expected Output: destinationBook.destinations; {France: Destination}

Test: "It should add an id to destinations"
Code:
this.currentId += 1;
destinationBook.prototype.assignId(destination1)
Expected Outcome: 0

Test: "It should find a contact based on its id"
Code:
DestinationBook.prototype.findDestination(0)
Expected Output: Destination {place: 'France', city: 'Paris', landmark: 'Effile Tower', id: 0}

Test: "It should delete a destination by id"
Code:
DestinationBook.prototype.deleteDestination(0)
Expected Output: DestinationBook {destination: {...}}

//Destination Business Logic

Describes: Destination()

Test: "It should create a new destination"
Code:
let firstDestination = new Destination ("Japan", "Tokyo", "Meiji Jingu Shrine");
Destination(firstDestination)
Expected Output: Destination {place: "Japan", city: "Tokyo", landmark: "Meiji Jingu Shrine"}