
(async function(){


	


	let hooks = []
	let idx = 0


	function useState(initValue){
		let state
		state = hooks[idx] !== undefined? hooks[idx] : initValue
		const setState = (newValue)=>{
			hooks[idx] = newValue
			renderComponent()
		}
		idx ++
		return [state,setState]
	}
	function useEffect(callback, _array){
		const oldDep = hooks[idx]
		let hasChanged = true
		if(oldDep){
			hasChanged = oldDep.some((dep,i)=>!Object.is(dep,oldDep[i]))
		}
		hooks[idx] = _array
		idx++
		if (hasChanged) callback()
	}
	function useRef(){
		return {current:null}
	}



function renderComponent(){
	console.log(node)
	diff(root, node.nodeName(), oldNode)
	console.log(node, oldNode)
	oldNode = node
	idx = 0
}

function _render(){
	//console.log(_template)
	diff(null, _template , _root )
	idx = 0
	// console.log(_currentApp)
	// const newApp = render(_template())
	// _currentApp? _root.replaceChild(newApp, _currentApp): _root.append(newApp)

	// _currentApp = newApp
}

module = {
	packs:[],
	exports:null
}
async function require(path, func){
	var script = document.createElement('script')
	script.src = path+".js"
	if(module.packs.indexOf(path) === -1){
		document.querySelector('head').append(script)
			var wait = await new Promise((resolve,reject)=>{
				script.addEventListener('load',function(event){
					if(func) resolve(func())
					
				})
			})
		return wait
	}
}
function loadCSS(path){
	var css = document.createElement('link')
	css.rel = 'stylesheet'
	css.href = path
	document.querySelector('head').append(css)
}




function globalStyle(cssRules){
	var css = document.createElement('style')
	document.querySelector('head').append(css)
	var sheet = css.sheet
	let index = 0
	for(let i in cssRules){
		var r = []
		for(j in cssRules[i]){
			r.push(j.replace(/[A-Z]/,b=>'-'+b.toLowerCase()) + ':' + cssRules[i][j])
		}
		sheet.insertRule(i+'{'+r.join(';')+'}', index)
		index ++
	}
}
// tests

function diff($parent, newNode, oldNode, index=0){

	if(!$parent) return [null,null]

	if(!oldNode){
		$parent.appendChild(renderNode(newNode, false))
	}else if(!newNode){
		$parent.removeChild($parent.childNodes[index])
	}else if(changed(newNode,oldNode)){
		$parent.replaceChild(renderNode(newNode, false), $parent.childNodes[index])
	}else if(newNode.nodeName){
		//console.log(newNode)
		const newLength = newNode.children.length
		const oldLength = oldNode.children.length

		for(let i = 0; i< Math.max(oldLength,newLength); i++){
			//console.log('1-----')
			diff($parent.childNodes[index], newNode.children[i], oldNode.children[i], i)
			//useComponentDidMount()
			//console.log($parent.childNodes[index])
			
		}

	}
	return [$parent,newNode]
}

	

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

const changed = (node1,node2)=>{

	if(typeof node1 !== typeof node2){
		//console.log('typeof is n1 is equal n2')
		return true
	}else{
		//console.log('typeof is n1 is not equal n2')
	}

	if(typeof node1 === "string" && node1 !== node2){
		//console.log('string')
		return true
	}else{
		//console.log('not string')
	}

	if(node1.nodeName !== node2.nodeName){
		//console.log('ok')
		return true
	}else{
		//console.log('not ok')
	}

	// return typeof node1 !== typeof node2 ||
	// (typeof node1 === "string" && node1 !== node2 ) ||
	// node1.nodeName !== node2.nodeName
}


let node = null
let root = null
let oldNode = null

const render = (vnode, parent)=>{
	node = vnode
	oldNode = vnode.nodeName()
	diff(parent, oldNode)
	root = parent
	idx = 0
	
}
function h(nodeName, attrs, ...children){
	return {nodeName, props:attrs, children}	
}



// })


	function Home(){
	let links = ["valegas"]

	let ads = h('a', {}, )

	return h("div", null, ...links.map(x=> x))
}
render(h(Home), document.querySelector("#root"))

	await require("https://www.gstatic.com/firebasejs/8.3.2/firebase-app", async function(){
	await require("https://www.gstatic.com/firebasejs/8.3.2/firebase-database", function(){
		require("teste", null)
	})
})
})()
