var array = ['a', 'b', 'c','d']

var flag = 0;
var timer;

// document.getElementById('img').style.backgroundImage = "url(" +"./img/"+ array[2] + ".png" + ")"
function images(){
    if (flag === array.length) {
        flag = 0
        // console.log(flag)
        document.getElementById('img').style.backgroundImage = "url(" +"./img/"+ array[flag] + ".png" + ")"
    }    
    else{
        document.getElementById('img').style.backgroundImage = "url(" +"./img/"+ array[flag] + ".png" + ")";
        // console.log(flag)
    }
}
// }
timer = setInterval(() => {
    flag++
    images()
}, 3000)