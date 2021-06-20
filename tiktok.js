const e = React.createElement; 

function App(){

var url = "https://cdn.jsdelivr.net/gh/maerli/blog@latest/";


const title = e("h1", null ,"Programa de Bônus: veja como ganhar e ‘sacar’ dinheiro com o TikTok");

let style = {width:"100vw"};

let img1 = e("img", {src:url+"tiktok.jpg", style});

let p1 = e("p", null, "Desde março deste ano, o TikTok passou a bonificar com dinheiro usuários que assistem e postam vídeos na plataforma. Por meio do Programa de Bônus do TikTok, a rede social permite que você “saque” posteriormente o valor de forma on-line, com uma transferência direto para a sua conta bancária.");

let tik = e("a", {href:"https://vm.tiktok.com/ZMdSWggEF/"}, e("img", {src:url+"p5.png",style}));

let t1 = e("h2", null, "Ganhando dinheiro");
let p2 = e("p", null, "Existem diferentes maneiras de ganhar dinheiro no TikTok com o programa, sendo elas: (1) indicação de amigos para a rede utilizando seu código de convite e (2) atividades de usuários. Neste caso, o app bonifica tanto os criadores de conteúdo que postam os vídeos, quanto os usuários que assistem a essas produções.");

let p3 = e("p", null, "Assim, ao realizar alguma dessas ações, os tiktokers conseguem somar pontos (chamados de Rubis) que posteriormente podem ser convertidos em dinheiro.");

let p4 = e("p", null, "Já para realizar o saque dos valores bonificados, é preciso ter uma conta no Pagbank ou em qualquer banco brasileiro – atualmente, o PayPal não está funcionando. A conta deve estar vinculada ao aplicativo.");


let p5 = e("p", null, "Para efetuar a transferência, você pode optar pelo PIX, PagBank ou transferência bancária. Os valores também podem ser usados para fazer recargas de créditos em celular diretamente via plataforma do TikTok.");

let p6 = e("p", null, "Importante: para participar do programa é preciso ter sua própria conta no TikTok, ser residente do Brasil e ter mais de 18 anos, além de estar de acordo com os Termos de Uso, bem como a Política de Privacidade da rede social. A participação é voluntária, gratuita e os participantes não são obrigados a adquirir nenhum produto. ");

let t2 = e("h2", null, "Como sacar o dinheiro que ganhei no TikTok?");

let p7 = e("p", null, "1. Abra o TikTok, clique na aba “Eu” e, em seguida, toque no ícone da moeda no topo da tela;");

let img2 = e("img", {style, src:url+"p1.jpg"});

let p8 = e("p", null, "2. Depois, clique em “Sacar”. Os saques têm valores mínimos e são divididos em quatro quantias: R$ 1,50, R$ 5, R$ 10 ou R$ 20;");

let img3 = e("img", {style,src:url+"p2.jpg"});

let p9 = e("p", null, "3. Depois, aperte em “Adicionar novo método de saque”, selecione a forma como deseja transferir seu dinheiro e preencha os campos com seus dados;");


let img4 = e("img", {style, src:url+"p3.jpg"});

let p10 = e("p", null, "4. Após cadastrar, clique em “Sacar agora” e confirme o saque. Em até 10 dias úteis após solicitar o saque, o dinheiro cai na sua conta, conforme os prazos:");

let img5 = e("img", {style,src:url+"p2.jpg"});

let p11 = e("p", null, [
"PagBank: 1 a 3 dias;",
"Transferência bancária: 7 dias úteis;",
"Pix: 7 a 10 dias úteis."].map(a=>e("li", {key:a}, a)))

 var b = e("button", {className:"btn btn-success"}, "contar");
 
  return e("div", { style:{ padding:5, } },title, img1, p1,tik, t1, p2, p3, p4, p5, p6, tik,t2, p7, img2, p8, img3, p9, img4,p10,p11,tik)} ReactDOM.render( e(App), document.body);
