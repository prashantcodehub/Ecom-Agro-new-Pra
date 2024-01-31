function shopnow() {
    console.log("Helo")
    window.location = "about.html";
}

{/* <script> */ }
document.getElementById('originalText').addEventListener('mouseover', function () {
    console.log("");

    document.getElementById('newText').style.display = 'block';
});

document.getElementById('originalText').addEventListener('mouseout', function () {
    document.getElementById('newText').style.display = 'none';
});

document.getElementById('originalText21').addEventListener('mouseover', function () {
    document.getElementById('newTextbb').style.display = 'block';
});

document.getElementById('originalText21').addEventListener('mouseout', function () {
    document.getElementById('newTextbb').style.display = 'none';
});
document.getElementById('originalText2').addEventListener('mouseover', function () {
    document.getElementById('newText2').style.display = 'block';
});

document.getElementById('originalText2').addEventListener('mouseout', function () {
    document.getElementById('newText2').style.display = 'none';
});
document.getElementById('originalText3').addEventListener('mouseover', function () {
    document.getElementById('newText3').style.display = 'block';
});

document.getElementById('originalText3  ').addEventListener('mouseout', function () {
    document.getElementById('newText3').style.display = 'none';
});


document.getElementById('originalTextBranch').addEventListener('mouseover', function () {
    console.log("hhhhhhhhhh");

    document.getElementById('brabch-ofc').style.display = 'none';
});
//     console.log("hhhhhhhhhh");
//     for (var i = 0; i < elements.length; i++) {
//         elements[i].style.display = 'block';
//     }
// });

document.getElementById('originalTextBranch').addEventListener('mouseout', function () {
    var elements = document.getElementsByClassName('brabch-ofc');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
    }
});

// document.getElementById('originalTextbb').addEventListener('mouseover', function () {
//     console.log("");

//     var elements = document.getElementsByClassName('newTextbb');
//     for (var i = 0; i < elements.length; i++) {
//         elements[i].style.display = 'block';
//     }
// });

// document.getElementById('originalTextbb').addEventListener('mouseout', function () {
//     var elements = document.getElementsByClassName('newTextbb');
//     for (var i = 0; i < elements.length; i++) {
//         elements[i].style.display = 'none';
//     }
// });

function showElementB() {
    document.getElementById('branchofc1').style.display = 'block';
    document.getElementById('branchofc12').style.display = 'block';
    document.getElementById('branchofc13').style.display = 'block';
    document.getElementById('branchofc14').style.display = 'block';
    document.getElementById('branchofc15').style.display = 'block';
    document.getElementById('branchofc16').style.display = 'block';
    console.log("branch");
}

function hideElementB() {
    document.getElementById('branchofc1').style.display = 'none';
    document.getElementById('branchofc12').style.display = 'none';
    document.getElementById('branchofc13').style.display = 'none';
    document.getElementById('branchofc14').style.display = 'none';
    document.getElementById('branchofc15').style.display = 'none';
    document.getElementById('branchofc16').style.display = 'none';
}



function showElement() {
    document.getElementById('india-map1').style.display = 'none';
    document.getElementById('internation').style.display = 'block';
    console.log("ghrj");
}

function hideElement() {
    document.getElementById('india-map1').style.display = 'block';
    document.getElementById('internation').style.display = 'none';
}
