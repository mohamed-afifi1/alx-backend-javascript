const calc = require('./utils')

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  console.log(`The total is: ${calc.calculateNumber('SUM', totalAmount, totalShipping)}`)

}

module.exports = sendPaymentRequestToApi;
