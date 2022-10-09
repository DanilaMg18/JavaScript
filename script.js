let list = document.querySelector('.block1ul').children

for(let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function(){
        if (list[i].classList.contains('active')) {
            return
        } else {
            for(let i = 0; i < list.length; i++) {
                list[i].classList.remove('active');
            }
            list[i].classList.add('active')

        }
    })
}



let arr = [
    {
      producer: "Розы",
      model: "Розовые",
      family: 'Семейство: Цветочные',
      description: 'the best flowers in the frontend world',
      imgSrc: "https://tse1.mm.bing.net/th?id=OIP.tf4ybqj7lj7HWtYiqPKxlgHaGX&pid=Api&P=0"
    },
    {
      producer: "Пионы",
      model: "Розовые",
      family: 'Семейство: Цветочные',
      description: 'the best flowers in the frontend world',
      imgSrc: "https://vjoy.cc/wp-content/uploads/2020/03/101-rozovyj-pion-v-krafte-400x400-1.jpg"
    },
    {
      producer: "Подсолнух",
      model: "желтый",
      family: 'Семейство: Цветочные',
      description: 'the best flowers in the frontend world',
      imgSrc: "https://tse2.mm.bing.net/th?id=OIP.rI9Z2LU1ihkRFRLpcwgAnAHaHa&pid=Api&P=0"
    },
    {
      producer: "Розы",
      model: "Розовые",
      family: 'Семейство: Цветочные',
      description: 'the best flowers in the frontend world',
      imgSrc: "https://tse1.mm.bing.net/th?id=OIP.tf4ybqj7lj7HWtYiqPKxlgHaGX&pid=Api&P=0"
    },
    {
      producer: "Пионы",
      model: "Розовые",
      family: 'Семейство: Цветочные',
      description: 'the best flowers in the frontend world',
      imgSrc: "https://vjoy.cc/wp-content/uploads/2020/03/101-rozovyj-pion-v-krafte-400x400-1.jpg"
    },
    {
      producer: "Подсолнух",
      model: "желтый",
      family: 'Семейство: Цветочные',
      description: 'the best flowers in the frontend world',
      imgSrc: "https://tse2.mm.bing.net/th?id=OIP.rI9Z2LU1ihkRFRLpcwgAnAHaHa&pid=Api&P=0"
    },
    {
      producer: "Розы",
      model: "Розовые",
      family: 'Семейство: Цветочные',
      description: 'the best flowers in the frontend world',
      imgSrc: "https://tse1.mm.bing.net/th?id=OIP.tf4ybqj7lj7HWtYiqPKxlgHaGX&pid=Api&P=0"
    },
    {
      producer: "Пионы",
      model: "Розовые",
      family: 'Семейство: Цветочные',
      description: 'the best flowers in the frontend world',
      imgSrc: "https://vjoy.cc/wp-content/uploads/2020/03/101-rozovyj-pion-v-krafte-400x400-1.jpg"
    },
    {
      producer: "Подсолнух",
      model: "желтый",
      family: 'Семейство: Цветочные',
      description: 'the best flowers in the frontend world',
      imgSrc: "https://tse2.mm.bing.net/th?id=OIP.rI9Z2LU1ihkRFRLpcwgAnAHaHa&pid=Api&P=0"
    }    
  ]


let wrapper = document.querySelector('.wrapper')

function createCard(parent, cardObject) {
    let card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
    <div class="picture">
      <img src='${cardObject.imgSrc}' alt="picture">
    </div>
    <div class="heading">
      <h3>${cardObject.producer} ${cardObject.model}</h3>
    </div>

    <div class="desc2-block">
    <h2>${cardObject.family}</h2>
  </div>

    <div class="desc-block">
      ${cardObject.description} 
    </div>

    <div class="action-block">
      <div class="cart">
        заказать
      </div>

    </div>
  `;

  parent.append(card)
}

arr.forEach(function(card) {
    createCard(wrapper, card)
})