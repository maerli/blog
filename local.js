let file = location.hash.slice(2).split("-").slice(1).join("-");
location.href= "http://localhost:3000/prova#/prova-"+file;
