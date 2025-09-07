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
const calls=document.getElementsByClassName("call");
for (const callButton of calls) {
    callButton.addEventListener("click",function(){
    const card=callButton.closest(".card");
    const sourceEl = card.querySelector('.copy1');  
    const sourceEl2 = card.querySelector('.copy-source');  
    const sourceEl3 = card.querySelector('.copy2');  
    const text="Calling "+sourceEl.innerText +" "+ sourceEl2.innerText+"...";
    const coinAmount=parseInt(document.getElementById("coin").innerText);
    if (coinAmount<20) {
        alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
        return;
    }
    alert(text);
    const remCoin=coinAmount - 20;
    document.getElementById("coin").innerText=remCoin;
    const h3=document.createElement("h3");
    h3.innerText=sourceEl3.innerText;
    
    const p=document.createElement("p");
    p.innerText=sourceEl2.innerText;
    
    p.style.color="#5c5c5c"
    p.style.fontWeight="400"
    const div=document.createElement("div");
    div.append(h3);
    div.append(p);
    
  
    let time=new Date();
    let presentTime=time.toLocaleTimeString();
    const div2=document.createElement("div");
    div2.innerText=presentTime;
    const div3=document.createElement("div");

    div3.append(div);
    div3.append(div2);
    div3.style.backgroundColor="#fafafa"
    div3.style.display="flex";
    div3.style.justifyContent="space-between";
    div3.style.alignItems="center";
    div3.style.padding="16px"
    div3.style.margin="16px"

    document.getElementById("parentHistory").append(div3);
    



})

}

// clear
const clearButton=document.getElementById("clear")
clearButton.addEventListener("click",function(){
    const child=document.getElementById("parentHistory");
    child.innerHTML=""
   
})
