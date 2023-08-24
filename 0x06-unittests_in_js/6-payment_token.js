const getPaymentTokenFromAPI = (success) => {
  if (success) {
    const response = { data: 'Successful response from the API' };
    return Promise.resolve(response);
  }
};

module.exports = getPaymentTokenFromAPI;
