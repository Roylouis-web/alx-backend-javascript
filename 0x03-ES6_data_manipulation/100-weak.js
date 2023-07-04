let count = 0;

export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (count > 4) {
    throw new Error('Endpoint load is high');
  }

  count += 1;
  weakMap.set(endpoint, count);
}
