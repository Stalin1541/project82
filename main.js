var mouseEvent = "empty";

canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color = "red" ;
width_of_the_line = 2;

canvas.addEventListener("mousedown", my_mousedown );
function my_mousedown(e)
{
   color = document.getElementById("color").value ;
   width_of_line = document.getElementById("width_of_line").value ;
   radius = document.getElementById("radius").value ;
   mouseEvent = "mouseDown"
} 



canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e)
{
    var current_position_mouse_of_x= e.clientY - canvas.offsetLeft ; 
    var current_position_mouse_of_y = e.clientY - canvas.offsetTop ;

    if (mouseEvent == "mouseDown")
    {
        
        console.log("Current Position Of X And Y Coordinates =");
        console.log("X =" + current_position_mouse_of_x + "Y = " + current_position_of_mouse_y);
        ctx.beingPath();
        ctx.strokeStyle = color ;
        ctx.lineWidth = width_of_the_line ;
        ctx.arc(current_position_mouse_of_x, current_position_mouse_of_y, radius , 0 , 2 * Math.PI);
        ctx.stroke();
        last_position_of_x = current_position_mouse_of_x ;
        last_position_of_y = current_position_mouse_of_y ;
        
    }

}

canvas.addEventListener("mouseup" , my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUP";
}


canvas.addEventListener("mouseLeave" , my_mouseLeave);
function my_mouseLeave(e)
{
    mouseEvent = "mouseLeave";
}

function Clear_area() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}




















































































