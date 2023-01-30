const container = document.querySelector('.container');

let button = document.querySelector('button');
button.addEventListener('click', () => squareCount())


function squareCount() {
    let squareCount = prompt('enter the number of squares you want(< 100)', 16);

    container.style.gridTemplateColumns = `repeat(${squareCount}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${squareCount}, 1fr)`;
    
    for(let i=0; i < squareCount ** 2; i++) {
        let div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
        div.addEventListener('mouseover', function() {
         div.style.background = 'red';
     })
     }     
} 

