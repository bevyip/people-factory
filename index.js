const personForm = document.querySelector('#personForm')

function renderColor(color){
        const colorDiv = document.createElement('div')
        colorDiv.style.backgroundColor = color
        colorDiv.style.width = '100px'
        colorDiv.style.height = '50px'
        
        return colorDiv
    }
    
function renderListItem(fieldName, value){
        const li = document.createElement('li')
        li.innerHTML = `${fieldName}: ${value}`
        
        return li
    }

function renderList(personData){
        const list = document.createElement('ul')
        
        //loop over ['name, 'favColor', 'age']
        Object.keys(personData).map(function(fieldName){
            const li = renderListItem(fieldName, personData[fieldName])
            list.appendChild(li)
        })
        
        return list 
    }
    

function handleSubmit(e){
    e.preventDefault()
    const f = e.target
    const lastName = f.personLastName.value 
    const col = f.col.value
    const details = document.querySelector('#details')
    //details.innerHTML = `<em>${name}</em>` //diff from .textContent - legit change design
    //backticks (`) and ${} to put expression inside no need + 
    
    const person = {
        name: f.personName.value,
        favColor: renderColor(f.favoriteColor.value).outerHTML,
        age: f.age.value,
    }

    details.appendChild(renderList(person))
    // const colorDiv = `
    //     <div style="background-color: ${favColor}; width: 100px; height: 50px;"</div>
    // `

//    details.innerHTML = `
//         <ul>
//             <li>Name: ${name}</li>
//             <li>Favourite Colour: ${renderColor(favColor).outerHTML}</li>
//             <li>Age: ${age}</li>
//         </ul>
//     `

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