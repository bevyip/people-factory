const personForm = document.querySelector('#personForm')
function handleSubmit(e){
    e.preventDefault()
    const f = e.target
    const name = f.personName.value
    document.querySelector('h1').textContent = name
}
personForm.addEventListener("submit",handleSubmit)