let form = document.getElementById('my-form')

form.addEventListener('submit' , handleSubmit)

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

}