let form = document.getElementById('my-form')

form.addEventListener('submit' , handleSubmit)
window.addEventListener('load' , ()=>{
    if(localStorage.getItem('users') !== null)
    renderElements()
})

function handleSubmit(e){
    e.preventDefault()
    let arr = []
    if(localStorage.getItem('users') !== null)
        arr = JSON.parse(localStorage.getItem('users') )
    
    const data = {name : e.target.name.value , 
                email : e.target.email.value
        }

    arr.push(data)
    localStorage.setItem('users' ,JSON.stringify( arr));
    e.target.name.value =""
    e.target.email.value =""
    let ul = document.getElementById('users')
    let li = document.createElement('li')
    li.className='item'
    let span = document.createElement('span')
    span.textContent = `${arr.length} Name : ${data.name} Email : ${data.email}`
    li.appendChild(span) 
    let div = document.createElement('div')

    let edit = document.createElement('button')
    edit.className = 'edit'
    edit.textContent = "edit"
    div.appendChild(edit)
    let deleteBtn = document.createElement('button')
    deleteBtn.className = 'delete'
    deleteBtn.textContent ='X'
    div.appendChild(deleteBtn)
    li.appendChild(div)
    ul.appendChild(li)
}
{/* <div class="float-right">
            <button type="button" class="btn btn-primary btn-sm mx-2">edit</button><button class="btn btn-danger btn-sm delete">X</button>
          </div> */}
function renderElements(){
    const users =JSON.parse(localStorage.getItem('users'))
    let ul = document.getElementById('users')
    ul.innerHTML = ``
    users.forEach( (user ,index) => {
        let li = document.createElement('li')
        li.className='item'
        let span = document.createElement('span')
        span.textContent = `${index+1} Name : ${user.name} Email : ${user.email}`
        li.appendChild(span) 
        let div = document.createElement('div')

        let edit = document.createElement('button')
        edit.className = 'edit'
        edit.textContent = "edit"
        div.appendChild(edit)
        let deleteBtn = document.createElement('button')
        deleteBtn.className = 'delete'
        deleteBtn.textContent ='X'
        div.appendChild(deleteBtn)
        li.appendChild(div)
        ul.appendChild(li)
    });
}

var dl = document.getElementById('users')
dl.addEventListener('click', (e)=>{
    if(e.target.classList.contains('delete')){
        let index = e.target.parentNode.parentNode.textContent[0] -1
        const users =JSON.parse(localStorage.getItem('users'))
        let ul = document.getElementById('users')

        if(users.length === 1 && index === 0){
            localStorage.removeItem('users')
            ul.removeChild(e.target.parentNode.parentNode)
        }
        else{
            users.splice(index ,1)
            localStorage.setItem('users' , JSON.stringify(users))
            renderElements()
        }


    }

    if(e.target.classList.contains('edit')){
        let elem = e.target.parentNode.parentNode
        let index = elem.textContent[0] -1
        const users =JSON.parse(localStorage.getItem('users'))
        let ul = document.getElementById('users')
        document.getElementById('name').value = users[index].name
        document.getElementById('email').value = users[index].email
        if(users.length === 1 && index === 0){
            localStorage.removeItem('users')
            ul.removeChild(e.target.parentNode.parentNode)
        }
        else{
            users.splice(index ,1)
            localStorage.setItem('users' , JSON.stringify(users))
            renderElements()
        }
    }
})