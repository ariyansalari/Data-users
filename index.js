//DOM
const FormRegister=document.querySelector("#form-register")
let inputs=document.querySelectorAll("input")
let Users=[];
console.log(inputs)

main=(index)=>{
    const nextInput=inputs[index]
    if(nextInput)
    {
        nextInput.focus()
    }
for(let i=index;i<inputs.length;i++)
{
    inputs[i].addEventListener("keyup",(e)=>{
e.preventDefault()
if(e.keyCode===13)
{
    inputs[2].style.color="red"
   const nextinput=inputs[i+1]
   if(nextinput)
   {
    nextinput.focus()
   }
   Saveitem(inputs[i])
   if(inputs[i].name=="fullname")
   {
    const addNew=document.createElement("tbody")
    addNew.innerHTML=`

    <td>
    <input type="text" name="firstname" id="">
    </td>

    <td>
    <input type="text" name="lastname" id="">
    </td>

    <td>
    <input type="text" name="fullname" id="">
    </td>
    `
FormRegister.appendChild(addNew)

inputs=document.querySelectorAll("input")

   main(i+1)

   }
}
    })
}

}


const Saveitem=(input)=>{
    const user={
        name:input.name,
        value:input.value
    };
    Users.push(user)
    const Userstring=JSON.stringify(Users)
    localStorage.setItem("user",Userstring)
}

const Getusers=()=>{
    const parsusers=JSON.parse(localStorage.getItem("user"))
    if (parsusers !== null) {
        parsusers.forEach((item, index) => {
            if(item.name=="fullname")
            {
                const newRow=document.createElement("tbody")
                newRow.innerHTML=`
                <td><input type="text" value="
                ${parsusers[index-2].value}">
                </td>
                <td>
                <input type="text" value="
                ${parsusers[index-1].value}">
                </td>

                <td>
                <input type="text" value="
                ${item.value}">
                </td>
            `
                FormRegister.appendChild(newRow)
            }
        });
    }
}


Getusers()
main(0)