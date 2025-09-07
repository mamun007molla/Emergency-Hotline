
const heart=document.getElementsByClassName("heart")
console.log(heart)
for (const element of heart) {
   element.addEventListener("click",function(){
        const heartCount=parseInt(document.getElementById("totalHeart").innerText);
        const totalHeartCount=heartCount+1;
        console.log(totalHeartCount)
        document.getElementById("totalHeart").innerText=totalHeartCount;
   })
    

}


