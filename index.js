const personForm = document.querySelector('#personForm')

function handleSubmit(e){
    e.preventDefault()
    const f = e.target
    const name = f.personName.value
    const lastName = f.personLastName.value
    document.querySelector('h1').textContent = "This page belongs to " + name + " " + lastName
    document.querySelector('#empty').textContent = "Welcome, " + name + " " + lastName
}
personForm.addEventListener("submit",handleSubmit)