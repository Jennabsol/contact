const contactComponent = (props)=>{
   return `<div>
    <h3>${props.firstName} ${props.lastName}</h3>
    <p>${props.phone}</p>
    <p>${props.city}</p>
    <button id="edit!${props.id}"type="button">Edit</button>
    <button id="delete!${props.id}"type="button">Delete</button>
    </div>`
}

module.exports = contactComponent
