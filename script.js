document.querySelector('video').playbackRate = 5.0;

let lastScrollPosition = 0;
const cert_container = document.querySelector('.cert');

window.addEventListener("scroll", function() {
    const green_div = document.querySelector(".green");
    const main_div = document.querySelector(".body");
    const scrollPosition = window.scrollY;

    if (scrollPosition > lastScrollPosition) {
        // Scrolling up (show the divs)
        green_div.style.bottom = "0"; // Show green div first
        setTimeout(() => {
            main_div.style.bottom = "0"; // Then show purple div
        }, 300);
    } 
    else {
        // Scrolling down (hide the divs)
        main_div.style.bottom = "-100vh";
        cert_container.style.top = "100%";

        setTimeout(() => {
            green_div.style.bottom = "-100vh"; 
        }, 300);
    }

    lastScrollPosition = scrollPosition; // Update last scroll position
});

const sign = document.querySelector('.sign');

sign.addEventListener('click', () => {
    sign.textContent = "";
    
    let index = Math.floor(Math.random()*5 + 1);
    sign.innerHTML = `<img src="images/sign${index}.png" alt="signature${index}">`
});

document.querySelector('.cert_hand').addEventListener('click', ()=>{
    document.querySelector('.cert').style.top = '0';
});

document.querySelector('.cert').addEventListener('click', event=> {
    event.target.style.top = '100%';
});