document.addEventListener('DOMContentLoaded',()=>{

    const tabBlocks = document.querySelectorAll('.tabs');
    tabBlocks.forEach(tabblock=>{

        let tabs = Array.from(tabblock.querySelectorAll('.tab__navigation .tab'));
        let tabContents = Array.from(tabblock.querySelectorAll('.tab__contents .tab__content'));
        
        tabs.forEach((tab,index)=>{
            tab.addEventListener('click',(e)=>{
                let selectedTab = tabs.indexOf(e.target);
                tabs.forEach((tab,index)=>{
                    if(index===selectedTab){
                        tab.classList.add('tab_active');
                        tabContents[index].classList.add('tab__content_active');
                    }else{
                        tab.classList.remove('tab_active');
                        tabContents[index].classList.remove('tab__content_active');
                    }
                })
            })
        })
    })
})