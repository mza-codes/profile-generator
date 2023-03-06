"use strict";

const field = document.querySelector("#links");
const urlParent = document.querySelector(".urls");
const form = document.querySelector("#profile"); // #profile
let linksHolder = [];

form.addEventListener("submit", handleSubmit);
field.addEventListener("change", handleTagChange);

function handleTagChange(e) {
    console.log("TARGET: ", e);
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
    return;
};