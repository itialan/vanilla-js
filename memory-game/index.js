let clickedCard = null;

function onCardClicked(e) {
  const target = e.currentTarget;

  if (target === clickedCard || target.className.includes('done')) {
    return;
  }

  target.className = target.className.replace('color-hidden', '').trim();
  target.className += ' done';
  
  if (!clickedCard) {
    // If we haven't clicked a card, keep track of the card, display it's color
    clickedCard = target;
  } else if (clickedCard) {
    // If we already clicked a card, check if the new card matches the old card color
    if (clickedCard.getAttribute('data-color') === target.getAttribute('data-color')) {
      //clickedCard.className += ' done';
      //target.className += ' done';
      console.log('card ARE equal');
    } else {
      console.log('card NOT equal');
    }
  }
}
