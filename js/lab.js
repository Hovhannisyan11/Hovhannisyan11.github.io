$(document).ready(function(){
 
  $('.but_1').click(function(){
    $('.subs').css('display','block');
    $('.subs').css('backgroundColor','rgba(0,0,0,0.4)')
    
  })

  $('.iqs').click(function(){
    $('.subs').hide(1000);
    
  })

$('#but_2').click(function(){
  $('.but').css('display','none');
  $('.ham').css('display','inline-block')
})

$('#but_22').click(function(){
  $('.but2').css('display','none');
  $('.ham2').css('display','inline-block');
})

$('#but_44').click(function(){
  $('.but3').css('display','none');
  $('.ham3').css('display','inline-block')
})

// $('#but_3').click(function(){
//   $('#follower').toggle()  // ete divi meja qcac et yndhanury
// })



});



let like = document.getElementById('but_2');

function func(){
  let icon = '<i style="display: none;" class="fa fa-check ham" aria-hidden="true"></i>'
 like.innerHTML = icon + 'Liked'
 // innerText prosto texta tegy hashvi chi arnum , isk innerHTML -y hashvi arnum e tegy
}



// tarberak 1

function func2(){
let f = document.getElementById('follower');

if(f.style.display == 'flex'){
  f.style.display ='none'
}else{
  f.style.display = 'flex'
}

}


// kam senc jqueriov verev



let like2 = document.getElementById('but_22');
function func3(){
let icon = '<i style="display: none;" class="fa fa-check ham2" aria-hidden="true"></i>'
like2.innerHTML = icon + 'Liked'
}



function func4(){
let f2 = document.getElementById('followers');

if(f2.style.display == 'none'){
  f2.style.display = 'block'
}else{
  f2.style.display = 'none'
}

}


let like3 = document.getElementById('but_44');
function func5(){
let icon = '<i style="display: none;" class="fa fa-check ham3" aria-hidden="true"></i>'
like3.innerHTML = icon + 'Liked'

}


function func6(){
 
  let f3 = document.getElementById('followers3');

if(f3.style.display == 'block'){
  f3.style.display = 'none'
}else{
  f3.style.display = 'block'
}


}