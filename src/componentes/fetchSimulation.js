const fetchSimulation = (dataBase, time) => {
    return new Promise((res, rej) => {
        setTimeout(()=> {
            res(dataBase)
            rej(new Error("No hubo conexion"))
        }, time)
    });
}

export default fetchSimulation