let section = document.querySelectorAll("section");
let navLinkss = document.querySelectorAll(".navl li");
let navLinks = document.getElementById("navbar");
for (let link = 0; link < navLinkss.length; link++) {
    // navLinkss[link].classList.remove("active");
    navLinkss[link].addEventListener("click",function () {
       for (let linkk = 0; linkk < navLinkss.length; linkk++) {
        navLinkss[linkk].classList.remove("active");;

       }
        console.log(this.classList.add("active"))
    })
    
}


function showMenu(){
    navbar.style.right = "0";
}
function hideMenu(){
    navbar.style.right = "-200px";
}


/*
window.onscroll = () =>{
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        if(top >= offset && top < offset+height){
            navLinkss.forEach(link => {
                link.classList.remove("active");
                console.log(this)
                document.querySelector(".navl a[href*="+id+"]").classList.add("active");
            });
        };
    });
};
*/