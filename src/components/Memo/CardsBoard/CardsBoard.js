import cards from '../Cards/Cards';

 /*const generateCards = (squareNum = 6) => {
    let randomC = cards.sort(() => .5 - Math.random()).slice(0,squareNum)
    const randomCards = [...randomC].concat(randomC).sort(() => .5 - Math.random())
    
    return randomCards
}   */

const generateCards = (squareNum = 6) => {
  let randomCards = []
  const sortCards = cards.sort(() => .5 - Math.random());

  for (let i = 0; i < squareNum * 2; i++) {
    let randomCard

    do {
      randomCard = sortCards[Math.floor(Math.random() * squareNum)]
    } while (
      randomCards.filter(element => element.type === randomCard.type).length >= 2
    )

    randomCards.push(Object.assign({}, randomCard))
  }

  return randomCards
}  

export default generateCards