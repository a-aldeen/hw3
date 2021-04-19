// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
  

  // Write the recipe (algorithm) in the comments. Then, write the code.
  //Getting the Passenger name
  let passenger = {
    firstName : ride.passengerDetails.first,
    lastName: ride.passengerDetails.last,
  }

  //Getting the Passenger  phone number
  let phoneNumber = ride.passengerDetails.phoneNumber

  //Getting the Passenger pick up location

  let pickupLocation = {
    address: ride.pickupLocation.address,
    city: ride.pickupLocation.city,
    state: ride.pickupLocation.state,
    zip: ride.pickupLocation.zip,
  }

  //Getting the Passenger dropofflocation
  let dropoffLocation = {
    address : ride.dropoffLocation.address,
    city : ride.dropoffLocation.city,
    state : ride.dropoffLocation.state,
    zip : ride.dropoffLocation.zip,
  }
    
  //Getting the number of passenger in the party
  let numberOfPassengers = ride.numberOfPassengers

  //Setting conditions for number of passengers. First it needs not to exceed 7 or be less than 1 and if it's greater than 3, upgradde to NooberXL
  // if (numberOfPassengers >7 || numberOfPassengers <1) {
  //   numberOfPassengers = prompt (`You number of passengers for each ride cannot exceed 7 or be lesss than 1 passenger. Please re-enter your number of passengers:`)
  // }

  //Getting the NooberPurple status
  let purpleRequested = ride.purpleRequested


  //If the passenger has requested Noober Purple, set the ride level to NooberPurple, otherwise set
  //level appropriate to the number of passengers
  if (purpleRequested == true) {
    rideLevel = `Noober Purple`
  } 
    else if (numberOfPassengers >3) {
      rideLevel =  `NooberXL`
      } 
        else {
        rideLevel = `Noober X`
        }

  // display information in undestandable format to console
  console.log(`${rideLevel} Passenger: ${passenger.firstName} ${passenger.lastName}- phone number: ${phoneNumber}. Pickup at ${pickupLocation.address}, ${pickupLocation.city}, ${pickupLocation.state} ${pickupLocation.zip}. Dropoff at ${dropoffLocation.address}, ${dropoffLocation.city}, ${dropoffLocation.state} ${dropoffLocation.zip}.`)


  // 🔥 YOUR CODE ENDS HERE 🔥
  })