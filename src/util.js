let Element = function (name, code, canBeFired, standRound) {
  this.name = name
  this.code = code
  this.canBeFired = canBeFired
  this.standRound = standRound
}
export const grass = new Element('草坪', 'grass', true, 0)
export const fire = new Element('火', 'fire', true, 0)
export const ice = new Element('冰', 'ice', false, 0)
export const dust = new Element('土', 'dust', true, 0)
export const wood = new Element('木', 'wood', true, 0)
export const stone = new Element('木', 'stone', true, 3)

export function Cell () {
  Element.call(this)
  this.isFired = false
  this.remainRound = Element.prototype.standRound
}

export const Rule = {
  'fireAddWater': 1,
  'fireAddWoof': ''
}
