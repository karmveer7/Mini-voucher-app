
document.querySelector("#form").addEventListener("submit",myfun);


function myfun(){
    event.preventDefault();
    var obj={

        name:form.name.value,
        email:form.email.value,
        address:form.address.value,
        amount:form.amount.value,

    }
    console.log(obj);
    
    localStorage.setItem("user",JSON.stringify(obj))
}