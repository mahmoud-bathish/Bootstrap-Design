let mixer = mixitup(".portfolio-gallery",{
    selectors:{
        target:".prt-card",
    },
    animation:{
        duration:500,
    }
})

let filter = document.getElementById('fil');
let btns = document.querySelectorAll('#fil li')
console.log(btns);

    filter.addEventListener('click',(e)=>{
        for (let i = 0; i < btns.length; i++) {
            btns[i].classList.remove("active");            
        }
        // btns[i].classList.remove('active')
        e.target.classList.toggle("active");
        
    })
