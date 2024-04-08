document.addEventListener('DOMContentLoaded',()=>{
    const modal = document.getElementById('subscribe-modal');
    const cookieName = 'modalclose';
    if(!checkModalClose(cookieName))
        modal.classList.add('modal_active');
    [modal.getElementsByClassName('modal__close')].forEach(closeBtn => {
        closeBtn[0].addEventListener('click',()=>{
            modal.classList.remove('modal_active');
            document.cookie = cookieName + '=1';
        })
    });

    function checkModalClose(cookieName){
        let cookies = document.cookie.split(';');
        return cookies.find(el=>{
            if(el.startsWith(cookieName + '='))
                return el.substring(cookieName.length+1);
        })
    }
})