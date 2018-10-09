const produceDrivingRange = function(blockRange){

  return function(blockOne, blockTwo){
    const block1 = blockOne.replace(/\D/g, "")
    const block2 = blockTwo.replace(/\D/g, "")
    const distance = Math.abs(block1 - block2)
    const difference = Math.abs(blockRange - distance)

    return distance < blockRange ? "within range by " + difference.toString() : difference.toString() + " blocks out of range"

  }

}

const produceTipCalculator = function(decimal){
  return function(fare){
    return total = fare * decimal
  }
}

const createDriver = function(){
  let driverId = 0;
  return class Driver{

    constructor(name){
      this.name = name
      this.id = driverId++
    }
  }
}
