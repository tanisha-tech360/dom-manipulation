var score1=0;
var btn=document.getElementById('ctr1');
btn.addEventListener('click', function() {
    score1++;
    document.getElementById('score1').innerHTML = score1 + ' ';
})

var score2 = 0;
var btn2 = document.getElementById('ctr2');
btn2.addEventListener('click', function(){
    score2++;
    document.getElementById('score2').innerHTML = score2 + ' ';
})

var reset=document.querySelector('#reset');
reset.addEventListener('click',function(){
    score1=0;
    score2=0;
    document.getElementById('score1').innerHTML = score1 + ' ';
    document.getElementById('score2').innerHTML = score2 + ' ';
})
