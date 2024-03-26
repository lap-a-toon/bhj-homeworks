document.addEventListener('DOMContentLoaded',()=>{
    let reveals = document.querySelectorAll('.reveal');
    function isVisible(el){
        let elPosition = el.getBoundingClientRect();
        if(elPosition.top > window.innerHeight || elPosition.bottom < 0)
            return false;
        return true;
    }
    window.addEventListener('scroll',()=>{
        reveals.forEach(reveal => {
            if(isVisible(reveal)){
                reveal.classList.add('reveal_active');
            }else{
                reveal.classList.remove('reveal_active');
            }
        });
    })
})