
function  climaTempo(){

    const climaInput = document.getElementById('climaInput').value;


    resultado.innerHTML = '';

    

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${climaInput}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`;


    fetch(url)
        .then(response => response.json())
        .then(data => {

            console.log(data)
            if (data.erro) {
                resultado.innerHTML = '<p>Cidade não encontrada</p>';
            } else {
                resultado.innerHTML = `
                
                <p>Vento:  ${data.wind.speed}km/h </p>
                <p>Clima: ${data.weather[0].main}</p>
                <p>Umidade:  ${data.main.humidity}% </p>
                <p>Temperatura Mínima:  ${data.main.temp_min}° </p>
                <p>Temperatura Manima:  ${data.main.temp_max}° </p>
               
                `;
            }
        })



}

function buscaCidade(){
    
    const buscaCidade = document.getElementById('climaInput').value;
    
    resultado.innerHTML = '';
    
    //window open  = abrir uma guia na tela   
    window.open(`https://earth.google.com/web/search/${buscaCidade} `, '_blank');

        }
   




        








            


