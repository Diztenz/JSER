var exerciseBox = document.getElementById("exercise-box"),
    exerciseBtn = document.getElementById("exercise-btn"),
    exerciseResult = document.getElementById("exerciseResult");

function enter() {
    exerciseResult.style.border = "1px solid blue";
    exerciseResult.innerHTML = exerciseBox.value;
}

exerciseBtn.addEventListener("click", enter);

var exerciseTimeBox = document.getElementById("exercise-time-box"),
    exerciseTimeBtn = document.getElementById("exercise-time-btn"),
    exerciseTimeResult = document.getElementById("exerciseTimeResult");

function enter2() {
    exerciseTimeResult.style.border = "1px solid blue";
    exerciseTimeResult.innerHTML = exerciseTimeBox.value;
}

exerciseTimeBtn.addEventListener("click", enter2);

var exerciseRestBox = document.getElementById("exercise-rest-box"),
    exerciseRestBtn = document.getElementById("exercise-rest-btn"),
    exerciseRestResult = document.getElementById("exerciseRestResult");

function enter3() {
    exerciseRestResult.style.border = "1px solid blue";
    exerciseRestResult.innerHTML = exerciseRestBox.value;
}

exerciseRestBtn.addEventListener("click", enter3);