import React from "react"

function Article({title , date = "January 1, 1970" , preview , minutes}) {
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} ~ {emoji(minutes)} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    )
}

function emoji(minutes){
    let emojiResult =''
    if (minutes<30) {
        while (minutes >0) {
            minutes -= 5
            emojiResult += '☕️'
        }
    } else {
        while (minutes >0) {
            minutes -= 10
            emojiResult += '🍱'
        }
    }
    return emojiResult
}

export default Article