function* idPar (){
    let id = 0;
    while (true){
        id +=2
        yield id
    }
}

let par = idPar();





