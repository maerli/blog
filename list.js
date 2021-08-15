const {log:print} = console
list_1 = ["diego","serginho","dieyson"];
list_2 = ["mateus","hudson","dieyson","edinho","serginho"]
aux = (a,b)=> a+b

sorteio = (list)=>{
    return list
    .map((a,b)=> a.split("")
    	.map((c,d)=> c.charCodeAt(0))
    	.reduce(aux)).reduce(aux)%list.length
}

winner1_ = list_1[sorteio(list_1)];
winner2_ = list_2[sorteio(list_2)];

print("Vencedor 140 diamantes ->", winner1_);

print("Vencedor 85 diamantes ->", winner2_);

