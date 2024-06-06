let nome = document.getElementById ("nome")
let resposta = document.getElementById ("resposta")

function apertar()
{
    resposta.innerHTML = "olá," + nome.value + " tudo bem?" 
    
}


let metros = document.getElementById("metros")
let rep = document.getElementById("rep")

function converter()
{
    rep.innerHTML = parseInt(metros.value) *100

}

var h = 0 
while(h <= 100)
    {
        console.log(h)
        h = h + 1 
    }

var t = 0 
while(t <= 50)
    {
        console.log(t)
        t = t + 5
    }

var f = 100
while(f >= 0)
        {
            console.log(f)
            f = f - 10
        }

        let soma1 = document.getElementById("soma1")
        let soma2 = document.getElementById("soma2")
        let ver = document.getElementById("ver")
        
        function conta()
        if(soma1.valeu <= soma2.valeu)
            {
                soma1.innerHTML ""
            }
        else
        {
            soma2.innerHTML ""
        }
       