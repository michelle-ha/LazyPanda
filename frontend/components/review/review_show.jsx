import React from 'react';

class ReviewShow extends React.Component {

    render() {

        let AllReviews = this.props.postReviews.map((review, idx) => {
            

            return (
                <div className="review-details" key={review.id}>
                    <ul>
                         <li className="review-author"> {review.author} </li>
                        
                        <div className="review-display">
                        
                        {this.props.currentUserId === review.author_id ?
                            (<div className="review-container">
                                <button className="close-x-review" onClick={() => this.props.deleteReview(review.id)}>&#10006;</button>
                                < li className="review-title">{review.content}</li>
                            </div>)
                            : < li className="review-title-2">{review.content}</li>}
                        
                    </div>
                    </ul>
                    
                </div>
            )    
        })
        
        return (
            <div>
                {AllReviews}               
            </div>
        )
    }
}

export default ReviewShow;