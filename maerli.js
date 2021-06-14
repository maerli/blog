function App(){

let title = h("h1", null, "Titulo aqui");

let text = h("p", null, "Durante a finalização dos pagamentos da primeira parcela do auxílio emergencial 2021, a Caixa Econômica Federal responsável pelo repasse financeiro do programa emergencial do governo divulgou o calendário de antecipação do saque em dinheiro e transferência bancária do primeiro ciclo de pagamentos desse");

let link = h("a", {href:"whatsapp://send?text="+location.href+location.hash}, "compartilhar");

return h("div", null, title, link, text);

}


require("https://cdn.jsdelivr.net/npm/p5@1.3.1/lib/p5.js");


function setup(){
createCanvas(400,400);
}
x = 0;
y = 0;
function draw(){
background(0);
fill(255);
rect(x,y,10,10);
x++;
y++;
}


render()