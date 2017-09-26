 //* @author  Borja Miralles Gascon
 //* @version 1.0.1 


// Listen for clicks in table cell to fill color
$('#pixel_canvas').on('click', 'td', function() {
    // Get selected color from color picker
    const color = $('#colorPicker').val();

    // Paint each cell
    $(this).css('background-color', color);
});

// Listen for form submit to create the canvas grid
$('#sizePicker').on('submit', (evt) => {
    //Reloading the page prevented
    evt.preventDefault();
    
    // Retrieving user input for grid size
    const gridHeight = $('#input_height').val();
    const gridWidth = $('#input_width').val();

    makeGrid(gridWidth, gridHeight);
});

// Function to create canvas grid with HTML table
// Width and Height need to be passed to the function
function makeGrid(width, height) {
    let html = '';
    
    for(let y = 0; y < height; y++) {
        html += '<tr>';
        for(let x = 0; x < width; x++) {
            html += '<td></td>';
        }
        html += '</tr>';
    }

    $('#pixel_canvas').html(html);
}


