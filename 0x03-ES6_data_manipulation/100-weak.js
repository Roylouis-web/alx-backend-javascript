let count = 0;

export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
  
  count++;
  weakMap.set(endpoint, count);
}
