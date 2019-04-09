export const counterTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
}

export function increment (value: number = 1) {
  return {
    type: counterTypes.INCREMENT,
    value
  }
}
export function decrement (value: number = 1) {
  return {
    type: counterTypes.DECREMENT,
    value
  }
}

export function asyncIncrement (value: number = 1) {
  return (dis: any, get: any, unknown: any) => {
    return dis(increment(1))
  }
}