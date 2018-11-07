const render = (components) => {
    const container = document.querySelector("#contactList")
    // container.innerHTML = ""
    container.innerHTML += components
}

export {render}