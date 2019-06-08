export function Element (type, code, canBeFired, standRound, isFired) {
  this.type = type
  this.code = code
  this.canBeFired = canBeFired
  this.standRound = standRound
  // function add (el) {
  //   if (this.code === 'grass') {
  //     return el
  //   } else if (el.code === 'grass') {
  //     return this
  //   } else if ((this.code === 'fire' && el.code === 'dust') ||
  //     (this.code === 'dirt' && el.code === 'fire')) {
  //     return stone
  //   } else if ((this.code === 'fire' && el.code === 'ice') ||
  //     (this.code === 'ice' && el.code === 'fire') ||
  //     (this.code === 'fire' && el.code === 'water') ||
  //     (this.code === 'water' && el.code === 'fire')) {
  //     return water
  //   } else if ((this.code === 'fire' && el.code === 'swamp') ||
  //     (this.code === 'swamp' && el.code === 'fire')) {
  //     return swamp
  //   } else if (this.code === 'fire' || el.code === 'fire') {
  //     return fire
  //   } else if ((this.code === 'water' && el.code === 'dust') ||
  //     (this.code === 'dust' && el.code === 'water')) {
  //     return swamp
  //   } else {
  //     return this
  //   }
  // }
  this.isFired = isFired
  this.remainRound = standRound
}

export function add (el1, el2) {
  if (el2 === 'grass') {
    return el1
  }
  if (el2 === 'fire') {
    if (el1 === 'dust') {
      return 'stone'
    }
    if (el1 === 'ice') {
      return 'water'
    }
    if (el1 === 'water') {
      return 'water'
    }
    if (el1 === 'swamp') {
      return 'dust'
    }
    return 'fire'
  }
  if (el2 === 'water' && el1 === 'dust') {
    return 'swamp'
  }
  return el2
}
