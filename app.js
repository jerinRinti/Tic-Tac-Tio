let boxs=document.querySelectorAll(".boxs")
        let game=document.getElementById("game")
        let newBtn=document.querySelector("#new")
        let msg=document.getElementById("msg")
        let msg_container=document.querySelector(".msg_container")
        let turnO=true;
       

        let winPattern=[
           [0,1,2],
           [0,3,6],
           [0,4,8],
           [1,4,7],
           [2,5,8],
           [2,4,6],
           [6,7,8],
        ]
        boxs.forEach((boxs) => {
            boxs.addEventListener('click',function(){
            if (turnO) {
                boxs.innerText="O"
                turnO=false
            } else {
                boxs.innerText="X"
                turnO=true
            }
            boxs.disabled=true
            checkWinner()
        })
           
        });


        // Arrow Function
       let checkWinner = () =>{
        for (const pattern  of winPattern) {
            
              let pos1= boxs[pattern[0]].innerText
              let pos2= boxs[pattern[1]].innerText
              let pos3= boxs[pattern[2]].innerText
              if (pos1 != "" && pos2 != "" && pos3 != "") {
                if (pos1 === pos2 && pos2 === pos3) {
                    console.log("winner",pos1)
                    showWinner(pos1)

                    

                }
              }
          

        }
        
       }
   let showWinner = (winner) => {
    msg.innerText = `Congratulations, The Winner is ${winner}`;
    msg_container.classList.remove("hide");
    disableBox()
}

let disableBox=() =>{
    for (const box  of boxs) {
        box.disabled=true;
    }
}