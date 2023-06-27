import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const p1 = signUpUser(firstName, lastName);
  const p2 = uploadPhoto(fileName);

  return Promise.allSettled([p1, p2]).then((values) => {
    const arr = [];
    for (const element of values) {
      if (element.status === 'fulfilled')
        arr.push({ status: element.status, value: element.value });
      else {
        arr.push({ status: element.status, value: `${element.reason}` });
      }
    }

    return arr;
  });
}
