import React, {useState} from 'react'
import { Link } from 'react-router-dom';


export const Search = props => {
    const [word, setWord] = useState("")

    const [filterDisplay, setFilterDisplay] = useState(props.posts)

    const handleChange = e => {
        let oldList = props.posts.map(post => {
            return {title: post.title.toLowerCase(), author: post.author, id: post.id}
        })

            if (e !== "") {
                let newList = []
                setWord(e)
                newList = oldList.filter(post =>
                    post.title.includes(word.toLowerCase())
                )
                setFilterDisplay(newList)

            } else {
                setFilterDisplay(props.posts)
            }
        }
        return (
            <div>
                <h1>Search Results</h1>
                Search: <input onChange={e => handleChange(e.target.value)}/>
                {filterDisplay.map((post, i) => (
                    <div key={i}>
                        <li>
                        <Link to={`/${post.id}`}>{post.title}</Link>
                        <span>{post.author}</span>
                        </li>
                    </div>
                ))}
            </div>
        )
    }
