import { uploadPhoto, createUser } from "./utils";

export default async function asyncUploadUser() {
  const obj = {};
  try {
    const p1 = await uploadPhoto();
    const p2 = await createUser();

    obj.photo = p1;
    obj.user = p2;
  } catch (error) {
    obj.photo = null;
    obj.user = null;
  }

  return obj;
}
