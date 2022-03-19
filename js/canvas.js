

function firstTry() {
    var canvas = document.getElementById('mycanvas');
    var Pincel=canvas.getContext("2d");
        Pincel.beginPath()
        // horizontal
        Pincel.strokeStyle = "black";
        Pincel.moveTo(25, 140);
        Pincel.lineTo(125, 140);
        Pincel.stroke();
        Pincel.closePath();  
}

function secondTry() {
    var canvas = document.getElementById('mycanvas');
    var Pincel=canvas.getContext("2d");
        Pincel.beginPath()
        // vertical
        Pincel.strokeStyle = "black";
        Pincel.moveTo(75, 140);
        Pincel.lineTo(75, 40);
        Pincel.stroke();
        Pincel.closePath();
}

function thirdTry() {
    var canvas = document.getElementById('mycanvas');
    var Pincel=canvas.getContext("2d");
        Pincel.beginPath()
    //    h2
        Pincel.strokeStyle = "black";
        Pincel.moveTo(74, 40);
        Pincel.lineTo(140, 40);
        Pincel.stroke();
        Pincel.closePath();

}

function fourthTry() {
    var canvas = document.getElementById('mycanvas');
    var Pincel=canvas.getContext("2d");
    // vertical2
    Pincel.beginPath();
    Pincel.strokeStyle = "black";
    Pincel.moveTo(141, 40);
    Pincel.lineTo(140, 60);
    Pincel.stroke();
    Pincel.closePath();      
}

function fifthTry() {
    var canvas = document.getElementById('mycanvas');
    var Pincel=canvas.getContext("2d");
        // cabeza
    Pincel.beginPath()
    Pincel.fillStyle = "purple";
    Pincel.arc(140,70, 10, 0, Math.PI*2);
    Pincel.fill(); 
    Pincel.closePath();  
}

function sixthTry() {
    var canvas = document.getElementById('mycanvas');
    var Pincel=canvas.getContext("2d");
    // tronco
    Pincel.beginPath()
    Pincel.strokeStyle = "purple";
    Pincel.moveTo(140, 80);
    Pincel.lineTo(140,110);
    Pincel.stroke(); 
    Pincel.fill();     
    Pincel.closePath();        
}

function seventhTry() {
    var canvas = document.getElementById('mycanvas');
    var Pincel=canvas.getContext("2d");
        // pie1
    Pincel.beginPath();
    Pincel.strokeStyle = "purple";
    Pincel.moveTo(140,110);
    Pincel.lineTo(125,130);
    Pincel.closePath();
    Pincel.stroke();
}

function eighthTry() {
    var canvas = document.getElementById('mycanvas');
    var Pincel=canvas.getContext("2d");
        // pie2
        Pincel.beginPath();
        Pincel.strokeStyle = "purple";
        Pincel.moveTo(140,110);
        Pincel.lineTo(155,130);
        Pincel.closePath();
        Pincel.stroke();
}

function ninthTry() {
    var canvas = document.getElementById('mycanvas');
    var Pincel=canvas.getContext("2d");
        // brazo1
    Pincel.beginPath();
    Pincel.strokeStyle = "purple";
    Pincel.moveTo(140,95);
    Pincel.lineTo(115,95);
    Pincel.closePath();
    Pincel.stroke();
   
}

function tenthTry() {
    var canvas = document.getElementById('mycanvas');
    var Pincel=canvas.getContext("2d");
        // brazo2
    Pincel.beginPath();
    Pincel.strokeStyle = "purple";
    Pincel.moveTo(140,95);
    Pincel.lineTo(165,95);
    Pincel.closePath();
    Pincel.stroke();
 
}

function borrarCanvas() {
    var canvas = document.getElementById('mycanvas');
    var Pincel=canvas.getContext("2d");
    Pincel.clearRect(0, 0, 750, 600);
}