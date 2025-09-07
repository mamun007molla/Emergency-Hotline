//heart count
const heart=document.getElementsByClassName("heart")

for (const element of heart) {
   element.addEventListener("click",function(){
        const heartCount=parseInt(document.getElementById("totalHeart").innerText);
        const totalHeartCount=heartCount+1;
        
        document.getElementById("totalHeart").innerText=totalHeartCount;
   })
    

}

//copy count

const copies=document.getElementsByClassName("copy");



for (const copy of copies) {
    copy.addEventListener("click",function(){
        const copyCount=parseInt(document.getElementById("totalCopy").innerText);
        const totalCopyCount=copyCount+1;
        
        document.getElementById("totalCopy").innerText=totalCopyCount;

        const card=copy.closest(".card");
        const sourceEl = card.querySelector('.copy-source');  
        const text=sourceEl.innerText;
        navigator.clipboard.writeText(text)
    })
}



// call


