let width = document.getElementById('width');
let height = document.getElementById('height');
let getvals = document.getElementById('enter');

getvals.addEventListener("click",function(){width = width.value})
getvals.addEventListener("click",function(){height = height.value})

let div = document.getElementById('grid');
table = document.createElement('table');

div.appendChild(table);
const cellArray = [];


class pather{
    bfs(close){
        let visited}
}

/*class t{
    constructor(cellArray){
        this.cellArray=cellArray
    }

    
}*/

class nodes{

    constructor(x,y){
        this.x=x;
        this.y=y;
        this.neighbors=[]
    }

    create(){
        let row
        let td

        for (let i=0; i<this.y; i++){
            row = document.createElement('tr');
            table.appendChild(row);
            cellArray.push([])
            for(let j=0; j<this.x; j++){
                td = document.createElement('td');
                td.innerHTML='1';
                row.appendChild(td);
                cellArray[i].push(j)
            }
        }
        for (let i=0; i<this.y; i++){
            for(let j=0; j<this.x; j++){
                if(i-1 >=0){
                    cellArray[i][j].neighbors.push(cellArray[i-1][j])
                }if(i+1<height){
                    cellArray[i][j].neighbors.push(cellArray[i+1][j])
                }if(j-1>=0){
                    cellArray[i][j].neighbors.push(cellArray[i][j-1])
                }if(j+1<=width){
                    cellArray[i][j].neighbors.push(cellArray[i][j+1])
                }
            }
        } 
        console.log(cellArray)
    }

}



getvals.addEventListener('click',function(){let grid= new nodes(width,height); grid.create();})
