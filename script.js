
function makeGrid(x,y){
    let tbl = document.querySelector('.test');

    for (let i=0; i<x;i++){
        let myRow = document.createElement("div");
        myRow.id = ("row" +i);
  
        tbl.appendChild(myRow);      
        let rowW = document.getElementById("row"+i);

        myRow.classList.add('rowie');

        for(let j=0; j<y; j++){
            let myCell = document.createElement("div");
            myCell.id = ('nice')
            rowW.appendChild(myCell);

        }
    }
};

// makeGrid(16,16);

let test = document.getElementById('div')

test.addEventListener('click',function(event){
event.target.classList.toggle('collored')
})

let btn = document.getElementById('btn')


btn.addEventListener('click',function(event){
    let  initrow = document.querySelectorAll('.rowie')

    let box = document.getElementById('div');
    console.log(box)

    if (box.childNodes.length === 0){
        console.log('element is empty')
        var x = prompt("Please provide number of Rows");
        var y = prompt("Please provide number of Columns");
        makeGrid(x,y)
    }else{
        console.log('element is not empty')
        box.innerHTML = '';
        var x = prompt("Please provide number of Rows");
        var y = prompt("Please provide number of Columns");
        makeGrid(x,y)

    }


    

})