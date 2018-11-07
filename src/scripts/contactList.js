import {contactComponent as contactMaker} from "./contact"
import {data as API} from "./contactCollection"
import {render} from "./render"

const list = () => {
    document.querySelector("#contactList").innerHTML = ""
    return API.getContacts().then((contacts) => contacts.forEach(contact => {
        const currentContact = contactMaker(contact)
            render(currentContact)
    }))

}
export {list}
