const personForm = document.querySelector('#personForm')

function handleSubmit(e){
    e.preventDefault()
    const f = e.target
    const name = f.personName.value
    const lastName = f.personLastName.value 
    const col = f.col.value
    const details = document.querySelector('#details')
    //details.innerHTML = `<em>${name}</em>` //diff from .textContent - legit change design
    //backticks (`) and ${} to put expression inside no need + 
    const favColor = f.favoriteColor.value
    const age = f.age.value

    const colorDiv = `
        <div style="background-color: ${favColor}; width: 100px; height: 50px;"</div>
    `
    
    details.innerHTML = `
        <ul>
            <li>Name: ${name}</li>
            <li>Favourite Colour: ${favColor}</li>
            <li>Age: ${age}</li>
        </ul>
    `

    // const em = document.createElement('em')
    // em.textContent = name 
    // details.appendChild(em)
    
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