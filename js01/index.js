




 
/* let box = document.qureSelector(`.box`) */
//let body = document.body
/* let boxes = document.qureSelectorAll(`#imposter`)
 */
 /* box.onclick = () => {
    //console.log(`click`); */
 //}
// box.ondblclick = () => {
    /* console.log(`doble click`);
// }
 //box.onmouseenter = () => {
    console.log(`entered`);
 //}
//box.onmouseleave = () =>{
   //}
box.onmousemove = () =>{
    console.log(`movig...`);
}
body.onscroll = () =>{
    console.log(`scroll...`);
}

/* console.log(boxes); */

/* let on = document.querySelector(`one`)
let off = document.querySelector(`two`)
 */    


/* button.onclick = () => {

    if(button.classList.contains('blue')) 
    { button.classList.remove('blue')
    } else {
    button.classList.add('blue')
    }
}
 */



/* 
let numContainer = document.getElementById("num");
let value = 0;

let btnInc = document.querySelector(".inc");
let btnDec = document.querySelector(".dec");
let btnReset = document.querySelector(".reset");
let btnRam = document.querySelector(".random")

btnInc.addEventListener("click", () => {
  value++ 
  numContainer.textContent = value;
});

btnDec.addEventListener("click", () => {
  value--;
  numContainer.textContent = value;
});

btnReset.addEventListener("click", () => { 
  value = 0;
  numContainer.textContent = value;
});

btnRam.addEventListener(`click` , () => {
    value = Math.random()
    numContainer.textContent = value
})
 */






/* 
let inp = document.querySelector(`input`)
let btn = document.querySelector(`button`)




btn.onclick= () => {
  if( inp.getAttribute(`type`) === "text"){
    inp.setAttribute(`type` , `password`)
    btn.innerHTML = "🙈" 
  }else{
    inp.setAttribute(`type` , `text`)
    btn.innerHTML= "🙊"
  }
}



 */


/* 
let btns = document.querySelectorAll('button')

btns.forEach((btn) => {
  btn.onmouseover = () =>{
    console.log( '', btn.innerText);
    document.body.style.background = btn.innerText
  }
});


 */     

/* 
btn.onclick= () => {
  if( inp.getAttribute(`type`) === ){
    inp.setAttribute(`type` , `password`)
    btn.innerHTML = ">" 
  }else{
    inp.setAttribute(`type` , `text`)
    btn.innerHTML= ">"
  }
}

*/
/* 
let img = document.querySelector(`img`)


let button = document.querySelector(`#a`)
let dblbutton = document.querySelector(`#b`)

button.onclick = () => {
    img.src = `img/pk.png` 
    
    }
    dblbutton.onclick = () => {
        img.src = `img/pk2.png`
    }

 */

/* 
const img = document.querySelector('img')

    const images = {
      titan: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702708",
      blue: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845699311",
      white: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-whitetitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845706590",
      black: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-blacktitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845694698",
  }


  
  btns.forEach(btn => {
    btn.onclick =() => {
      let  color = btn.innerText
      img.setAttribute('src' , images(color))
    }
    
  }); */
  
  
 /* 
  button.forEach(btn => {
    btn.onclick =() => {
      let  color = btn.innerText
      img.setAttribute('src' , images(color))
    }
    
  });
 */

  let button= document.getElementsByClassName("accordion");
let i

for (i = 0; i < acc.length; i++) {
  button[i].addEventListener("click", function() {

    this.classList.toggle("active");

    let panel = this.nextElementSibling;

    if (panel.style.display === "block") {

      panel.style.display = "none";
    } else {
      
      panel.style.display = "block";
    }
  });
}





  