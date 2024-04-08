document.addEventListener('DOMContentLoaded',()=>{
    const editor = document.getElementById('editor');
    const clearBtn = document.getElementById('clear');
    
    let editorData = localStorage.getItem('editor');
    if(editorData)
        editor.value = editorData;
    
    editor.addEventListener('keyup',(e)=>{
        localStorage.setItem('editor', editor.value);
    })
    
    clearBtn.addEventListener('click',()=>{
        editor.value = '';
        localStorage.removeItem('editor');
    })
    
})