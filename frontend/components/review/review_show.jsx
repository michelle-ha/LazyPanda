import React from 'react';

class ReviewShow extends React.Component {

    render() {

        let AllReviews = this.props.postReviews.map((review, idx) => {
            

            return (
                <div className="review-details" key={review.id}>
                    <ul>
                         <li className="review-author"> {review.author} </li>
                        < li className="review-title">{review.content}</li>
                        <div className="review-display">
                        {this.props.currentUserId === review.author_id ?
                        (<div>
                            <button className="close-x" onClick={() => this.props.deleteReview(review.id)}>&#10006;</button>
                        </div>)
                    : null}
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