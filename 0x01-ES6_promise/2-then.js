export default function handleResponseFromAPI(promise) {
  promise
    .then((data) => ({ status: 200, body: 'success' }))
    .catch((error) => new Error())
    .finally(() => console.log("Got a response from the API"));
}
