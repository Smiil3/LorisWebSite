let el = document.querySelectorAll('.ele')
let overlay = document.querySelector('.overlay')
let pageServ = document.querySelector('.pageServices')
let cross = document.querySelectorAll(".cross-x")
overlay.addEventListener("click", ()=>{
    document.querySelector('.containerYellow').classList.toggle('hidden')
    document.querySelector('.pageServices').classList.toggle('hidden')
    document.querySelector('.overlay').classList.toggle('hidden')
    for (let a=0; a < el.length;a++) {
        document.querySelector(`.container${a}`).classList.add('hidden')
    }
})

for (let i = 0; i < cross.length; i++) {
    cross[i].addEventListener("click",()=>{
        document.querySelector('.containerYellow').classList.toggle('hidden')
        document.querySelector('.pageServices').classList.toggle('hidden')
        document.querySelector('.overlay').classList.toggle('hidden')
        for (let a=0; a < el.length;a++) {
            document.querySelector(`.container${a}`).classList.add('hidden')
        }
    })
}

for (let i=0; i < el.length;i++) {
    el[i].addEventListener("click", ()=>{
        document.querySelector('.containerYellow').classList.toggle('hidden')
        document.querySelector('.pageServices').classList.toggle('hidden')
        document.querySelector('.overlay').classList.toggle('hidden')
        document.querySelector(`.container${i}`).classList.toggle('hidden')

    })
}
