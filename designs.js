// Select color input

const colorInput = $('#colorPicker') ;

// Select size input
const heightInput = $('#inputHeight') ;
const widthInput  = $('#inputWeight') ;
const pixelCanvas = $('#pixelCanvas');

let color ;
let height ;
let width  ;
let cellId;
let rowId;


// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event)
{
    event.preventDefault();
    pixelCanvas.empty();
    color  =  colorInput.val();
    height =  heightInput.val();
    width  =  widthInput.val();
    makeGrid();

}
) ;

$('#colorPicker').change(function(){

    color = colorInput.val();
}
)

function makeGrid() {
      
    for(let y = 0; y< height;y++) {     
        rowId = 'row'+y ;
        pixelCanvas.append($('<tr id='+rowId+'></tr>')) ;

        for(let x=0;x<width; x++) {
           cellId = 'cell'+y+x ;
           $('#'+rowId).append('<td id='+cellId+'></td>') ;
           $('#'+cellId).click(function(event){ 
           $(this).attr('bgcolor',color);  
           });
        }
    } 
} 
