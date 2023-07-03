export default function createInt8TypedArray(length, position, value) {
  try {
    return new DataView(new ArrayBuffer(length, position, value));
  } catch (error) {
    throw error;
  }
}
