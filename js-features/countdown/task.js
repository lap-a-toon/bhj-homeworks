document.addEventListener('DOMContentLoaded',()=>{
    let timerElement = document.getElementById('timer');
    let timer = parseInt(timerElement.innerText);
    let countDown = setInterval(()=>{
        if(timer === 0){
            clearInterval(countDown);
            alert("Вы победили в конкурсе!\r\nСейчас скачается файл с промокодами!");
            window.location = './prise.csv';
        }else{
            timerElement.innerText = --timer;
        }
    },1000);

    let timerElement2 = document.getElementById('timer2');
    let timerArray2 = timerElement2.innerText.split(':');
    let timer2 = (parseInt(timerArray2[0]) * 60 + parseInt(timerArray2[1])) * 60 + parseInt(timerArray2[2]);
    let countDown2 = setInterval(()=>{
        if(timer2 === 0){
            clearInterval(countDown2);
            alert('Вы победили в конкурсе2!');
        }else{
            timer2--;
            timerHours = (timer2 - timer2%3600) / 3600;
            timerMinutes = ((timer2%3600) - (timer2%3600)%60) / 60;
            timerSeconds = (timer2%3600)%60;
            timerElement2.innerText =   ((timerHours.toString().length < 2) ? '0': '' ) + timerHours + ':' +
                                        ((timerMinutes.toString().length < 2) ? '0': '' ) + timerMinutes + ':' +
                                        ((timerSeconds.toString().length < 2) ? '0': '' ) + timerSeconds;
        }
    },1000);

});