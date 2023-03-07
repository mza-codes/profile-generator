module.exports = {
    fields: [{
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
        maxlength: "80",
        minlength: "10"
    }, {
        name: "image",
        placeholder: "Picture URL",
        type: "text",
        minlength: "10"
    },],

    options: [
        {
            name: "enable_profile",
            placeholder: "Enable Profile Picture",
            type: "checkbox",
        }, {
            name: "enable_links",
            placeholder: "Enable Links",
            type: "checkbox",
        },
    ],
    colorValue: [{
        name: "primary",
        placeholder: "Primary Color",
        type: "color"
    },
    {
        name: "secondary",
        placeholder: "Secondary Color",
        type: "color",
    }, {
        name: "tertiary",
        placeholder: "Tertiary Color",
        type: "color",
    },
    ],

    linkFields: [{
        name: "links",
        placeholder: "Your Links",
        type: "text",
        minlength: "10"
    }],
};