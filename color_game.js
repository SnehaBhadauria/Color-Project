var numsquare = 6;
var colors = generateRandomColor(numsquare);

var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay=document.querySelector("#colorDisplay");
var message = document.querySelector("#message");

var h1=document.querySelector("h1");
var reset= document.getElementById("reset");

var easybtn= document.querySelector("#easyBtn");
var hardbtn= document.querySelector("#hardBtn");



easybtn.addEventListener("click",function()
{
    hardbtn.classList.remove("selected");
    easybtn.classList.add("selected");
    numsquare=3
    colors =generateRandomColor(numsquare);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0; i< square.length; i++)
    {
        if(colors[i]){
            square[i].style.backgroundColor = colors[i];
        }
        else
        square[i].style.display="none";
    }
   
})

hardbtn.addEventListener("click",function()
{
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");
    numsquare=6
    colors =generateRandomColor(numsquare);

    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0; i< square.length; i++)
    {
        
        square[i].style.backgroundColor = colors[i];
        square[i].style.display="block";
    }
    
})

reset.addEventListener("click",function()
{//genete all new color
    colors=generateRandomColor(numsquare);
    //pick a new random color from arr
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent =pickedColor;
    this.textContent = "New Colors"
    message.textContent="";
    //change colors of sqare
        for(var i =0; i< square.length; i++)
    {
        square[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor="steelblue"; 
})

colorDisplay.textContent = pickedColor;

for(var i =0; i<square.length;i++)
{
    square[i].style.backgroundColor = colors[i];

    square[i].addEventListener("click",function()
    {
        var clickedColor=this.style.backgroundColor;

        if(clickedColor === pickedColor)
        {
            message.textContent="Correct!";
            reset.textContent="Play Again!";
            changeColor(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else
        {
            this.style.backgroundColor ="#232323";
            message.textContent="Try again!"
        }
       });
}

function changeColor(color)
{//loop through all sq
    for(var i=0; i< square.length; i++)
    {
        square[i].style.backgroundColor = color;
    }

}

function pickColor()
{
   var random= Math.floor( Math.random() * colors.length);
   return colors[random];
}
function generateRandomColor(num)
    {// make an array
        var arr= []
    //add random color to arr
    for(var i=0; i < num; i++)
    {
       // generate Random Color and push into arr

        arr.push(randomColor());

    }
        return arr;
}

function randomColor()
{
    // pick "red" from 0-255
    var r= Math.floor(Math.random() * 256 );
    // pick "green" from 0-255
    var g= Math.floor(Math.random() * 256 );
    // pick "blue" from 0-255
    var b= Math.floor(Math.random() * 256 );
   return "rgb(" + r + ", " + g + ", " + b + ")"; // spaces after commas are essential

}


