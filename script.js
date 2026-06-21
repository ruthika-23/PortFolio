// ===============================
// Smooth Scroll Navigation
// ===============================


document.querySelectorAll("a[href^='#']").forEach(link => {

    link.addEventListener("click", function(e){

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});



// ===============================
// Navbar Blur Effect
// ===============================


window.addEventListener("scroll",()=>{


    const navbar = document.querySelector(".navbar");


    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(255,255,255,0.75)";

    }

    else{

        navbar.style.background =
        "rgba(255,255,255,0.45)";

    }


});



// ===============================
// Reveal Animation
// ===============================


const revealElements = document.querySelectorAll(
".section, .project-card, .skill-card, .education-card"
);



const revealObserver = new IntersectionObserver(

(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.style.opacity="1";

            entry.target.style.transform=
            "translateY(0)";


        }


    });


},

{

threshold:0.15

}

);




revealElements.forEach(element=>{


    element.style.opacity="0";

    element.style.transform=
    "translateY(40px)";

    element.style.transition=
    "all .8s ease";


    revealObserver.observe(element);


});




// ===============================
// Typing Effect Hero Title
// ===============================


const title = document.querySelector(".hero h2");


const text =
"Bridging Artificial Intelligence and Web Innovation";



let index = 0;



function typing(){


    if(index < text.length){


        title.textContent += text.charAt(index);


        index++;


        setTimeout(
            typing,
            60
        );


    }


}




title.textContent="";

typing();




// ===============================
// Project Card Glow Effect
// ===============================


const cards =
document.querySelectorAll(".project-card");



cards.forEach(card=>{


    card.addEventListener(
        "mousemove",
        (e)=>{


            const rect =
            card.getBoundingClientRect();


            const x =
            e.clientX - rect.left;


            const y =
            e.clientY - rect.top;



            card.style.background = `

            radial-gradient(

            circle at ${x}px ${y}px,

            rgba(99,102,241,.15),

            rgba(255,255,255,.5)

            )

            `;


        }

    );



    card.addEventListener(
        "mouseleave",
        ()=>{


            card.style.background =
            "rgba(255,255,255,.5)";


        }

    );


});




// ===============================
// Current Year Footer
// ===============================


const year =
document.querySelector("footer p");


year.innerHTML =
`© ${new Date().getFullYear()} B Ruthika | AI & Data Science Portfolio`;




// ===============================
// Dashboard Floating Animation
// ===============================


const dashboard =
document.querySelector(".dashboard-card");



let floating = true;



setInterval(()=>{


    if(floating){


        dashboard.style.transform =
        "translateY(-10px)";


        setTimeout(()=>{


            dashboard.style.transform =
            "translateY(0)";


        },700);


    }



},1500);




// ===============================
// Button Ripple Effect
// ===============================


document.querySelectorAll(
".btn-primary, .btn-secondary"
)
.forEach(button=>{


    button.addEventListener(
        "click",
        ()=>{


            button.style.transform =
            "scale(.95)";


            setTimeout(()=>{


                button.style.transform =
                "scale(1)";


            },150);


        }

    );


});