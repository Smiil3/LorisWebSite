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
function generate() {
  let uniquechar = "";

  const randomchar =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 1; i < 6; i++) {
      uniquechar += randomchar.charAt(
          Math.random() * randomchar.length)
  }
  return uniquechar;
}

let codeCaptch = generate()
document.querySelector("label").textContent = `Écrivez ce code: "${codeCaptch}"`
let msgError = document.querySelector('.aLaide')
document.querySelector('form').addEventListener('submit', (e)=> {
  if(document.querySelector('#scales').checked === true) {
    let names = document.querySelector('#name').value
        let email = document.querySelector('#email').value
        let tel = document.querySelector('#tel').value
        let enquiry = document.querySelector('#enquiry').value
        let captche = document.querySelector('#captcha').value
        if (captche !== "" && email !== "" && enquiry != "" && names != "")  {
          formValues = { names, email, tel, enquiry }
          document.querySelector('#name').value= ""
          document.querySelector('#email').value= ""
          document.querySelector('#tel').value=  ""
          document.querySelector('#enquiry').value= ""
          document.querySelector('#captcha').value= ""
          if (captche === codeCaptch) {
            codeCaptch = generate()
          document.querySelector("label").textContent = `Écrivez ce code: "${codeCaptch}"`
            msgError.textContent="Le message a bien été envoyé!"
            fetch('http://localhost:3000/contact', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formValues)
            })
          } else {
            codeCaptch = generate()
          document.querySelector("label").textContent = `Écrivez ce code: "${codeCaptch}"`
            msgError.textContent="Le captcha est incorrect!"
          }


        } else {
          email === "" && enquiry === "" && names === ""
          ? (msgError.textContent = "Merci de renseigner tous les champs!")
          : email === ""
          ? (msgError.textContent = "Merci de renseigner un email!")
          : enquiry === ""
          ? (msgError.textContent = "Merci de renseigner un commentaire!")
          : names === ""
          ? (msgError.textContent = "Merci de renseigner un nom!")
          : msgError.textContent;
        }
  } else {
    msgError.textContent = "Merci de cocher les CGU!"
  }
})