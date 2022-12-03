
//주메뉴 클릭
const group = document.querySelectorAll(".gnb >dl >a");

const View = document.querySelectorAll("#header>.gnb>dl.View")
const Learn = document.querySelectorAll("#header>.gnb>dl.Learn")
const Gallery = document.querySelectorAll("#header>.gnb>dl.Gallery")


for(let k=0;k<group.length;k++){
    group[k].addEventListener('click',e=>{
        e.preventDefault();
        group.forEach(item=>{
            item.classList.remove('on');
        });
        e.currentTarget.classList.add('on');

        let className = e.currentTarget.parentElement.getAttribute("class");
        listAll.forEach(item => {
            item.style.display = 'none';
        });
 
        switch(className){
            case 'View' :
                ent.forEach(item => {
                    item.style.display = 'block';
                });
                break;
            case 'Learn' :
                ent.forEach(item => {
                    item.style.display = 'block';
                });
                break;
            case 'Gallery' :
                shop.forEach(item => {
                    item.style.display = 'block';
                });
                break;
        }
    })
}

//scroll content1
let devHeight = window.innerHeight;

window.addEventListener("resize", () => {
    devHeight = window.innerHeight;
})

let contents = document.querySelectorAll("#container> .content1> section> ul >li");
for (let i=0; i<contents.length; i++){
    contents[i].style.height = devHeight + "px";
}
/*----------------*/
let sections = document.querySelectorAll("#container> .content1 > section > ul >li>a");

    let activation = (index,list) => {
        for(let el of list){
            el.classList.remove("on");
        }
        list[index].classList.add("on");
    } 
    sections.addEventListener("scroll", e => {
    let scroll = document.querySelector("html").scrollTop;

    for(let i=0; i<sections.length; i++){
    if(scroll >= (i+devHeight) && scroll < (i+1)*(devHeight)){
        activation(i,sections);
    } 
}
    for(let i=0; i<sections.length; i++){ 
        contents[i].addEventListener('wheel', e => {
            if (e.wheelDelta > 0) {//scroll up       
                let prev = e.currentTarget.previousElementsSibling.offsetTop;
                console.log(prev);
                window.scroll({
                top:prev,
                left:0,
                behavior:"smooth"
            });
           }else if (e.wheelDelta < 0) { //scroll down
            let next = e.currentTarget.nextElementsSibling.offsetTop;
            console.log(next);
            window.scroll({
                    top:next,
                    left:0,
                    behavior:"smooth"
                })
            }
        });
    }  
});//scroll content1

//scroll content2