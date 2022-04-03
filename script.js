const containter = document.querySelector('.test');
console.log(containter)

function makeRows(rows,cols){
    containter.style.setProperty("--grid-rows",rows);
    containter.style.setProperty("--grid-cols",cols);

    for (c=0; c<(rows*cols);c++){
        let cell = document.createElement('div');
        cell.innerText = (c + 1);
        containter.appendChild(cell).className = "grid-item"
    };
};

makeRows(8,8);