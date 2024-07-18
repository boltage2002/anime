var crsr= document.querySelector("#cursor")
var blur= document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    blur.style.left=dets.x-150+"px"
    blur.style.top=dets.y-150+"px"
})







gsap.to("#nav",{
    backgroundColor:"#000000ec",
    duratioin:0.5,
    height:"90px",
    scrollTrigger:{
        trigger:"#nav",
        scroll:"body",
        //markers: true,
        start:"top -15%",
        end :"top -16",
        scrub:1

    }

})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }

})