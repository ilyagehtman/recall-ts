import { IProduct } from '../pages/store/Store.tsx'

export default function useProductSizeDescription() {

  function getSizeDescription(product: Partial<IProduct>) {
    if (product.category === 'серьга') {
      if (product.type === 'бусина') {
        switch (product.size) {
          case 'маленький':
            return '1.5 х 1.5 х 1'
          case 'средний':
            return '2 х 2 х 1'
          case 'большой':
            return '3 х 3 х 1'
          default:
            return '???'
        }
      } else {
        switch (product.size) {
          case 'маленький':
            return '1.5 х 1.5 х 1'
          case 'средний':
            return '4 х 4 х 0.5'
          case 'большой':
            return '6 х 6 х 0.5'
          default:
            return '???'
        }
      }
    } else {
      if (product.type === 'бусина') {
        switch (product.size) {
          case 'маленький':
            return '3 х 3 х 3'
          case 'средний':
            return '5 х 5 х 5'
          case 'большой':
            return '6 х 6 х 6'
          default:
            return '???'
        }
      } else {
        switch (product.size) {
          case 'маленький':
            return '4 х 4 х 0.5'
          case 'средний':
            return '6 х 6 х 0.5'
          case 'большой':
            return '9 х 9 х 0.5'
          default:
            return '???'
        }
      }
    }
  }

  return getSizeDescription
}