let body = document.querySelector('body');
body.addEventListener('click',(e)=>{
    clickedElem = e.target;
    if(clickedElem.classList.contains('has-tooltip')){
        e.preventDefault();

        let toolTip = document.querySelector('.tooltip');
        if(!toolTip){
            toolTip = document.createElement('div');
            toolTip.classList.add('tooltip');
            body.appendChild(toolTip);
        }
        toolTip.textContent = clickedElem.getAttribute('title');
        toolTip.classList.add('tooltip_active');
        let top = clickedElem.getBoundingClientRect().top - toolTip.getBoundingClientRect().height;
        let left = clickedElem.getBoundingClientRect().left - ( toolTip.getBoundingClientRect().width - clickedElem.getBoundingClientRect().width )/2
        if(left < 0){
            left = 0;
        }
        if((left + toolTip.getBoundingClientRect().width) > window.width){
            left = window.width - toolTip.getBoundingClientRect().width;
        }
        if(top < 0){
            top = clickedElem.getBoundingClientRect().top + toolTip.getBoundingClientRect().height;
        }
        toolTip.style.top = top + 'px';
        toolTip.style.left = left + 'px';
    }else{
        let toolTip = document.querySelector('.tooltip');
        if(toolTip)
            toolTip.remove();
    }
})

document.addEventListener('scroll',()=>{
    console.log('qweqweqwe');
    let toolTip = document.querySelector('.tooltip');
    if(toolTip)
        toolTip.remove();
})