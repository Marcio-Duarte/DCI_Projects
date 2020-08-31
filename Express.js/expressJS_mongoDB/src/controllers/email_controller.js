const { sendEmail } = require('../services/email');
const HttpError = require('../handlers/http_error');
const HttpSuccess = require('../handlers/http_success');

const send = (req, res, next) => {

    console.log(req.body);
    /*  if (sendEmail(req.body)) {
         res.json(new HttpSuccess('The email was successfully sent', 250).status());
     } else {
         res.json(new HttpError('Something went wrong', 455).status());
     } */
}

module.exports = { send }