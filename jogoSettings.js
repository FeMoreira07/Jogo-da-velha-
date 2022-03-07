var celulas = document.querySelectorAll(".celula")
var jogador_X = "X"
var jogador_O = "O"
var checarTurno = true 

var combinações = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]


document.addEventListener("click", (event) =>{
  if(event.target.matches(".celula")){
    jogar(event.target.id)
    
  }
})


 function jogar(id){
  var celula = document.getElementById(id)
  var turno = checarTurno ? jogador_X : jogador_O
  celula.textContent = turno
  celula.classList.add(turno);
  checarTurno = !checarTurno
  checarVencedor(turno)
} 



function checarVencedor(turno){
 var vencedor = combinações.some((comb)=>{
    return comb.every((index)=>{
      return celulas[index].classList.contains(turno)
    })
  })

  if(vencedor){
    FinalizarJogo(turno)
  } else {
    FinalizarJogo()
  }
}


function FinalizarJogo(turno = null){
  if(turno){
    alert("O jogador " + turno + " ganhou")
    location.reload()
  } else if (ChecarEmpate()) {
    alert("Empatou")
    location.reload()
  }
}


function ChecarEmpate(){
  let x = 0;
  let o = 0;

  for (index in celulas) {
    if (!isNaN(index)){
      if (celulas[index].classList.contains(jogador_X)){
      x++
    } else if (celulas[index].classList.contains(jogador_O)){
      o++
    }
    }
    
  }
  
  return x + o == 9 ? true : false
}

