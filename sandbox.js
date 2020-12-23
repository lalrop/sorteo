const submit = document.querySelector('.sorteo');
const listaParticipantes = document.querySelector('.listaParticipantes');
const puestosLimite = document.querySelector('#puestosLimite');
const mae = document.querySelector("#araucoEstacion");
const mpa = document.querySelector("#mallPlazaAlameda");
const kioscos = document.querySelector("#kioscos")

let ganadores = {
    semana1: {
        palameda:[],
        mae:[]
    },
    semana2: {
        palameda:[],
        mae:[]
    },
    semana3: {
        palameda:[],
        mae:[]
    },
    semana4: {
        palameda:[],
        mae:[]
    },
};

// generador de numeros aleatorios

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//creandoun array con todos los participantes
addEventListener('submit', e =>{
    
    e.preventDefault();

    const arrayParticipantes = listaParticipantes.value.split(';')
    
    const results = []; 
    const arrayGanadores = [];
    // mientras sea menor al limite

    while (results.length < puestosLimite.value){
    // obtenemos un número aleatorio entre 0 y el numero de participantes
    const number = getRandomInt(arrayParticipantes.length-1);
        if (!results.includes(number)) {
            results.push(number)    
        }
    }
    
    // Transformamos el array results de numeros en un array con los nombres

    results.forEach(indice => {
        arrayGanadores.push(arrayParticipantes[indice])
    });

    // dividimos el array de Ganadores en los grupos respectivos a cada feria
    
    ganadores.semana1.mae = arrayGanadores.slice(0,6);
    ganadores.semana1.palameda=arrayGanadores.slice(6,9);
    ganadores.semana2.mae = arrayGanadores.slice(9,15);
    ganadores.semana2.palameda=arrayGanadores.slice(15,18);
    ganadores.semana3.mae = arrayGanadores.slice(18,24);
    ganadores.semana3.palameda=arrayGanadores.slice(24,27);
    ganadores.semana4.mae = arrayGanadores.slice(27,33);
    ganadores.semana4.palameda=arrayGanadores.slice(33,36);

   htmlAraucoEstacion = `
        <th scope="row">Mall Arauco Estacion</th>
        <td>${ganadores.semana1.mae}</td>
        <td>${ganadores.semana2.mae}</td>
        <td>${ganadores.semana3.mae}</td>
        <td>${ganadores.semana4.mae}</td>
   `
   htmlMallPlaza = `
        <th scope="row">Mall Plaza Alameda</th>
        <td>${ganadores.semana1.palameda}</td>
        <td>${ganadores.semana2.palameda}</td>
        <td>${ganadores.semana3.palameda}</td>
        <td>${ganadores.semana4.palameda}</td>
   `
   mae.innerHTML = htmlAraucoEstacion;
   mpa.innerHTML = htmlMallPlaza;
   
   
   
    console.log(results, ganadores.semana1.palameda, ganadores.semana1.mae,ganadores.semana2.palameda, ganadores.semana2.mae,ganadores.semana3.palameda, ganadores.semana3.mae, ganadores.semana4.palameda, ganadores.semana4.mae)

   
});





// for (const nombres in ganadores) {
//     ganadores[nombres].push('a');
    
// };
