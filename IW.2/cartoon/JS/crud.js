function bd() {
    let data = [
                {id:1, nome:"John Wick", login:"wick", senha:"1234", email:"wick@ig.com"}, // 0
                {id:2, nome:"Matheus Rodrigues", login:"Lux", senha:"W0W_master", email:"fanclub_do_faustao@gmail.com"}, // 1
                {id:3, nome:"faustão zão", login:"big-faust", senha:"olo_komeu", email:"faustao555@gmail.com"}, // 2
               ]
            
    let json = JSON.stringify(data)

    localStorage.setItem("meu_banco", json)

    return json
}

function adicionar() {
    let bd = JSON.parse (localStorage.getItem("meu_banco"))


    let ids = Date.now()
    let nome = document.querySelector("#nome").value
    let lg = document.querySelector("#login").value
    let sn = document.querySelector("#senha").value
    let mail = document.querySelector("#e-mail").value

    let cad = {id:ids, nome:nome, login:lg, senha:sn, email:mail}
    bd.push(cad)

    let json = json.stringify(bd)
    localStorage.setItem("meu_banco", json)


}

//const dados = bd()

//console.log(dados)
