// Ripple effect 
$('#home').ripples({
	resolution: 512,
	dropRadius: 20,
	perturbance: 0.04,
});
$('#about').ripples({
	resolution: 512,
	dropRadius: 20,
	perturbance: 0.04,
});
//-----------------------------------------------------------------------------------------
var typed = new Typed("#auto-type" , {
		strings : ["Hola!" , "I am Tashvik" , "I'm a Student," , "I'm a Coder &" , "I'm a Web Developer" , "And this is my Portfolio"],
		typeSpeed : 150,
		backSpeed : 150,
		loop : true
	})

//---------------------------------------------------

// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let interval = null;
// document.querySelector("h1").onmouseover = event => {  
//   let iteration = 0;
//   clearInterval(interval);
//   interval = setInterval(() => {
//     event.target.innerText = event.target.innerText
//       .split("")
//       .map((letter, index) => {
//         if(index < iteration) {
//           return event.target.dataset.value[index];
//         }
//         return letters[Math.floor(Math.random() * 26)]
//       })
//       .join("");
//     if(iteration >= event.target.dataset.value.length){ 
//       clearInterval(interval);
//     }
//     iteration += 1 / 3;
//   }, 30);
// }
 
 
 	

