var express = require('express');
var router = express.Router();
var { fields, options } = require("../assets/input");

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Generate My Site', fields, options });
});

router.post('/generate', async (req, res, next) => {
  console.log("BODY: ", req.body);
  res.render('page', {});
});

router.get('/generate', async (req, res, next) => {

  console.log("Q: ", req.query);
  let { links, enable_profile, enable_links, font, ...profile } = req.query;

  console.log(`PROFILE: `, profile);

  const display = {
    links: enable_links === "on" ?? false,
    image: enable_profile === "on" ?? false
  };

  links = links.split(",");

  console.log(display);

  res.render('page', { display, links, profile, font });
});

module.exports = router;
