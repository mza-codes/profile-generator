var express = require('express');
var router = express.Router();

const fields = [{
  name: "name",
  placeholder: "Your Name",
  type: "text",
  maxlength: "20",
  minlength: "3"
},
{
  name: "email",
  placeholder: "Your Email",
  maxlength: "50",
  type: "email"
},
{
  name: "bio",
  placeholder: "Your Intro",
  type: "text",
  maxlength: "60",
  minlength: "10"
}, {
  name: "image",
  placeholder: "Picture URL",
  type: "text",
  minlength: "10"
},];

const options = [
  {
    name: "enable_profile",
    placeholder: "Enable Profile Picture",
    type: "checkbox",
  }, {
    name: "enable_links",
    placeholder: "Enable Links",
    type: "checkbox",
  },
]

const linkFields = [{
  name: "links",
  placeholder: "Your Links",
  type: "text",
  minlength: "10"
}];

router.get('/', function (req, res, next) {
  
  res.render('index', { title: 'Generate My Site', fields, options });
});

module.exports = router;
