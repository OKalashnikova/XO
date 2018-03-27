window.onload = function() {
    for (var i = 0; i < 9; i++) {
        document.getElementById('game').innerHTML += '<div class="block"></div>';
    }

    var hod = '0';
    var fishka = '0';
    document.getElementById('game').onclick = function (event) {
        console.log(event);
        if(event.target.className == 'block'){
            if(hod%2 == 0) {
                event.target.innerHTML = 'x';
                fishka = 'x';
            }else{
                event.target.innerHTML = '0';
                fishka = '0';
            }
            hod++;
            checkWinner();
        }
    }
    function checkWinner() {
        var allblock = document.getElementsByClassName('block');
//        console.log(allblock);
        if (allblock[0].innerHTML==fishka && allblock[1].innerHTML==fishka && allblock[2].innerHTML==fishka) alert('Победили ' + fishka);
        if (allblock[3].innerHTML==fishka && allblock[4].innerHTML==fishka && allblock[5].innerHTML==fishka) alert('Победили ' + fishka);
        if (allblock[6].innerHTML==fishka && allblock[7].innerHTML==fishka && allblock[7].innerHTML==fishka) alert('Победили ' + fishka);
        if (allblock[0].innerHTML==fishka && allblock[3].innerHTML==fishka && allblock[6].innerHTML==fishka) alert('Победили ' + fishka);
        if (allblock[1].innerHTML==fishka && allblock[4].innerHTML==fishka && allblock[7].innerHTML==fishka) alert('Победили ' + fishka);
        if (allblock[2].innerHTML==fishka && allblock[5].innerHTML==fishka && allblock[8].innerHTML==fishka) alert('Победили ' + fishka);
        if (allblock[0].innerHTML==fishka && allblock[4].innerHTML==fishka && allblock[8].innerHTML==fishka) alert('Победили ' + fishka);
        if (allblock[2].innerHTML==fishka && allblock[4].innerHTML==fishka && allblock[6].innerHTML==fishka) alert('Победили ' + fishka);

        // if (allblock[0].innerHTML=='0' && allblock[1].innerHTML=='0' && allblock[2].innerHTML=='0') alert('Победили 0');
        // if (allblock[3].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[5].innerHTML=='0') alert('Победили 0');
        // if (allblock[6].innerHTML=='0' && allblock[7].innerHTML=='0' && allblock[7].innerHTML=='0') alert('Победили 0');
        // if (allblock[0].innerHTML=='0' && allblock[3].innerHTML=='0' && allblock[6].innerHTML=='0') alert('Победили 0');
        // if (allblock[1].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[7].innerHTML=='0') alert('Победили 0');
        // if (allblock[2].innerHTML=='0' && allblock[5].innerHTML=='0' && allblock[8].innerHTML=='0') alert('Победили 0');
        // if (allblock[0].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[8].innerHTML=='0') alert('Победили 0');
        // if (allblock[2].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[6].innerHTML=='0') alert('Победили 0');
    }


}

