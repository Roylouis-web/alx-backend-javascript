import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName),uploadPhoto(fileName),]).then((values) => {
    values.forEach((element) => {
      if (element.status === 'fulfilled') {
        return [{ status: element.status, value: element.value }];
      } else if (element.status === 'rejected') {
        return [{ status: element.status, value: `${element.reason}` }];
      }
    });
  });
}
