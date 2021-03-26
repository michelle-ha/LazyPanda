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
        let header;
        if (filterDisplay.length < 0) {
            header = "No Results"}

        return (

            <div>      
            
            <div className="picture-edit-container">

                <form className="picture-edit-form" >
                    <h1 className="profile-pic-heading"> Search For Posts</h1>
                    <input placeholder="Search for post title..." onChange={e => handleChange(e.target.value)}/>
                <h3 className="button-holder">Search Results</h3>
                
                
                <h3 className="button-holder-search">{filterDisplay.map((post, i) => (
                    filterDisplay.length ? (
                    <div key={i}>
                        <li>
                        <Link to={`/${post.id}`}>{post.title}</Link>
                        <span> {post.author}</span>
                        </li>
                    </div>) : ( <span>No Results</span>)
                ))}</h3>
                    

                    <div className="go-back-link-edit"><Link to="/" className="go-back">Go Back</Link></div>


                </form>



                
            </div>
            </div>
        );
    }

           