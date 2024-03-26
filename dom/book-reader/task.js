document.addEventListener('DOMContentLoaded',()=>{
    let content = document.querySelector('.book__content');

    let fontSizeControls = document.querySelectorAll('.book__control_font-size .font-size');
    fontSizeAttr = 'data-size';
    fontSizeActiveClassPrefix = 'book_fs-';
    fontSizeActiceStateClass = 'font-size_active'
    fontSizeControls.forEach(fontSizeControl => {
        fontSizeControl.addEventListener('click',e=>{
            e.preventDefault();
            fontSizeControls.forEach(el => {
                if(el.hasAttribute(fontSizeAttr)){
                    let elFontSizeClass = fontSizeActiveClassPrefix + el.getAttribute(fontSizeAttr);
                    content.classList.remove(elFontSizeClass);
                }
                el.classList.remove(fontSizeActiceStateClass);
            });
            e.target.classList.add(fontSizeActiceStateClass);
            if(e.target.hasAttribute(fontSizeAttr)){
                let fontSizeClass =  fontSizeActiveClassPrefix + e.target.getAttribute(fontSizeAttr);
                content.classList.add(fontSizeClass);
            }
            return false;
        })
    });

    let colorControls = document.querySelectorAll('.book__control_color .color');
    colorAttr = 'data-text-color';
    colorActiveClassPrefix = 'book_color-';
    colorActiceStateClass = 'color_active'
    colorControls.forEach(colorControl => {
        colorControl.addEventListener('click',e=>{
            e.preventDefault();
            colorControls.forEach(el => {
                if(el.hasAttribute(colorAttr)){
                    let elColorClass = colorActiveClassPrefix + el.getAttribute(colorAttr);
                    content.classList.remove(elColorClass);
                }
                el.classList.remove(colorActiceStateClass);
            });
            e.target.classList.add(colorActiceStateClass);
            if(e.target.hasAttribute(colorAttr)){
                let colorClass =  colorActiveClassPrefix + e.target.getAttribute(colorAttr);
                content.classList.add(colorClass);
            }
            return false;
        })
    });

    let bgControls = document.querySelectorAll('.book__control_background .color');
    bgAttr = 'data-bg-color';
    bgActiveClassPrefix = 'book_bg-';
    bgActiceStateClass = 'color_active'
    bgControls.forEach(bgControl => {
        bgControl.addEventListener('click',e=>{
            e.preventDefault();
            bgControls.forEach(el => {
                if(el.hasAttribute(bgAttr)){
                    let elBgClass = bgActiveClassPrefix + el.getAttribute(bgAttr);
                    content.classList.remove(elBgClass);
                }
                el.classList.remove(bgActiceStateClass);
            });
            e.target.classList.add(bgActiceStateClass);
            if(e.target.hasAttribute(bgAttr)){
                let bgClass =  bgActiveClassPrefix + e.target.getAttribute(bgAttr);
                content.classList.add(bgClass);
            }
            return false;
        })
    });


})