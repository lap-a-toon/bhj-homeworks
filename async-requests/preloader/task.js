document.addEventListener('DOMContentLoaded',()=>{
    const url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';
    const loader = document.querySelector('img#loader');
    const items = document.querySelector('#items');
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange',()=>{
        if(xhr.readyState === xhr.DONE){
            loader.classList.remove('loader_active');
            let data = JSON.parse(xhr.response);
            if(data.response.Valute){
                Object.entries(data.response.Valute).forEach(([valuteKey,valute]) => {
                    console.log(valute)
                    items.insertAdjacentHTML('beforeend',`
                        <div class="item">
                            <div class="item__code">
                                    ${valute.CharCode}
                                </div>
                                <div class="item__value">
                                    ${valute.Value}
                                </div>
                                <div class="item__currency">
                                    руб.
                                </div>
                        </div>
                    `);
                });
            }
        }
    })

    xhr.open('GET',url);
    xhr.send();
})