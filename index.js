// Functions for switching out the images and texts when alive tree and dead tree buttons are clicked so user can compare the two histograms.

function aliveTrees() {
    document.getElementById("alive").style.display='block';
    document.getElementById("dead").style.display='none';
    document.querySelectorAll('.alive').forEach(el => el.style.display='block');
    document.querySelectorAll('.dead').forEach(el => el.style.display='none');
}

function deadTrees() {
    document.getElementById("dead").style.display='block';
    document.getElementById("alive").style.display='none';
    document.querySelectorAll('.dead').forEach(el => el.style.display='block');
    document.querySelectorAll('.alive').forEach(el => el.style.display='none');
}


// Functions for hypotheses section when the mouse hovers over it.
function mouseoverHypotheses() {
    document.getElementById("hypotheses").style.backgroundColor = "lightyellow";
}

function mouseoutHypotheses() {
    document.getElementById("hypotheses").style.backgroundColor = "";
}