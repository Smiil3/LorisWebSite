document.querySelector('.arrow').addEventListener('click', (e)=> {
    e.preventDefault()
    const id = document.querySelector('.webspace')
    id.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
})

document.querySelector('.burger').addEventListener('click', ()=> {
    document.querySelector('.body').classList.toggle('hidden')
    document.querySelector('.menuBurger').classList.toggle('hidden')
})
let list1 = document.querySelectorAll('.eliottBurger')

for (let i = 0; i< list1.length; i++) {
    list1[i].addEventListener("click", ()=> {
        document.querySelector('.body').classList.toggle('hidden')
        document.querySelector('.menuBurger').classList.toggle('hidden')
    })
}