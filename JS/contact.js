const button = document.querySelector('.btn');
const text = document.querySelector('.container');
const name1= document.querySelector('#name');
button.addEventListener('click',()=>{
    if(name1.value==""){
        alert('Please fill entries first')
    }else{
        text.innerHTML=`<span>Thanks for your concern... Wait for our reply to your problem</span>`

    }
})