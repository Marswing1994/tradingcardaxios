import React, { useState, useEffect } from 'react';
import axios from "axios";
import TradingCard from './TradingCard';


function CardCreation(){  
 const [cards, setCards] = useState([]);

 useEffect(() => {
   axios
     .get("https://api.pokemontcg.io/v2/cards", {
            headers: {
              'x-api-key': 'ba70eac7-79a0-471b-8502-829df9e5fa1e'
            }
     })
     .then((response) => {
        console.log("[TCardList] - Getting API Response");

        let cardData = response.data.data;
        let cardCount = 36;

        let chosenIDs = [];
        let chosenCards = [];

        for (let i = 0; i < cardCount; i++) {
            let randomNum = Math.floor(Math.random() * cardData.length);

            if (chosenIDs.includes(randomNum)) {
                randomNum = Math.floor(Math.random() * cardData.length);
            } else {
                chosenIDs.push(randomNum);
            }
        }

        for (let i = 0; i < chosenIDs.length; i++) {
            let randomCard = cardData[chosenIDs[i]];
            chosenCards.push(randomCard);
        }

       setCards(chosenCards);

     })
     .catch((error) => {
       console.error("Error fetching the cards data:", error);
     });
 }, []);

 return (
    <div className="cards_container flex flex-wrap">
        {cards.map((card, index) => (
            <TradingCard key={index} card={card} />
        ))}
    </div>
);

}

export default CardCreation;