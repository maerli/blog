const e = React.createElement;


let file = location.hash.slice(2);
let p = file.split("-");

function div(prop, ...c){
   return e("div",prop, c);
}

function App(){

const [winner1,setWinner1] = React.useState("aguardando...");
const [winner2,setWinner2] = React.useState("aguardando...");

React.useEffect(()=>{

let url = "https://cdn.jsdelivr.net/gh/maerli/blog@latest/";

require(url + "list.js", function(){
    setWinner1(winner1_);
    setWinner2(winner2_);
})
})

function click(msg){
    location.href = "https://api.whatsapp.com/send?phone=5588981628528&text="+msg+"%0A"
}

 return e("div", {className:"card", style:{textAlign:"justify",padding:10, backgroundColor:"rgba(0,0,20,0.01)"}}, 
 div({style:{}}, e("h1", null, "SORTEIO : 15 DE AGOSTO")),
 
 div({className:"card"},
 div({className:"card-body"},
 
 div(null, e("strong", null,"🏆 Vencedor 85 diamantes : ",e("span", {style:{color:"green"}}, winner1))), 
 div( null, e("strong", null, "🏆 Vencedor 140 diamantes : ", winner2)))),
 
 e("h2",null, p[1]? ("Bem vindo, "+ p[1].toUpperCase()):""),
 div(null, e("ul", null, ["sorteio ocorrerá em 15 de agosto às 12:00.", "prêmios: 85 + 10% diamantes free fire e 140 +10% diamantes free fire."].map(a=> e("li", null, a)) )), 
 
 div(null, e("strong", null, "CONDIÇÕES"),
 e("p", null, "1 - Participará do sorteio o cliente que não tiver pendências financeiras com o revendedor(maerli)."),
 e("p",null, "2 - O cliente que adquirir o pacote de 285 diamantes participará do sorteio de 85 + 10% diamantes free fire."),
 e("p", null, "3 - O cliente que adquirir o pacote de 610 diamantes participará do sorteio de 140 + 10% diamantes free fire"), 
 e("strong", null, "RESGATE"),
 e("p", null, "1 - O resgate será feito de forma automática, ou seja, o vencedor deve esperar a recarga em até 10 minutos após o sorteio."),
 e("p", null, "2 - O resgate será efetuado 10 minutos após a realização do sorteio."),
 
 e("p", null, "3 - O resgate necessariamente será feito no ID informado no momento da compra dos pacotes de diamantes."),
 div(null, 
 e("button", {onClick:_=>click("Oiii maerli"),className:"btn btn-success"}, "Fale com maerli"),
 e("button", {onClick:_=> click("Quero Comprar diamantes free fire"),className:"btn btn-primary"}, "comprar diamantes"),
 e("hr", null)),
 
 div({style:{fontSize:11, textAlign:"center"}},e("p",null, div(null, "Sobre Free Fire"), " O Free Fire é um jogo mobile de tiro estilo Battle Royale. Cada jogo de 10 minutos o coloca em uma ilha remota onde você é joga contra 49 outros jogadores, lutando pela sobrevivência. Os jogadores podem escolher seu ponto de partida usando seu pára-quedas e permanecer na zona segura pelo máximo de tempo possível. Dirija veículos para explorar o extenso mapa. Esconda-se em trincheiras ou torne-se invisível protegendo-se sob a grama. Através de emboscadas e armadilhas, há apenas um objetivo: sobreviver e se tornar o melhor de todos os jogadores."))
 
 )
);
  
}

ReactDOM.render( e(App), document.body);
