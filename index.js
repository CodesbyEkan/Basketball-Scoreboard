let h_score = document.getElementById("hScore")
let g_score = document.getElementById("gScore")
let hScore = 0
let gScore = 0

function add1PointHome(){
    hScore += 1
    h_score.textContent = hScore
}

function add2PointHome(){
    hScore += 2
    h_score.textContent = hScore
}

function add3PointHome(){
    hScore += 3
    h_score.textContent = hScore
}

function add1PointGuest(){
    gScore += 1
    g_score.textContent = gScore
}

function add2PointGuest(){
    gScore += 2
    g_score.textContent = gScore
}

function add3PointGuest(){
    gScore += 3
    g_score.textContent = gScore
}

function reset(){
    h_score.textContent = 0
    g_score.textContent = 0
    hScore = 0
    gScore = 0
}