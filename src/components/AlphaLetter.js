import React from 'react'



function AlphaLetter({ letter, onClick }) {
    return (
        <button onClick={(e) => onClick(e, { letter })} className="alpha-letter-container">
            {letter}
        </button>
    )
}

export default AlphaLetter;