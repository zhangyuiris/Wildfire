let Element = function (name, code, canBeFired, standRound) {
  this.name = name
  this.code = code
  this.canBeFired = canBeFired
  this.standRound = standRound
  function add (el) {
    if (this.code === 'grass') {
      return el
    } else if (el.code === 'grass') {
      return this
    } else if ((this.code === 'fire' && el.code === 'dust') ||
      (this.code === 'dirt' && el.code === 'fire')) {
      return stone
    } else if ((this.code === 'fire' && el.code === 'ice') ||
      (this.code === 'ice' && el.code === 'fire') ||
      (this.code === 'fire' && el.code === 'water') ||
      (this.code === 'water' && el.code === 'fire')) {
      return water
    } else if ((this.code === 'fire' && el.code === 'swamp') ||
      (this.code === 'swamp' && el.code === 'fire')) {
      return swamp
    } else if (this.code === 'fire' || el.code === 'fire') {
      return fire
    } else if ((this.code === 'water' && el.code === 'dust') ||
      (this.code === 'dust' && el.code === 'water')) {
      return swamp
    } else {
      return this
    }
  }
}
export const grass = new Element('草坪', 'grass', true, 0)
export const fire = new Element('火', 'fire', true, 0)
export const ice = new Element('冰', 'ice', false, 0)
export const dust = new Element('土', 'dust', true, 0)
export const wood = new Element('木', 'wood', true, 0)
export const stone = new Element('木', 'stone', true, 3)
export const water = new Element('水', 'water', false, 0)
export const swamp = new Element('沼泽', 'swamp', false, 0)

export function Cell () {
  Element.call(this)
  this.isFired = false
  this.remainRound = Element.prototype.standRound
}
