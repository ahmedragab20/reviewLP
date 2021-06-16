// General Variables
const toTop = document.querySelector('.to-top'); // To Top Button
//to top button
window.addEventListener("scroll", ()=>{
    if (window.pageYOffset > 100){
        toTop.classList.add('go');
    }
    else{
        toTop.classList.remove('go');
    }
});

//the functions:

// start working on the nav
function nav() {
    // declear the variables
    const navigation = document.getElementById('navList'); // the nav var
    const sections   = document.querySelectorAll('section');// the variables of the sections

    // the navbar function
    const navbar = () => {
        let theNav = '';
        sections.forEach(section => { // to loop over EACH section in the page
            const sectionID = section.id;
            const sectionDataNav = section.dataset.nav;
            theNav += `<li><a class="navList" href="#${sectionID}">${sectionDataNav}</a></li>`;
        });
        // to append the elements to the nav
        navigation.innerHTML = theNav;
    };
    navbar();
    // End the navbar function

    /****** Start Working on The Active Class And it Effects ******/
    const activeOffset = (section) => {
        return Math.floor(section.getBoundingClientRect().top); // to return the size of the elements
    };
    const removeActive = (section) => {
        section.classList.remove('active');
    };
    const addActiveClass = (conditional, section) => {
        if(conditional){
            section.classList.add('active');
        };
    };
    const sectionActivation = () => {
        sections.forEach(section => {
            const elementOffset = activeOffset(section);
            inviewport = () => elementOffset < 150 && elementOffset >= -150;
            removeActive(section);
            addActiveClass(inviewport(),section);
        });
    };
    window.addEventListener('scroll' ,sectionActivation);
    /******** End the Active class work ********/
}
nav();
/* End the Nav Function */

/****** Start Working on Smooth scroll function ******/
function smoothScroll() {
    //declear the page sections
    const links = document.querySelectorAll("section a");
 
    for (const link of links) {
    link.addEventListener("click", clickHandler);
    }
    
    function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    
    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
    });
    }
}
smoothScroll();
/****** End Working on Smooth scroll function ******/