
// lista de produtos
var data = [
{
	head: "85 + 10% diamantes",
	preco: "4,00",
	img: drive("4.png")
},
{
	head:"140 + 10% diamantes",
    preco:"6,00",
    img: drive("6.png")
},{
    head:"285 + 10% diamantes",
    preco:"12,00",
    img: drive("12.png")
},
{head:'610 + 10% diamantes',
	preco:"25,00",
	img: drive("25.png")
}
]



function drive(id){
    return  "https://cdn.jsdelivr.net/gh/maerli/blog@latest/"+id;
}

var Link = (c,o) => e('a',o,c);



previous = -1;

function showData(elm) {
	if(previous !== elm){
		previous = elm;
		var head = document.querySelector('.head');
		var foot = document.querySelector('.footer');
		if(previous <= data.length-1){
			head.innerHTML = `
			<div class='fadeIn color1'> <h1 draggable='false'> ${data[elm].head} </h1> </div>
			<div class="fadeIn color2"> <h2> R$ ${data[elm].preco} </h2></div>
		`;
		foot.innerHTML = `<button class='fadeIn btn btn-secondary' onclick="location.href='https://wa.me/+5588981628528?text=Oiii estou interessado no pacote ${data[elm].head}'" > Comprar <img width='10' height='10' src='${drive("whatsapp.png")}'/></button>`+
		`<button class='btn btn-info fadeIn' onclick="location.href='https://wa.me/+5588981628528?text=Por favor, quero  informações sobre o ${data[elm].head} ' " > Informações </button>`
		}else{
			document.querySelector('.sobre').innerHTML = `
O Free Fire é um jogo mobile de tiro estilo Battle Royale. Cada jogo de 10 minutos o coloca em uma ilha remota onde você é joga contra 49 outros jogadores, lutando pela sobrevivência. Os jogadores podem escolher seu ponto de partida usando seu pára-quedas e permanecer na zona segura pelo máximo de tempo possível. Dirija veículos para explorar o extenso mapa. Esconda-se em trincheiras ou torne-se invisível protegendo-se sob a grama. Através de emboscadas e armadilhas, há apenas um objetivo: sobreviver e se tornar o melhor de todos os jogadores.
`;
			head.innerHTML = '';
			foot.innerHTML ='';
		}
		
	}else{
		
	}
}



load = function(){
	
	var wrapper = document.createElement('div');
	wrapper.classList.add('wrapper');
	
	wrapper.addEventListener('scroll',function () {
		var elm = Math.floor( event.target.scrollTop/window.innerHeight);
		showData(elm);
	});

	
	var v = data.map(function(value,i){
		var v = document.createElement('div');
		v.classList.add('section');
		v.innerHTML = value.preco;
		v.style.backgroundImage='url(oculos'+i+'.jpg)';
		v.addEventListener('click',function(event){
		    //v.style.zIndex = "999";
		    alert('oh');
		});
		return v;
	})
	wrapper.append.apply(wrapper, v);

	css("app.css");
	
	
	require( "e.js",function(){
		
		
		
		
		var home = Link('',{href:'/'})
		var sobre = Link('',{href:'javascript:void(0);',onClick:function(event){
			event.preventDefault()
			document.querySelector('.sobre').scrollIntoView({behavior:'smooth'});
		}})
		var mais = Link('',{href:'/'})
		var ads = Link("", {href:'https://anunciantes.netlify.app'})
		
		var menu = e('div', {'class':'menu'}, [home, sobre, mais, ads])
		
		function scroll(event){
			var elm = Math.floor( event.target.scrollTop/window.innerHeight);
			showData(elm);
		}
		
		var wrapper = e('div', {'class':'wrapper', onScroll: scroll},data.map(function(v,i){
			return e('div', {
				'class':'section',
				onClick:function(event){
				    event.target.id = event.target.id == "no"? 'yes':'no'
				    if(event.target.id == "no"){
				        document.querySelector('.head').style.visibility="hidden"
				        document.querySelector('.footer').style.visibility="hidden"
				    }else{
				        document.querySelector('.head').style.visibility="visible"
				        document.querySelector('.footer').style.visibility="visible"
				    }
				},
				style:{
					'background-image':'url('+v.img+')'
				}});
		}))
		wrapper.childrens.push(e('div',{'class':'section sobre'}));
		
		var head = e('div', {'class': 'head'});
		var foot = e('div', {'class': 'footer'});
		
		
		DOMRender(Fragment([menu, head, foot ,wrapper]), 'body', true);
		showData(0);
	});
	
	
}


    document.title = "Compre diamantes Free Fire";
	load()
	

