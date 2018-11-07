const data = {
    getContacts: () => {
        return fetch("http://localhost:3000/contacts")
            .then(res => res.json())
    },
    saveContact: (contact) => {
        return fetch("http://localhost:3000/contacts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(contact)
            })
            .then(res => res.json())
            .then(response => {
                console.log("post", response)
            });
    }
}

export {data}