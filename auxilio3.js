const e = React.createElement;




function App(){

var url = "https://cdn.jsdelivr.net/gh/maerli/blog@latest/";
let style = {width:"100vw"};

let tik = e("a", {href:"https://vm.tiktok.com/ZMdSWggEF/"}, e("img", {src:url+"p5.png",style}));

let title = e("h1", null , "Auxílio emergencial 2021: veja tabela de pagamento e saque da 3ª parcela");


 let dt = ["Nascidos em janeiro: 18 de junho",
    "Nascidos em fevereiro: 19 de junho",
    "Nascidos em março: 20 de junho",
    "Nascidos em abril: 22 de junho",
    "Nascidos em maio: 23 de junho",
    "Nascidos em junho: 24 de junho",
    "Nascidos em julho: 25 de junho",
    "Nascidos em agosto: 26 de junho",
    "Nascidos em setembro: 27 de junho",
    "Nascidos em outubro: 29 de junho",
    "Nascidos em novembro: 30 de junho",
    "Nascidos em dezembro: 30 de junho"];



    return e("div", {
    style:{
      padding:5,
    }
    }, title, tik, dt.map((b,c)=>e("li",{key:c}, b)), tik);
}


ReactDOM.render( e(App), document.body);