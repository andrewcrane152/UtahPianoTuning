var emailService = require('./services/emailService');

module.exports.sendEmail = function(req, res){
  emailService.sendEmail(req).then(function(data){
    res.send(data);
  });
};
