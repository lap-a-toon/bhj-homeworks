document.addEventListener('DOMContentLoaded',()=>{
    let rotators = document.querySelectorAll('.rotator');
    rotators.forEach(rotator => {
        rotatorElements = rotator.querySelectorAll('.rotator__case');
        // Задаём цвета заранее
        rotatorElements.forEach(el=>{
            if(el.hasAttribute('data-color'))
                el.style.color=el.getAttribute('data-color');
        });
        let iterator = 0;
        let myAction = function(){
            let speed = rotatorElements[iterator].hasAttribute('data-speed') ? rotatorElements[iterator].getAttribute('data-speed') : 1000;
            iterator = changeSlide(rotatorElements,iterator);
            clearTimeout(myAction.timeout);
            myAction.timeout = setTimeout(myAction,speed);
        }
        myAction();
    });

    function changeSlide(rotatorElements,iterator){
        rotatorElements.forEach((rotatorElement,index)=>{
            if(iterator === index){
                rotatorElement.classList.add('rotator__case_active');
            }else{
                rotatorElement.classList.remove('rotator__case_active');
            }
        })
        iterator++;
        if(iterator === rotatorElements.length)
            iterator = 0;
        return iterator;
    }

})