const produceDrivingRange = (blockRange) => {
  return (startBlock, endBlock) => {
    let difference = blockRange - Math.abs(parseInt(startBlock) - parseInt(endBlock))
    return (difference >= 0?`within range by ${difference}`:`${Math.abs(difference)} blocks out of range`)
  }
}

const produceTipCalculator = (bill) => {
  return (percentage) => {
    return percentage * bill
  }
}

//small 

const createDriver = () => {
  let DriverId = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++DriverId
    }
  }
}
