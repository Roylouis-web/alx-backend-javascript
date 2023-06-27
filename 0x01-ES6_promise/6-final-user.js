import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]).then((values) => {
    const arr = [];
    values.forEach((element) => {
      arr.push({ status: element.status, value: element.value });
    });

    return arr;
  });
}
