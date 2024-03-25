document.addEventListener('DOMContentLoaded',()=>{
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown=>{
        let listVal = dropdown.querySelector('.dropdown__value');
        let list = dropdown.querySelector('.dropdown__list');
        list.style.setProperty('z-index',10);
    
        listVal.addEventListener('click',()=>{
            closeAllDropdowns();
            list.classList.toggle('dropdown__list_active');
        })
    
        dropdown.querySelectorAll('.dropdown__item').forEach(el=>{
            el.addEventListener('click',(e)=>{
                e.preventDefault();
                closeAllDropdowns();
                link = el.querySelector('a');
                listVal.textContent = link.textContent;
                return false;
            });
        });    
    })

    document.addEventListener('click',e=>{
        console.log(e.target.closest('.dropdown__value'));
        if(e.target.closest('.dropdown__value') === null){
            closeAllDropdowns();
        }
    })
    
    function closeAllDropdowns(){
        document.querySelectorAll('.dropdown__list').forEach((list)=>{
            list.classList.remove('dropdown__list_active');
        })
    }
})