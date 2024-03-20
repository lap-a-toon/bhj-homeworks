document.addEventListener('DOMContentLoaded',()=>{
    let cookieImg = document.querySelector('#cookie');
    let cookieImgStartWidth = cookieImg.width;
    let clickCounter = 0;
    let startTime = new Date().getTime();
    cookieImg.addEventListener('click',(e)=>{
        clickCounter++;
        let clickTime = new Date().getTime();
        let speed = ((clickTime - startTime)/1000).toFixed(2);
        startTime = clickTime;
        document.querySelector('#clicker__counter').innerHTML = clickCounter;
        document.querySelector('#clicker__speed').innerHTML = speed;
        e.target.classList.toggle('even');
        if(cookieImg.classList.contains('even')){
            e.target.width = e.target.width*1.1;
        }else{
            e.target.width = cookieImgStartWidth;
        }
    });
    

})