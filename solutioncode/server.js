const dbConfig = require('./config/db.config')


const db = require("./models");
const Airport = db.airport;
const Terminal = db.terminal;
const Flight = db.flight;

// db connection
db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

const airport = new Airport({
	name: "First Airport",
	country: "US",
	opened: "2020-12-15"
})

// Lets Make and Save our first airport
airport.save()
console.log("Airport saved", airport)

const flight1 = new Flight({
	from: "CDG France",
	to: "JFK New-York,USA",
	airline: "American Airlines"
})

flight1.save()
console.log("flight1 saved", flight1)

const flight2= new Flight({
	from: "Heathrow UK",
	to: "JFK New-York,USA",
	airline: " British Airways"
})

flight2.save()
console.log("flight2 saved", flight2)

const JFK = new Airport({
	name: "JFK",
	country: "US",
	opened: "1990-12-15",
})

JFK.save()
console.log("JFK saved", JFK)

const terminal1 = new Terminal({
	name: "Terminal 1",
	capacity: 234324 
})

terminal1.flights.push(flight1)
terminal1.flights.push(flight2)

terminal1.save()
console.log("terminal saved", terminal1)
