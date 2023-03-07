"use strict";

const options = {
    profile: "enable_profile",
    links: "enable_links"
};

const icons = ["akar-icons:twitter-fill", "fe:github", "ic:baseline-facebook", "uil:instagram-alt",
    "uiw:linkedin", "mingcute:external-link-fill"];

if (document.readyState !== "loading" && location.pathname === "/") {

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

    checkboxes.forEach((el) => {
        el.addEventListener("change", handleOptions);
    });

    // form.addEventListener("submit", handleSubmit);
    field.addEventListener("change", handleTagChange);

    function handleTagChange(e) {
        const links = e.target?.value?.split(",");
        urlParent.querySelectorAll("span")?.forEach(node => urlParent.removeChild(node));

        links.forEach((url, i) => {
            if (!url || url?.length <= 0 || url?.trim()?.length <= 0) return;
            if (!isValidURL(url)) {
                field.classList.add("error");
                return;
            };
            field.classList.remove("error");
            const span = document.createElement("span");
            span.innerHTML = `<iconify-icon icon="${icons[i] ?? "mingcute:external-link-fill"}" width="22" height="22"></iconify-icon>`
            urlParent.appendChild(span);
        });
        console.log("FINAL ARR:", links);
        return;
    };

    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
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
}

function isValidURL(url) {
    try {
        new URL(url);
        return true;
    } catch (err) {
        return false;
    };
};