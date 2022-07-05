import fetch from "node-fetch";

fetch("https://spd-classif.gate.petersburg.ru/api/v2/datasets/139/versions/latest/data/569/")
.then(res => {
    if(res.ok){
        return res.json()
    } else {
        console.log("ERROR")
        throw Error
    }
})
.then(data =>
    document.getElementById('root').innerHTML =
        JSON.stringify(data)
).catch(error =>{
    console.log(error)
})