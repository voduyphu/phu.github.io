const cardsContainer = document.querySelector('.cards');
let cardOne, cardTwo;
let matchedCards = 0;
let disableDeck = false;

const diamondColors = ['🔴','🟠','🟡','🟢','🔵','🟣','🟤','⚫'];
const emojiPairs = diamondColors.flatMap(color => [color, color]);

function generateCards() {
  const shuffled = emojiPairs.sort(() => Math.random() - 0.5);
  cardsContainer.innerHTML = '';
  shuffled.forEach(color => {
    const li = document.createElement('li');
    li.className = 'card';
    li.dataset.color = color;
    li.innerHTML = `
      <div class="view front-view">?</div>
      <div class="view back-view">${color}</div>
    `;
    cardsContainer.appendChild(li);
  });

  document.querySelectorAll('.card').forEach(card =>
    card.addEventListener('click', flipCard)
  );
}

function flipCard(e) {}
  const clicked = e.currentTarget;
  if (clicked !== cardOne && !disableDeck && !clicked.classList.contains('matched')) {
    clicked.classList.add('flip');
  }
    if (!cardOne) {
      cardOne = clicked;
      return;
    }
    cardTwo = clicked;
    disableDeck = true;

    const color1 = cardOne.dataset.color;
    const color2 = cardTwo.dataset.color;

    if (color1 === color2) {
      cardOne.classList.add('matched');
      cardTwo.classList.add('matched');
      matchedCards++;
      if (matchedCards === 8) {
        setTimeout(() => {
          alert('🎉 Bạn đã chiến thắng!');
          resetGame();
        }, 500);
      }
      resetFlip();
    } else {
      setTimeout(() => {
        cardOne.classList.remove('flip');
        cardTwo.classList.remove('flip');
        resetFlip();
      },
      )
    }

