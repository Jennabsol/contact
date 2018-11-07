const contactMaker = require("./contact")
const API = require("./contactCollection")
const render = require("./render")

const list = () => {
    return API.getContacts().then((contacts) => contacts.forEach(contact => {
        const currentContact = contactMaker(contact)
            render(currentContact)
    }))

}
module.exports = list
