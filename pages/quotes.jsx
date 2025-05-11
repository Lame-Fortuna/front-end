import React, { useState, useEffect } from 'react'
import '../public/quotes.css'

const quotes = new Map([
    //["Cersei Lannister", {q1: "lol" }],
    ["Cersei Lannister", [
        "When you play the game of thrones, you win or you die. There is no middle ground.",
         "What good is power if you cannot protect the ones you love?",
         "Power is power."
    ]],
    ["Arya Stark", [
        "Leave one wolf alive and the sheep are never safe.",
        "I know Death. He's got many faces. I look forward to seeing this one."
    ]],
    ["Brienne of Tarth", [
        "Nothing's more hateful than failing to protect the one you love.",
        "All my life men like you have sneered at me. And all my life I've been knocking men like you into the dust."
    ]],
    ["Daenerys Targaryen", [
        "I'm not going to stop the wheel, I'm going to break the wheel.",
        "I am not your little princess. I am Daenerys Stormborn of the blood of old Valyria and I will take what is mine—with fire and blood, I will take it.",
        "If I give everyone what they deserve I'll have no one left to rule.",
        "Let the priests argue over good and evil, slavery is real. I can end it, I will end it, and I will end those behind it.",
        "A dragon is not a slave."
    ]],
    ["Jon Snow", [
        "When enough people make false promises words stop meaning anything. Then there are no more answers, only better and better lies.",
        "If you only trust the people you grew up with, you won't make many allies.",
        "They fought together, against their common enemy. Despite their differences, despite their suspicions—together. And we need to do the same if we're going to survive because the enemy is real. It's always been real."
    ]],
    ["Oberyn Martell", [
        "It is a big and beautiful world. Most of us live and die in the same corner where we were born in, never get to see any of it. I don't want to be most of us."
    ]],
    ["Petyr Baelish", [
        "Chaos isn't a pit. Chaos is a ladder. Many who try to climb it fail, and never get to try again. The fall breaks them. And some are given a chance to climb, but they refuse. They cling to the realm, or the gods, or love—illusions. Only the ladder is real. The climb is all there is.",
        "A man with no motive is a man no one suspects. Always keep your foes confused: If they don't know who you are, what you want—they can't know what you plan to do next.",
        "Know your strengths, use them wisely, and one man can be worth ten thousand.",
        "There's no justice in the world, not unless we make it."
    ]],
    ["Tyrion Lannister", [
        "Never forget what you are, the rest of the world will not. Wear it like armor and it can never be used to hurt you.",
        "Death is so final, yet life is full of possibilities.",
        "I try to know as many people as I can. You never know which one you'll need.",
        "A mind needs books like a sword needs a whetstone.",
        "When you tear out a man's tongue, you are not proving him a liar, you're only telling the world that you fear what he might say."
    ]],
    ["Lord Varys", [
        "Give us common folk one taste of power and we're like the lion who tasted man—nothing is ever so sweet again.",
        "Respect is how the young keep us at a distance, so we don't remind them of an unpleasant truth.",
        "Men decide where power resides, whether or not they know it."
    ]]
])

const Quotes = () =>{
    // Tab title
    useEffect(() => {
        document.title = "Quotes";
    }, []);
    const [text, changeQuote] = useState("")
    const [author, changeAuthor] = useState("")

    function rando(){
        const keys = [...quotes.keys()];
        const randomKey = keys[Math.floor(Math.random() * keys.length)];

        const quotesArray = quotes.get(randomKey); // Get the quotes associated with that key
        const randomQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)]; // Get a random quote from that array

        changeQuote(randomQuote)
        changeAuthor(randomKey)
    }

    // When Page is loaded
    useEffect(() => {
        rando();
    }, []);

    return (
        <div id="quote-box">
            <p id="text">{text}</p>
            <p id="author">- {author}</p>
            <div className="buttons">
                <a id="tweet-quote" href="twitter.com/intent/tweet">Tweet</a>
                <button id="new-quote" onClick={rando}>New</button>
            </div>
        </div>
    )
}

export default Quotes
