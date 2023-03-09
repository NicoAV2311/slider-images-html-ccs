const panels = document.querySelectorAll('.panel');

console.log(panels);

panels.forEach((panel) => {
    panel.addEventListener('click', ()=>{
        console.log('TE estoy escuchando');
        removeActiveClass();
        panel.classList.add('active');
    });
});

function removeActiveClass(){
    panels.forEach(panel =>{
        panel.classList.remove('active');
        })
}