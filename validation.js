"use strict";
const inputs = document.querySelectorAll("input");

const patterns = {
    phone: /^002[0-9]{10}$/,
    userName: /^[a-zA-Z0-9]{5,12}$/,
    password: /^[a-zA-Z](@|.|-|_){8,15}$/,
    email: /^[a-z._]+@[a-z-]+.[a-z]{2,8}$/,
    slug: /^[a-z0-9-]{8,20}$/
}
function validate(field, regEx) {
    return regEx.test(field);
}
inputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {
        let validationVal = validate(input.value, patterns[e.target.attributes.name.value]);
        if (validationVal) {
            input.className = "form-control is-valid";
        } else {
            input.className = "form-control is-invalid";
        }
    })
})