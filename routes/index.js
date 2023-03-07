var express = require('express');
var router = express.Router();
var { fields, options, colorValue } = require("../assets/input");
const icons = ["akar-icons:twitter-fill", "fe:github", "ic:baseline-facebook", "uil:instagram-alt",
  "uiw:linkedin", "mingcute:external-link-fill"];

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Generate My Site', fields, options, colorValue });
});

router.get('/generate', async (req, res, next) => {
  let error = false;
  let { links, enable_profile, enable_links, font, image, ...profile } = req.query;
  console.log("PROFILE: ", profile);

  if (!profile || !profile?.name) {
    error = true;
  };

  const display = {
    links: enable_links === "on" ?? false,
    image: enable_profile === "on" ?? false
  };

  const isValid = isValidURL(image);
  image = display.image && !isValid ? `https://source.unsplash.com/random` : image;

  links = links?.split(",") ?? [];
  const extLinks = display.links ? links.map((url, i) => ({
    url,
    icon: icons[i] ?? "mingcute:external-link-fill"
  })) : false;

  console.log(extLinks);

  res.render('page', { display, extLinks, profile, font, image, error });
});

module.exports = router;

function isValidURL(url) {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  };
};

/** @see https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg */