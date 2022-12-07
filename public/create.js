const addInput = () => {
    var input_container = document.querySelector(".create-url-inputs-div");
    var newinput = document.createElement("input");
    newinput.classList.add("create-url-input");
    newinput.setAttribute("type", "url");
    newinput.setAttribute("required", true);
    newinput.setAttribute("name", "url_input");
    input_container.appendChild(newinput);
    newinput.focus();
    checkInputNum();
}

const removeInput = () => {
    var input_container = document.querySelector(".create-url-inputs-div");
    input_container.lastChild.remove();
    checkInputNum();
}

const checkInputNum = () => {
    var rbtn = document.querySelector(".createmenu_buttons_remove");
    var inputs = document.querySelectorAll(".create-url-input");
    if (inputs.length <= 2) {
        rbtn.disabled = true;
    } else {
        rbtn.disabled = false;
    }
}