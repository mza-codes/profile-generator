var express = require('express');
var router = express.Router();
var { fields, options, colorValue } = require("../assets/input");
const icons = ["akar-icons:twitter-fill", "fe:github", "ic:baseline-facebook", "uil:instagram-alt",
  "uiw:linkedin", "mingcute:external-link-fill"];

router.get('/', function (req, res, next) {
  res.render('index', { brand: 'Generate My Site', title: "Profile Generator", hide: false, method: "POST", fields, options, colorValue });
});

router.use('/generate', async (req, res, next) => {
  let error = false;
  let { links, enable_profile, enable_links, font, image, ...profile } = req.query;

  if (req.method === "POST") {
    ({ links, enable_profile, enable_links, font, image, ...profile } = req.body);
  };

  if (!profile || !profile?.name) {
    error = true;
    return res.render('profile', { error, hide: true });
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

  const title = `${profile?.name ?? "Profile Generator"}`;
  const hide = true;

  return res.render('profile', { display, extLinks, profile, font, image, error, title, hide });
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