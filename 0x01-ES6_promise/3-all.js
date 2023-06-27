import { uploadPhoto, createUser } from "./utils";

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()]).then((success) =>
    console.log(success[0].body, success[1].firstName, success[1].lastName)
  );
}
