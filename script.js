function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  if (html.classList.contains('light')){
    html.classList.remove('light')
    img.src=""
    img.alt = "Modo escuro."

   }else {
    html.classList.add('light')
    img.src=""
    img.alt = "Modo claro."
  }
  
  
}