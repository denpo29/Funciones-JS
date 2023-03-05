function saludo () {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
        resolve (console.log("Hola soy una promesa"))}, 5000)
    })  
    }

saludo()


