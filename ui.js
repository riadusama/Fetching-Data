



const card = (data) => {
    const body = document.querySelector('body')
    const card = document.createElement("div")
    card.classList.add("card")
    card.innerHTML=`
    <img src="${data[0].flags.png}">
    <h1>${data[0].name.common}</h1>
    <h3>Capital is: ${data[0].capital[0]}</h3>
    <p>Population : ${data[0].population}</p>
    `;
    
    body.appendChild(card)
    
}

export{card}

