const Contact = require("./contactForm")
const getContactList = require("./contactList")
const render = require("./render")

// Fetch all the current contacts from the db on page load
getContactList()
    // .then(contactList => {
    //             console.log("list",contactList)
    //     return render(contactList)})

// Add a new contact when form is submitted
document.querySelector("#saveBtn").addEventListener("click", () => {
    const contact = new Contact({
        firstName: document.querySelector("#firstName").value,
        lastName: document.querySelector("#lastName").value,
        city: document.querySelector("#city").value,
        phone: document.querySelector("#phone").value
    })

    contact.save()
        .then(() =>
            // console.log("new contact saved", data)
            // $("#form-message").text(`New contact, ${data.name}, saved`).fadeIn("slow").delay(1500).fadeOut("slow")
            getContactList()
        )
        // .then(contactList => render(contactList))

    document.querySelector("#firstName").value = ""
    document.querySelector("#lastName").value = ""
    document.querySelector("#city").value = ""
    document.querySelector("#phone").value = ""


})