let dead = 0, lost = 0;
document.querySelectorAll('.hole').forEach((hole)=>{
    hole.addEventListener('click',(e)=>{
        if(hole.classList.contains('hole_has-mole')){
            dead++;
            document.querySelector('#dead').textContent = dead;
            if(dead === 10){
                setTimeout(()=>{
                    alert("YOU WIN")
                    renewGame();
                },50)
            }
        }else{
            lost++;
            console.log(lost)
            document.querySelector('#lost').textContent = lost;
            if(lost === 5){
                setTimeout(()=>{
                    alert("YOU LOSE")
                    renewGame();
                },50)
            }
        }
    })
})

function renewGame(){
    dead = 0;
    lost = 0;
    document.querySelector('#dead').innerHTML = dead;
    document.querySelector('#lost').innerHTML = lost;
}