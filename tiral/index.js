import React from "react"
import ReactDOM from "react-dom"

function MyInfo(){
    return (
        <div>
            <h1>My Name is Tijani Ibrahim</h1>
            <p>My Favorite tourist area are</p>
            <ol>
                <li>Kanji Dam</li>
                <li>Ogudu water fall</li>
                <li>Zoo</li>
            </ol>
        </div>
    )
}
ReactDOM.render(<MyInfo/>, document.getElementById("root"));