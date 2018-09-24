import React from 'react'



function AlphaLetter({ letter, onClick }) {
    return (
        <div onClick={(e) => onClick(e,{letter})} className="alpha-letter-container">
            {letter}
        </div>
    )
}

export default AlphaLetter;