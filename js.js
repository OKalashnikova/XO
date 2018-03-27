var t = new Array(9);

function o() {
    var id = Math.floor(Math.random()*9);
    t[id] ? o() : move (id, 'o');
}

// function checkWin() {
//     if (t[0]=='o' && t[1]=='o' && t[2]=='o' || t[0]=='player' && t[1]=='player' && t[2]=='player') return true;
//     if (t[3]=='o' && t[4]=='o' && t[5]=='o' || t[3]=='player' && t[4]=='player' && t[5]=='player') return true;
//     if (t[6]=='o' && t[7]=='o' && t[8]=='o' || t[6]=='player' && t[7]=='player' && t[8]=='player') return true;
//     if (t[0]=='o' && t[3]=='o' && t[6]=='o' || t[0]=='player' && t[3]=='player' && t[6]=='player') return true;
//     if (t[1]=='o' && t[4]=='o' && t[7]=='o' || t[1]=='player' && t[4]=='player' && t[7]=='player') return true;
//     if(t[0] && t[1] && t[2] && t[3] && t[4] && t[5] && t[6] && t[7] && t[8]) return true;
// }


function checkWin(role) {
    if (t[0]== role && t[1]== role && t[2]== role) alert('Победили ' + role);
    if (t[3]== role && t[4]== role && t[5]== role) alert('Победили ' + role);
    if (t[6]== role && t[7]== role && t[8]== role) alert('Победили ' + role);
    if (t[0]== role && t[3]== role && t[6]== role) alert('Победили ' + role);
    if (t[1]== role && t[4]== role && t[7]== role) alert('Победили ' + role);
    if (t[0]== role && t[4]== role && t[8]== role) alert('Победили ' + role);
    if (t[2]== role && t[4]== role && t[6]== role) alert('Победили ' + role);
    if(t[0] && t[1] && t[2] && t[3] && t[4] && t[5] && t[6] && t[7] && t[8]) return true;
}

function move(id, role) {
    if(t[id]) return false;
    t[id] = role;
    document.getElementById(id).className = 'cell ' + role;
    !checkWin(role) ? (role == 'player') ? o() : null : reset()
}

function reset() {
    alert ("Игра окончена!");
    location.reload();
}