import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);

  // // Sample images for the cards
  // const images = [
  //   require('./images/bee.jpg'),
  //   require('./images/flower.jpg'),
  //   require('./images/honey.jpg'),
  //   // Add more images here...
  // ];

  useEffect(() => {
    // Generate the cards when the component mounts
    generateCards();
  }, []);

  const generateCards = () => {
    // Generate pairs of cards with random images
    const pairs = images.concat(images);
    // Shuffle the pairs to randomize their order
    pairs.sort(() => Math.random() - 0.5);
    // Assign an ID and a flipped status to each card
    const cardsData = pairs.map((image, index) => ({
      id: index,
      image,
      flipped: false,
    }));
    setCards(cardsData);
  };

  const handleCardClick = (id) => {
    // Check if the card is already flipped or matched
    if (flippedCards.includes(id) || cards[id].flipped || matchedPairs === images.length) {
      return;
    }

    // Flip the clicked card
    const updatedCards = cards.map((card) =>
      card.id === id ? { ...card, flipped: true } : card
    );
    setCards(updatedCards);

    // Store the flipped card's ID for comparison
    setFlippedCards((prevFlippedCards) => [...prevFlippedCards, id]);

    // Check if two cards are flipped to compare them
    if (flippedCards.length === 1) {
      setTimeout(() => {
        compareFlippedCards();
      }, 1000);
    }
  };

  const compareFlippedCards = () => {
    const [firstCardId, secondCardId] = flippedCards;
    if (cards[firstCardId].image === cards[secondCardId].image) {
      // If the cards match, mark them as matched
      setMatchedPairs((prev) => prev + 1);
      setFlippedCards([]);
    } else {
      // If the cards don't match, flip them back
      const updatedCards = cards.map((card) =>
        card.id === firstCardId || card.id === secondCardId
          ? { ...card, flipped: false }
          : card
      );
      setCards(updatedCards);
      setFlippedCards([]);
    }
  };

  return (
    <View style={styles.container}>
      {cards.map((card) => (
        <TouchableOpacity
          key={card.id}
          onPress={() => handleCardClick(card.id)}
          activeOpacity={0.8}
          style={[
            styles.card,
            card.flipped || flippedCards.includes(card.id) ? styles.flippedCard : null,
          ]}
        >
          {card.flipped || flippedCards.includes(card.id) ? (
            <Image source={card.image} resizeMode="cover" style={styles.cardImage} />
          ) : (
            <View style={styles.cardBack} />
          )}
        </TouchableOpacity>
      ))}
      {matchedPairs === images.length && <Text>You win!</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  card: {
    width: 80,
    height: 80,
    margin: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  cardBack: {
    width: 80,
    height: 80,
    borderRadius: 5,
    backgroundColor: '#2a2a2a',
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  flippedCard: {
    transform: [{ rotateY: '180deg' }],
  },
});

export default MemoryGame;
