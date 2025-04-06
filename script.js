function loco(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
loco()

function cursor(){
    var crsr = document.querySelector("#cursor")
    var main = document.querySelector("#main")
    document.addEventListener("mousemove",function(dets){
        crsr.style.left = dets.x +20+"px"
        crsr.style.top = dets.y+20+"px"
    })
}
cursor()


gsap.from("#page1 h1,#page1 h2", {
    y: 10,
    rotate: -10,
    opacity: 0,
    delay: 0.3,
    duration: 0.7
})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        start:"10% top",
        scrub:1,
        end:"50% top"
    }
})
tl.to("#page1 h1",{
    x:-100,
},"ayoo")
tl.to("#page1 h2",{
    x:100,
},"ayoo")
tl.to("#page1 video",{
    width:"90%",

},"ayoo")

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        start:"100% top",
        scrub:1,
        end:"130% top"
    }
})

tl2.to("#main",{
    backgroundColor:"white"
})

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        start:"80% top",
        end:"100% top",
        scrub:1,
    }
})

tl3.to("#main",{
    backgroundColor:"#0F0D0D"
})

var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    var crsr = document.querySelector("#cursor")
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        crsr.style.width = "470px"
        crsr.style.height = "370px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        crsr.style.width = "20px"
        crsr.style.height = "20px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })
})
var ahh = document.querySelectorAll("#nav h4")
var purp = document.querySelector("#purple")
var purpm = document.querySelector("#purple h1")
var navv=document.querySelector("#nav")
ahh.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        purp.style.display = "block" 
        purp.style.opacity="1"
        purpm.textContent = elem.textContent+elem.textContent+elem.textContent+elem.textContent+elem.textContent+elem.textContent+elem.textContent+elem.textContent+elem.textContent+elem.textContent+elem.textContent
    })
    navv.addEventListener("mouseleave",function(){
        purp.style.display = "none"
        purp.style.opacity="0"
        purpmp.textContent = ahh.textContent
    })
})