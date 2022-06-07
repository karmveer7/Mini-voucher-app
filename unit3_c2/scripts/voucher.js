var arr=JSON.parse(localStorage.getItem("user")) 
document.querySelector("#wallet_balance").innerText=arr.amount;
getData()
async function getData(){

    let url=` https://masai-vouchers-api.herokuapp.com/api/vouchers`;
    let res=await fetch(url)
    let data=await res.json();
    console.log(data);
    append(data[0].vouchers);
    
   

}

function append(data){
   let box= document.querySelector("#voucher_list");
//    box.innerHTML=null;
    data.forEach(function(el)
    {
        let name=document.createElement("p")
        name.innerText=el.name;
        let price=document.createElement("p")
        price.innerText=el.price;
        let image=document.createElement("img")
        image.src=el.image;
        let button=document.createElement("button")
        button.innerText="Buy";
        button.addEventListener("click",function(){
            purchase(el)
        })
        let container=document.createElement("div")

        container.append(image,name,price,button);
        box.append(container);


    })

}
var purchase1=JSON.parse(localStorage.getItem("purchase"))||[]


function purchase(el){

    if(arr.amount>el.price)
    { arr.amount=arr.amount-el.price;
        localStorage.setItem("user",JSON.stringify(arr))
        purchase1.push(el);
        alert("Hurray! purchase successful")
    }
    else{
        alert("Sorry! insufficient balance")
    }
    localStorage.setItem("purchase",JSON.stringify(purchase1))
    window.location.reload()


}