e = React.createElement;


x = new Date("2005/07/27");
x.getTime();
x.setHours(16);
x.setMinutes(08);

function div(op, ...c){
    return e("div", op, c);
}

function b(c){
  return e("strong", null, c);
}

y = new Date();
x.getFullYear()-y.getFullYear();

function App(){

let [amor,setAmor] = React.useState("Clique em min e descubrirá quem é o amor da sua vida");

let [seg,setSeg] = React.useState(y.getTime() - x.getTime());

React.useEffect(function(){
  setInterval(function(){
      setSeg(new Date().getTime() - x.getTime());
  },1000);
},[]);


let nome = div( null, e("h1", null, "Oiiiii  ", b("Stefany")));

let nas = div(null, "No ", "27 de julho de 2005 às 16:08:00 nasceu a melhor pessoa do mundo!");

let da = y.getFullYear()-x.getFullYear();

let hoje = div(null, "Hoje fazem ", parseInt(seg/1000,10),  " segundos desde seu nascimento");


let q = div(null , div(null, b("Qualidades")),e("ul", null, 
["linda","bonita","maravilhosa","inteligente",
"única","maravilhinda","carinhosa","eu já disse linda?","cheirosa"


].map(k=>e("li", {key:k}, k)))
);


let p = div(null , div(null, b("Profissões")),e("ul", null, 
["escritora","cuida da gaby","cozinheira","editora de vídeos"
].map(k=>e("li", {key:k}, k)))
);


let en = div(null , div(null, b("Me ensinou")),e("ul", null, 
["A amar","Editar vídeos","A tentar ser mais carinhoso", "vai me ensinar fazer cuscuz","hehehe tem mais coisas q ainda vou aprender com vc"
].map(k=>e("li", {key:k}, k)))
);

let m = e("marquee",null, "OBRIGADO POR EXISTIR");



let oi = div({onClick:()=>setAmor("maerli")}, amor);

return e("div", {className:"card", style:{padding:10}}, div({className:"card-body"},nome, nas, div( null, "Com seus ", b(da), " anos ",

hoje, q, p, m,en,  oi)));


}


ReactDOM.render( e(App), document.body);
