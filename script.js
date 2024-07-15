
function navAnimation() {
    var nav = document.querySelector("nav");

    nav.addEventListener("mouseenter", function() {
        let tl = gsap.timeline();

        tl.to("#nav-bottom", {
            height: "21vh",
            duration: 0.5,
            ease: "power1.inOut"
        });

        tl.set("#nav-part2 h5", {
            display: "block"
        });

        tl.to("#nav-part2 h5", { 
            opacity: 1,
            duration: 0.3
        });

        tl.to("#nav-part2 h5 span", { 
            y: 0,
            stagger: {
                amount: 0.6
            },
            duration: 0.5,
            ease: "power1.inOut"
        }, "-=0.3");
    });

    nav.addEventListener("mouseleave", function() {
        let tl = gsap.timeline();

        tl.to("#nav-part2 h5 span", { 
            y: 25,
            stagger: {
                amount: 0.2
            },
            duration: 0.3,
            ease: "power1.inOut"
        });

        tl.to("#nav-part2 h5", { 
            opacity: 0,
            duration: 0.2
        }, "-=0.3");

        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.5,
            ease: "power1.inOut"
        }, "-=0.2");

        tl.set("#nav-part2 h5", {
            display: "none"
        });
    });
}



function page2Animation() {
    var rightElems = document.querySelectorAll(".right-elem")

    rightElems.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {




            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })
        elem.addEventListener("mousemove", function (dets) {

            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 90,
                y: dets.y - elem.getBoundingClientRect().y - 215
            })
        })
    })
}

function topButton() {
    var navButton = document.querySelector("nav button");

    navButton.addEventListener("mouseenter", function() {
        gsap.to(navButton, {
            duration: 0.3,
            scale: 1.1,
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)"
        });
    });

    navButton.addEventListener("mouseleave", function() {
        gsap.to(navButton, {
            duration: 0.3,
            scale: 1,
            boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)"
        });
    });
}


function page3VideoAnimation() {
    var page3Center = document.querySelector(".page3-center")
    var video = document.querySelector("#page3 video")

    page3Center.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0
        })
    })
    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px"
        })
    })

}


var sections = document.querySelectorAll(".sec-right");
sections.forEach(function (elem) {
    var video = elem.querySelector("video");
    if (video) {
        elem.addEventListener("mouseenter", function () {
            video.style.opacity = 1;
            video.play();
        });
        elem.addEventListener("mouseleave", function () {
            video.style.opacity = 0;
            video.pause();
        });
    }
});


gsap.to("#bottom7-p2 h4",{
    x:150,
    duration: 1,
    stagger:{
        amount:-0.6
    },
    scrollTrigger:{
        trigger:"#bottom7-p2",
        scroller:"body",
        marker:true,
        start:"top 65%",
        end:"top -114%",
        scrub: true,

    }
})

gsap.to("#bottom7-p3 h4",{
    x:150,
    duration: 1.3,
    stagger:{
        amount:-0.6
    },
    scrollTrigger:{
        trigger:"#bottom7-p2",
        scroller:"body",
        marker:true,
        start:"top 65%",
        end:"top -114%",
        scrub: true,

    }
})

gsap.to("#bottom7-p4 h4",{
    x:150,
    duration: 1.5,
    stagger:{
        amount:-0.6
    },
    scrollTrigger:{
        trigger:"#bottom7-p2",
        scroller:"body",
        marker:true,
        start:"top 65%",
        end:"top -114%",
        scrub: true,

    }
})


function loadingAnimation() {

    var tl = gsap.timeline()
    tl.from("#page1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from("#page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from("#page1 h1, #page1 p, #page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
}
loadingAnimation()
topButton();
navAnimation();
page2Animation();
page3VideoAnimation();