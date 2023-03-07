"use strict";

const options = {
    profile: "enable_profile",
    links: "enable_links"
};

const field = document.querySelector("#links");
const urlParent = document.querySelector(".urls");
const form = document.querySelector("#profile"); // #profile

const inputs = {
    image: document.querySelector("#image"),
    links: document.querySelector("#links"),
    imageLabel: form.querySelector("label[for='image']"),
    linkLabel: form.querySelector("label[for='links']")
};

const checkboxes = [document.querySelector("#enable_profile"), document.querySelector("#enable_links")];

// if (document.readyState !== "loading") {
checkboxes.forEach((el) => {
    el.addEventListener("change", handleOptions);
});
// }

let linksHolder = [];

form.addEventListener("submit", handleSubmit);
field.addEventListener("change", handleTagChange);

function handleTagChange(e) {
    const links = e.target?.value?.split(",");
    linksHolder = [];

    links.forEach((url, i) => {
        if (!url || url?.length <= 0 || url?.trim()?.length <= 0) return;
        const el = document.createElement("span");
        el.textContent = `#${i + 1}`;
        urlParent.appendChild(el);
        linksHolder.push(url);
    });
    console.log("FINAL ARR:", links);
    return;
};

function handleSubmit(e) {
    e.preventDefault();
    console.log("FORM: ", e);
    const formData = new FormData(e.target);
    formData.append("links", linksHolder);
    formData.forEach((val, key) => {
        console.log(key, val);
    });
    return;
};

function handleOptions(e) {
    console.log(`${e.target.name}:${e.target.checked}`);
    const state = e.target.checked;
    if (e.target.name === options.profile) {
        inputs.image.required = state;
        inputs.image.hidden = !state;
        inputs.imageLabel.hidden = !state;
    } else if (e.target.name === options.links) {
        inputs.links.required = state;
        inputs.links.hidden = !state;
        inputs.linkLabel.hidden = !state;
    }; return;
};