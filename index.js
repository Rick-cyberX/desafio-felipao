let nomeHeroi = "Cyber Bug "
let xp = 5649
let rank = ""

switch (true) {
    case (xp < 1000) :
    rank = "Ferro" ;
    break;

    case (xp >= 1000 && xp <= 2000) :
    rank = "Bronze" ;
    break;

    case (xp >= 2001 && xp <= 5000) :
    rank = "Prata" ;
    break;

    case (xp >= 5001 && xp <= 7000) :
    rank = "Ouro" ;
    break;  
    
    case (xp >= 7001 && xp <= 8000) :
    rank = "Platina" ;
    break;

    case (xp >= 8001 && xp <= 9000) :
    rank = "Ascendente" ;
    break;  
    
    case (xp >= 9001 && xp <= 10000) :
    rank = "Imortal" ;
    break;
    
    case (xp >= 10001) :
    rank = "Radiante" ;
    break;    
}

console.log("O Herói de nome " + nomeHeroi + "está no rank " + rank)