import React, {useState} from 'react'

export const Search = props => {
    const [word, setWord] = useState("")

    const [filterDisplay, setFilterDisplay] = useState(props.posts)

    const handleChange = e => {
        let oldList = props.posts.map(post => {
            return {title: post.title.toLowerCase(), author: post.author}
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
                Search: <input onChange={e => handleChange(e.targer.value)}/>
                {filterDisplay.map((post, i) => (
                    <div key={i}>
                        <li>
                            {post.title} &nbsp;
                            <span>{post.author}</span>
                        </li>
                    </div>
                ))}
            </div>
        )
    }
