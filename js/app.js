console.log('Boo ya!');


function myFunction1() {
    document.getElementById("box1").textContent = "X";
}

function myFunction2() {
    document.getElementById("box2").textContent = "X";
}

function myFunction3() {
    document.getElementById("box3").textContent = "X";
}

function myFunction4() {
    document.getElementById("box4").textContent = "X";
}

function myFunction5() {
    document.getElementById("box5").textContent = "X";
}

function myFunction6() {
    document.getElementById("box6").textContent = "X";
}

function myFunction7() {
    document.getElementById("box7").textContent = "X";
}

function myFunction8() {
    document.getElementById("box8").textContent = "X";
}

function myFunction9() {
    document.getElementById("box9").textContent = "X";
}

function resetButton() {
  var submit = document.getElementsByTagName("button")
  var input = document.getElementsByClassName("spaces");
	var result = " ";

	submit.textContent = result;
}





document.getElementById("box1").addEventListener("click", function() {
  console.log("square1 clicked");
  myFunction1();
});

document.getElementById("box2").addEventListener("click", function() {
  console.log("square2 clicked");
  myFunction2();
});

document.getElementById("box3").addEventListener("click", function() {
  console.log("square3 clicked");
  myFunction3();
});

document.getElementById("box4").addEventListener("click", function() {
  console.log("square4 clicked");
  myFunction4();
});

document.getElementById("box5").addEventListener("click", function() {
  console.log("square5 clicked");
  myFunction5();
});

document.getElementById("box6").addEventListener("click", function() {
  console.log("square6 clicked");
  myFunction6();
});

document.getElementById("box7").addEventListener("click", function() {
  console.log("square7 clicked");
  myFunction7();
});

document.getElementById("box8").addEventListener("click", function() {
  console.log("square8 clicked");
  myFunction8();
});

document.getElementById("box9").addEventListener("click", function() {
  console.log("square9 clicked");
  myFunction9();
});

document.getElementsByTagName("button").addEventListener("click", function() {
  console.log("reset button clicked");
  resetButton();
});
