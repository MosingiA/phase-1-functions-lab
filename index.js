
const HQ_STREET = 42;
const FEET_PER_BLOCK = 264; 

function distanceFromHqInBlocks(street) {
  return Math.abs(street - HQ_STREET);
}

function distanceFromHqInFeet(street) {
  const blocks = distanceFromHqInBlocks(street);
  return blocks * FEET_PER_BLOCK;
}

function distanceTravelledInFeet(startStreet, destinationStreet) {
  const blocksTraveled = Math.abs(destinationStreet - startStreet);
  return blocksTraveled * FEET_PER_BLOCK;
}


function calculatesFarePrice(startStreet, destinationStreet) {
  const totalFeetTraveled = distanceTravelledInFeet(startStreet, destinationStreet);

  if (totalFeetTraveled <= 400) {
    return 0; 
  } else if (totalFeetTraveled > 400 && totalFeetTraveled <= 2000) {
    const chargeableFeet = totalFeetTraveled - 400; 
    const priceInCents = chargeableFeet * 2; 
    return priceInCents / 100; 
  } else if (totalFeetTraveled > 2000 && totalFeetTraveled <= 2500) {
    return 25; 
  } else { 
    return "cannot travel that far";
  }
}