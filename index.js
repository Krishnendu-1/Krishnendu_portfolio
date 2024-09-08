

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

gsap.registerPlugin(ScrollTrigger);
var documents=document.querySelectorAll("#page2");
// documents.forEach((char) => {
//     const text = new SplitType(char,{type:"lines"})
//     gsap.from(text.lines,{
//             scrollTrigger: {
//                 trigger: char,
//                 start: "top center",
//                 end: "bottom center",
//                 scrub: true,
//                 markers: false,
                
//             },
        
          
//         opacity: 0.1,
//         stagger:0.2})
//       })
