function distanceFromHqInBlocks(pickupLocation){
    const hq = 42;
    const distanceInBlocks =  Math.abs(hq - pickupLocation);
    return distanceInBlocks;

}


function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const distanceInFeet = blocks * 264;
  return distanceInFeet;
  }

 function distanceTravelledInFeet(startBlock, endBlock) {
        const distanceInBlocks = Math.abs(endBlock - startBlock);
        const distanceInFeet = distanceInBlocks * 264;
        return distanceInFeet;
}

function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);

    if (distanceInFeet <= 400) {
      return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }




