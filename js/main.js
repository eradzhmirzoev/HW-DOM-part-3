let input = document.querySelector('input');
let ul = document.querySelector('ul');
let addList = document.querySelector('.addList');

document.querySelector('.wrapper').addEventListener('click', (event) => {
    let elemLi = document.createElement('li');

    if(event.target.className === 'addList' && input.value !== '') {
        elemLi.innerHTML =`${input.value} <button class="delete">DELETE</button>`;
        input.value = '';
        ul.append(elemLi);
    }

    if(event.target.className === 'delete') {
        event.target.closest('li').remove();
    }
    
    if(event.target.closest('li')) {
        event.target.closest('li').classList.toggle('changeBg');
    }

})

