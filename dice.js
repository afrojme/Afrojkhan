 let randomNumber1=Math.floor(Math.random()*6)+1 //1-6
 let randomDiceImage="dice"+randomNumber1+".png" //dice1.png-dice23.png
 let randomImageSource="images/"+randomDiceImage //images/dice1.png -images/dice23.png
 let image1=document.querySelectorAll('img')[0]
 image1.setAttribute("src",randomImageSource )
 //to change atribute value use setAttribute

 let randomNumber2=Math.floor(Math.random()*6)+1 //1-6
 let randomDiceImage1="dice"+randomNumber2+".png" //dice1.png-dice23.png
 let randomImageSource1="images/"+randomDiceImage1 //images/dice1.png -images/dice23.png
 let image2=document.querySelectorAll('img')[1]
 image2.setAttribute("src",randomImageSource1 )
 //to change atribute value use setAttribute

if (randomNumber1>randomNumber2) {
    document.querySelector('h2').innerHTML="Player one wins"
}
 else if(randomNumber2>randomNumber1) {
    document.querySelector('h2').innerHTML="Player Two wins"
 
 }
 else {document.querySelectorAll('h2')
     .innerHTML="Draw"

     }
 