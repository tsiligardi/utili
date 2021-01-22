//Funzioni utili sugli array
const arr=[1,2,3,4,22,6]

const max=Math.max(...arr)//restituisce il massimo
console.log(max)
arr.forEach(element => {
    console.log(element)
});

const somma= arr.reduce((acc,e)=>{
    return acc+=e //acc è l'accumulator, e l'elemento della lista
},0 /*valore iniziale dell'accumulator*/)
console.log(somma)
const arr1=arr.map(e=>{ //applica una funzione ad ogni elemento dell'array, creando un nuovo array coi dati modificati
    return e+4
})

const arrpari=arr.filter((e,i,a)=>{ //crea un nuovo array filtrando l
    if (e%2===0){ return e}
})
