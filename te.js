const e = React.createElement;




function App(){
const [count,setCount] = React.useState(0);

title = e("h1", null , "titulo");

var b = e("button", {
onClick:()=>{
  setCount(count +1);
}
}, "contar");



    return e("div", {
    style:{
      padding:5,
    }
    },title,  count, b)
}


ReactDOM.render( e(App), document.body);
