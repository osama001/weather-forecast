const row = document.querySelector('.row')
let colors=['red','green','blue','yellow','brown','pink']

let colorsList =[...colors,...colors]
let activeCard= null






function buildCard(color){
  let parent = document.createElement('div')
 
  parent.classList.add('col-sm-3')
  parent.classList.add('col-xs-6')
  let card = document.createElement('div')
  card.classList.add('card')
  card.setAttribute('data-color',color)
  
  parent.addEventListener('click',function(){
    card.classList.add('flib')
    card.style.backgroundColor=color

     //matched 
     if(activeCard == null){
        return  activeCard = card
     }


     else if(activeCard.getAttribute('data-color') == card.getAttribute('data-color')){
      card.classList.add('unflib')
     }

    setTimeout(() => {
      activeCard.style.backgroundColor=null
      activeCard=null
      card.style.backgroundColor=null
    }, 1000);




  })
  parent.append(card)
  return parent
}
console.log(colorsList)

for( let i=0 ; i<12;i++){
           let colorIndexd= Math.floor(Math.random()*colorsList.length)
           let card= buildCard(colorsList[colorIndexd])
           console.log(colorsList[colorIndexd])
           row.append(card)
           colorsList.splice(colorIndexd,1)
}