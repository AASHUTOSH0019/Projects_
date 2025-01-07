// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector("body");
// buttons.forEach(function(button){
//     button.addEventListener('click', function(e){
//         console.log(e.target);
//         if (e.target.id === 'grey'){
//             body.style.backgroundColor = 'grey';
//         }
//         if (e.target.id === 'Yellow'){
//             body.style.backgroundColor = 'yellow';
//         }
//         if (e.target.id === 'Red'){
//             body.style.backgroundColor = 'red';
//         }
//         if (e.target.id === 'Blue'){
//             body.style.backgroundColor = 'blue';
//         }
//     })
// })
const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id

        }
        if(e.target.id === 'Yellow'){
            body.style.backgroundColor = e.target.id

        }
        if(e.target.id === 'Red'){
            body.style.backgroundColor = e.target.id

        }
        if(e.target.id === 'Blue'){
            body.style.backgroundColor = e.target.id

        }
    })
})