import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]).then((values) => {
    const arr = [];
    values.forEach((element) => {
      if (element.status === 'fulfilled') {
        arr.push({ status: element.status, value: element.value });
      } else {
        arr.push({ status: element.status, value: `${element.reason}` });
      }
    });

    return arr;
  });
}
