function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  if (html.classList.contains('light')){
    html.classList.remove('light')
    img.src="./assets/assets/avatar-Arthur.png"
    img.alt = "Foto de Arthur sorrindo, com óculos e camiseta listrada no modo escuro."

   }else {
    html.classList.add('light')
    img.src="./assets/assets/avatar-Arthur.png"
    img.alt = "Foto de Arthur sorrindo, com óculos e camiseta listrada no modo claro."
  }
  a
  
}