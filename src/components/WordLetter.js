import React from 'react'

function WordLetter({ letter }) {
    return (
        <div className="word-letter-container">
            <span className="word-letter">{letter}</span>
        </div>
    )
}

export default WordLetter;