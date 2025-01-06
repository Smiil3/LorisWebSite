let arrow1 = document.querySelectorAll(".arrow-review")
let image1 = document.querySelectorAll(".modif")

for(let i=0;i < arrow1.length; i++){
    arrow1[i].addEventListener("click",() => {
            if(image1[0].getAttribute("src") === 'img/1.png'){
                image1[0].setAttribute("src",'img/5.png')
                image1[1].setAttribute("src",'img/6.png')
                image1[2].setAttribute("src",'img/7.png')
                image1[3].setAttribute("src",'img/8.png')
            }else{
                image1[0].setAttribute("src",'img/1.png')
                image1[1].setAttribute("src",'img/2.png')
                image1[2].setAttribute("src",'img/3.png')
                image1[3].setAttribute("src",'img/4.png')
            }
        }
    )}