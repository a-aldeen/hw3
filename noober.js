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
  //Asking the Passenger for their name
  let passenger = {
    firstName : prompt(`Please enter your first name`),
    lastName: prompt(`Please enter your last name`),
  }

  //Asking the Passenger for their phone number
  let phoneNumber = prompt (`Please enter your phone number:`)

  //Asking the Passenger for their pick up location
  let pickupLocation = {
    street: prompt(`Please enter your pick up street address:`),
    city: prompt(`Please enter your pick up city:`),
    state: prompt(`Please enter your pick up state:`),
    zip: prompt(`please enter your pick up zip code:`),
  }

  //Asking the Passenger for their dropofflocation
  let dropoffLocation = {
    street : prompt(`Please enter your drop off street address`),
    city : prompt(`Please enter drop off your city`),
    state : prompt(`Please enter your drop off state`),
    zip : prompt(`please enter your drop off zip code`),
  }
    
  //Asking the Passenger for the number of passenger in their party
  let numberOfPassengers = prompt(`Please enter the number of passengers in your party`)

  //Setting conditions for number of passengers. First it needs not to exceed 7 or be less than 1 and if it's greater than 3, upgradde to NooberXL
  if (numberOfPassengers >7 || numberOfPassengers <1) {
    numberOfPassengers = prompt (`You number of passengers for each ride cannot exceed 7 or be lesss than 1 passenger. Please re-enter your number of passengers:`)
  }

  //Asking the Passenger if they like NooberPurple
  let purpleRequested = prompt(`Would you like a luxury Noober Purple car? Please enter Yes or No`)


  //If the passenger has requested Noober Purple, set the ride level to NooberPurple, otherwise set
  //level appropriate to the number of passengers
  if (purpleRequested == `Yes`) {
    rideLevel = `Noober Purple`
  } 
    else if (numberOfPassengers >3) {
      rideLevel =  `NooberXL`
      } 
        else {
        rideLevel = `Noober X`
        }

  // display information in undestandable format to console
  console.log(`${rideLevel} Passenger: ${passenger.firstName} ${passenger.lastName}- phone number: ${phoneNumber}. Pickup at ${pickupLocation.street}, ${pickupLocation.city}, ${pickupLocation.state} ${pickupLocation.zip}. Dropoff at ${dropoffLocation.street}, ${dropoffLocation.city}, ${dropoffLocation.state} ${dropoffLocation.zip}.`)


  // 🔥 YOUR CODE ENDS HERE 🔥
  })