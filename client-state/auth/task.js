document.addEventListener('DOMContentLoaded',()=>{
    const   url = 'https://students.netoservices.ru/nestjs-backend/auth',
            formAuth = document.getElementById('signin__form'),
            signin = document.getElementById('signin'),
            welcome = document.getElementById('welcome'),
            unauthBtn = document.getElementById('unauth'),
            xhr = new XMLHttpRequest();

    if(localStorage.user_id){
        showWelcome(localStorage.user_id);
    }else{
        formAuth.addEventListener('submit',(e)=>{
            e.preventDefault();
            let data = new FormData(formAuth);
            xhr.open('POST',url);
            xhr.send(data);
            formAuth.reset();
        })

        xhr.addEventListener('readystatechange',e=>{
            if(xhr.readyState === xhr.DONE){
                try{
                    let result = JSON.parse(xhr.response);
                    if(result.success){
                        localStorage.user_id = result.user_id;
                        showWelcome(result.user_id)
                    }else{
                        if(!formAuth.querySelector('.error')){
                            let err = document.createElement('div');
                            err.setAttribute('class','row error'); 
                            err.setAttribute('style','color:red;');
                            err.innerText = `Неверный логин/пароль`;
                            formAuth.prepend(err);
                        }
                    }
                }catch(error){
                    alert(`Something's wrong`);
                    console.log(error);
                }
            }
        })
    }

    unauthBtn.addEventListener('click',()=>{
        localStorage.removeItem('user_id');
        welcome.classList.remove('welcome_active');
        signin.classList.add('signin_active');
    })

    function showWelcome(userId){
        signin.classList.remove('signin_active');
        welcome.querySelector('#user_id').innerText = userId;
        welcome.classList.add('welcome_active');
    }
})