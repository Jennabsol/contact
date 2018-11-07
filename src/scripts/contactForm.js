const API = require("./contactCollection")

class Contact {
    constructor(props) {
        this.firstName = props.firstName
        this.lastName = props.lastName
        this.city = props.city
        this.phone = props.phone
    }

    get contactInfo() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            city: this.city,
            phone: this.phone
        }
    }

    save() {
        return API.saveContact(this.contactInfo)
    }
}

module.exports = Contact