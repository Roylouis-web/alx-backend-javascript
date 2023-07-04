export default function createInt8TypedArray(length, position, value) {
  try {
    return new DataView(
      new ArrayBuffer(length, position, new Int8Array(value))
    );
  } catch (error) {
    throw new Error('Position outside range');
  }
}
