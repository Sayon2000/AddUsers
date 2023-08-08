const axiosInstance = axios.create({
    baseURL : 'https://crudcrud.com/api/a0f3aed0c5504f99aecd24b9891cf70c/appointment'
})

let form = document.getElementById('my-form')

form.addEventListener('submit' , handleSubmit)
window.addEventListener('load' ,()=>{
   
    if(localStorage.getItem('users') !== null)
    renderElements()
})

async function handleSubmit(e){
    e.preventDefault()
    let arr = []
    if(localStorage.getItem('users') !== null)
        arr = JSON.parse(localStorage.getItem('users') )
    
    const data = {name : e.target.name.value , 
                email : e.target.email.value,
                phone : e.target.phone.value
        }

        console.log(JSON.stringify(data))
    let res = await axiosInstance.post('/',data)
    console.log(res)

    arr.push(data)
    localStorage.setItem('users' ,JSON.stringify( arr));
    e.target.name.value =""
    e.target.email.value =""
    e.target.phone.value =""
    let ul = document.getElementById('users')
    let li = document.createElement('li')
    li.className='item'
    let span = document.createElement('span')
    span.textContent = `${arr.length} Name : ${data.name} Email : ${data.email}
     phone number : ${data.phone}`
    li.appendChild(span) 
    let div = document.createElement('div')

    let edit = document.createElement('button')
    edit.className = 'edit'
    edit.textContent = "edit"
    div.appendChild(edit)
    let deleteBtn = document.createElement('button')
    deleteBtn.className = 'delete'
    deleteBtn.textContent ='delete'
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
        span.textContent = `${index+1} Name : ${user.name} Email : ${user.email}
        phone number : ${user.phone}`
        li.appendChild(span) 
        let div = document.createElement('div')

        let edit = document.createElement('button')
        edit.className = 'edit'
        edit.textContent = "edit"
        div.appendChild(edit)
        let deleteBtn = document.createElement('button')
        deleteBtn.className = 'delete'
        deleteBtn.textContent ='delete'
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
        document.getElementById('phone').value = users[index].phone
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