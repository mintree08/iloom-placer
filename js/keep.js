/* 주메뉴 */
var gnbMenu = document.querySelectorAll(".gnb>dl>a");
var header = document.querySelector("#header");

for(var i=0; i<gnbMenu.length;i++){
    gnbMenu[i].addEventListener('mouseover',(e)=> {
        e.currentTarget.classList.add('ov');
        var ht = e.currentTarget.children[1].offsetHeight;
        header.style.height = 65 + ht + 'px';
    });
    gnbMenu[i].addEventListener('mouseout', (e) =>{
        e.currentTarget.classList.remove('ov');
        header.style.height = '65px';
    });

    gnbMenu[i].children[0].addEventListener('focus',(e) =>{
        e.currentTarget.parentElement.classList.add('ov');
        var ht = e.currentTarget.nextElementSibling.offsetHeight;
        header.style.height = 65 + ht + 'px';
    });
    gnbMenu[i].children[0].addEventListener('blur', (e) =>{
        e.currentTarget.parentElement.classList.remove('ov');
        header.style.height = '65px';
    });
}

//scroll content1
let devHeight = window.innerHeight;

window.addEventListener("resize", () => {
    devHeight = window.innerHeight;
})

let ul = document.querySelectorAll("#container> .content1> section >ul ");
for (let i=0; i<ul.length; i++){
    ul[i].style.height = devHeight + "px";
}
/*----------------*/




let sections = document.querySelectorAll("#container> .content1> section >ul");

    let activation = (index,list) => {
        for(let el of list){
            el.classList.remove("on");
        }
        list[index].classList.add("on");
    } 
let content1 = document.querySelectorAll("#container> .content1> section >ul >li")

content1.addEventListener("scroll", e => {
    let scroll = document.querySelector("html").scrollTop;

    for(let i=0; i<sections.length; i++){
    if(scroll >= (i+devHeight) && scroll < (i+1)*(devHeight)){
        activation(i,sections);
    } 
}
    for(let i=0; i<sections.length; i++){ 
        ul[i].addEventListener('wheel', e => {
            if (e.wheelDelta > 0) {//scroll up       
                let prev = e.currentTarget.previousElementsSibling.offsetTop;
                console.log(prev);
                content1.scroll({
                top:prev,
                left:0,
                behavior:"smooth"
            });
           }else if (e.wheelDelta < 0) { //scroll down
            let next = e.currentTarget.nextElementsSibling.offsetTop;
            console.log(next);
            content1.scroll({
                    top:next,
                    left:0,
                    behavior:"smooth"
                })
            }
        });
    }  
});//scroll content1


// const gnbClilck = document.querySelectorAll(".gnb> ul ");
// const content1 = document.querySelectorAll(" #container>.content1");
// const content2 = document.querySelectorAll(" #container>.content2");
// const content3 = document.querySelectorAll(" #container>.content3");

// const firstTop = content1.offsetTop
// const secondTop = content2.offsetTop
// const thirdTop = content3.offsetTop

// gnbClilck[0].onclick = function(){
//     window.scroll({top:firstTop, behavior: 'smooth'})
// }
// gnbClilck[1].onclick = function(){
//     window.scroll({top:secondTop, behavior: 'smooth'})
// }
// gnbClilck[2].onclick = function(){
//     window.scroll({top:thirdTop, behavior: 'smooth'})
// }