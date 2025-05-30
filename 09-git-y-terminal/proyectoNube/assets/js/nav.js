window.addEventListener("DOMContentLoaded", (event) => {

    let nav = document.querySelector(".layout__header");

    window.addEventListener("scroll", ()=>{
        if(document.documentElement.scrollTop > 200){
            nav.classList.add("layout__header--fixed");
        } else{
            nav.classList.remove("layout__header--fixed");
        }
    })
    
});