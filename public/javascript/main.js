let arrow = document.querySelectorAll(".container-image-arrow")
let image = document.querySelector(".image-portrait") 
 
for(let i=0;i < arrow.length; i++){
    arrow[i].addEventListener("click",() => {
        if(i===1){
            if(image.getAttribute("src") === 'img/loris-1.png'){
                    image.setAttribute("src",'img/loris-3.png');
            }
            else if(image.getAttribute("src") === 'img/loris-2.png'){
                    image.setAttribute("src",'img/loris-1.png');
            }
            else if(image.getAttribute("src") === 'img/loris-3.png'){
                    image.setAttribute("src",'img/loris-2.png');
            }}
        else{
            if(image.getAttribute("src") === 'img/loris-1.png'){
                    image.setAttribute("src",'img/loris-2.png');
            }
            else if(image.getAttribute("src") === 'img/loris-2.png'){
                    image.setAttribute("src",'img/loris-3.png');
            }
            else if(image.getAttribute("src") === 'img/loris-3.png'){
                    image.setAttribute("src", 'img/loris-1.png');
            }
        }
})}