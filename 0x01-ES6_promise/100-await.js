import { uploadPhoto, createUser } from "./utils";
export default async function asyncUploadUser() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((results) => ({
      photo: results[0],
      user: results[1],
    }))
    .catch(() => ({ photo: null, user: null }));
}
