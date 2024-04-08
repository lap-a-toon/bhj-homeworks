document.addEventListener('DOMContentLoaded',()=>{
    const pollURL = 'https://students.netoservices.ru/nestjs-backend/poll';
    const xhr = new XMLHttpRequest();
    const pollTitle = document.getElementById('poll__title');
    const pollAnswers = document.getElementById('poll__answers');

    xhr.addEventListener('readystatechange',()=>{
        if(xhr.readyState === xhr.DONE){
            let result = JSON.parse(xhr.response);
            if(result.id){
                pollTitle.innerText = result.data.title;
                pollTitle.setAttribute('data-id',result.id);
                let html='';
                result.data.answers.forEach((answer,i)=>{
                    html+=`<button class="poll__answer" data-ans='${i}'>${answer}</button>`;
                })
                pollAnswers.innerHTML = html;
            }
            if(result.stat){
                alert('Спасибо, ваш голос засчитан!');
            }
        }
    });

    xhr.open('GET',pollURL);
    xhr.send();


    pollAnswers.addEventListener('click',e=>{
        e.preventDefault();
        if(e.target.classList.contains('poll__answer')){
            xhr.open( `POST`, pollURL );
            xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
            xhr.send( `vote=${pollTitle.getAttribute('data-id')}&answer=${e.target.getAttribute('data-ans')}` );
        }
    })
})