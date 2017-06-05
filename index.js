const personForm = document.querySelector('#personForm')

function handleSubmit(e){
    e.preventDefault()
    const f = e.target
    const name = f.personName.value
    const lastName = f.personLastName.value 
    const col = f.col.value
    
    document.querySelector('h1').textContent = "This page belongs to " + name + " " + lastName
    document.querySelector('#empty').textContent = "Welcome, " + name + " " + lastName + "!!!!"
    if(col < 5){
        document.querySelector('h1').style.color = 'green'
    }else if(col >= 5 && col <= 8){
        document.querySelector('h1').style.color = 'orange'
    }else if(col > 8){
        document.querySelector('h1').style.color = 'red'
    }
    
}
personForm.addEventListener("submit",handleSubmit)