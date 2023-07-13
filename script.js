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
    li.textContent = `${arr.length} Name : ${data.name} Email : ${data.email}`
    ul.appendChild(li)
}

function renderElements(){
    const users =JSON.parse(localStorage.getItem('users'))
    let ul = document.getElementById('users')
    console.log("console")
    users.forEach( (user ,index) => {
        let li = document.createElement('li')
        li.className='item'
        li.textContent = `${index+1} Name : ${user.name} Email : ${user.email}`
        ul.appendChild(li)
    });
}