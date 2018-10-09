 function produceDrivingRange(blockRange){
   return function(start, end){
     let startNumber = parseInt(start)
     let endNumber = parseInt(end)
     let distance = Math.abs(endNumber - startNumber)
     let difference = blockRange - distance

     if (difference > 0){
       return `within range by ${difference}`
     } else {
       return `${Math.abs(difference)} blocks out of range`
     }
   }
 }

function produceTipCalculator(percentage){
  return function(fare){
    return fare*percentage
  }
}

function createDriver(){
  let driverId = 0
  return class{
    constructor(name){
      this.name = name
      this.id = ++driverId
    }
  }
}
