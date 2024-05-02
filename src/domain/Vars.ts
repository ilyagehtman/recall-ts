export type ICategory = 'брелок' | 'серьга'
export type IType = 'бусина' | 'панно'
export type ISize = 'маленький' | 'средний' | 'большой'
export type IDeliveryMethod = 'курьер' | 'пункт выдачи' | 'самовывоз'

export type IColor =
  { hex: '#fea2c4', name: 'розовый' } |
  { hex: '#bde2ff', name: 'голубой' } |
  { hex: '#ff4444', name: 'красный' } |
  { hex: '#d5f78d', name: 'зеленый' }

export type ILaceColor =
  { hex: '#fea2c4', name: 'розовый' } |
  { hex: '#a0eb00', name: 'салатовый' } |
  { hex: '#c1d4e1', name: 'почти голубой' }


export function isCategory(str?: string): str is ICategory {
  return str === 'keychain' || str === 'earring'
}