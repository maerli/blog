const renderNode = (vnode) => {
	let el
	if(vnode.split) return document.createTextNode(vnode)
	const {nodeName,props, children} = vnode
	if (typeof nodeName === "string" || typeof nodeName === "number") {
		el = document.createElement(`${nodeName}`)
		for(let key in props){

			if(key === "onClick"){
				el.addEventListener('click',(event)=>props[key](event))
				continue
			}
			if(key == "ref"){
				props[key].current = el
				console
			}
			if(key === "style"){
				for(let t in props[key]){
					el.style[t] = props[key][t]
					console.log(t)
				}
				continue
			}
			el.setAttribute(key, props[key])
		}
	}else if(typeof nodeName == "function"){

		
		let component = nodeName(props)

		el = renderNode(component)

		component.render = nodeName
		component.props = props
		
	}

	(children || []).forEach(child=>{
		el.appendChild(renderNode(child))}
	)

	return el
}

function render(){
    var el = renderNode(h(App))
    var e = document.querySelector("#root")
    e.append(el)
 
}

function h(nodeName, attrs, ...children){
	return {nodeName, props:attrs, children}	
}





let m = renderNode(h("meta", {name:"viewport", content:"width=device-width, initial-scale=1, maximum-scale=1.0"}))
document.querySelector("head").append(m)


function require(src, fun){
   var script = document.createElement("script");
   script.src = src;
   
   if(fun){
     script.onload = fun
   }
   document.querySelector("head").append(script);
   
}

function css(href){
   var link = document.createElement("link");
   link.rel = "stylesheet";
   link.href = href;
   document.querySelector("head").append(link);
   
}
css("https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css");


require("https://unpkg.com/react@17/umd/react.development.js");

require("https://unpkg.com/react-dom@17/umd/react-dom.development.js", function(){

var url = "https://cdn.jsdelivr.net/gh/maerli/blog/";
let file = location.hash.slice(2)
if(file === "") file = "index";
require(url+file+".js")
});



