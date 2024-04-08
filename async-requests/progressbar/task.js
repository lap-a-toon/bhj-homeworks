document.addEventListener('DOMContentLoaded',()=>{
    const url = 'https://students.netoservices.ru/nestjs-backend/upload';
    const xhr = new XMLHttpRequest();
    const progress = document.querySelector('#progress');
    const form = document.getElementById('form');

    xhr.addEventListener('readystatechange',()=>{
        if(xhr.readyState === xhr.DONE){
            let result = JSON.parse(xhr.response);
            if(result.success && result.success === true ){
                alert('Файл успешно загружен!');
            }else{
                alert('Что-то пошло не так');
            }
        }
    })

    xhr.upload.onprogress = (e) => {
        progress.value = e.loaded / e.total;
    };

    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        xhr.open('POST',url);
        xhr.send(form.file.files[0]);
    })
})