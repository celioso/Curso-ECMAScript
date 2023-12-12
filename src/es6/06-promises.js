const anotherFuncion = () => {
    return new Promise((resolve, rejecy)  => {
        if (false) {
            resolve("Hey!!");
        }
        else {
            rejecy("Whooooops!");
        }
    })
}

anotherFuncion()
    .then(response => console.log(response))
    .catch(err => console.log(err));