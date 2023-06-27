import signUpUser from "./4-user-promise";
import upLoadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    upLoadPhoto(fileName),
  ]).then((results) => results);
}
