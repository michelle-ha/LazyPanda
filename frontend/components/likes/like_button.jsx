import React from 'react'
import { connect } from 'react-redux';
import { createLike, deleteLike } from '../../actions/like_actions';
import { findLike } from '../../reducers/selectors';
import { fetchPost } from '../../actions/post_actions';



const mSTP = (state, ownProps) => {
    return {
        like: findLike(state.entities.likes, ownProps.likeable_id, ownProps.likeable_type, ownProps.author_id),
        // postId: ownProps.likeable_id,
        // likes: state.entities.likes,


    }
}

const mDTP = (dispatch) => {
    return {
        createLike: (like) => dispatch(createLike(like)),
        deleteLike: (likeId) => dispatch(deleteLike(likeId)),
        // fetchPost: postId => dispatch(fetchPost(postId)),

    }
}


class LikeButton extends React.Component{
    constructor(props){
        super(props)

        // this.state = {
        //     likeable_id: this.props.likeable_id, 
        //     likeable_type: this.props.likeable_type,
        //     author_id: this.props.author_id
        // }

        this.toggleLike = this.toggleLike.bind(this)
    }

    toggleLike(e){
        e.preventDefault();
        if(this.props.like){
            this.props.deleteLike(this.props.like.id)
            // .then(() => this.props.fetchPost(this.props.postId))

        }
        else {
            this.props.createLike({
                likeable_id: this.props.likeable_id, 
                likeable_type: this.props.likeable_type,
                author_id: this.props.author_id
            })
            // this.props.createLike(this.state)
            // .then(() => this.props.fetchPost(this.props.postId))
            // .then(() => {
            //     this.setState({
            //         likeable_id: this.props.likeable_id, 
            //         likeable_type: this.props.likeable_type,
            //         author_id: this.props.author_id
            //     })
            // })
        }
    }



    render(){
        // if(this.props.likeable_type === 'Subpost'){
        //     return (
        //         <div id={this.props.like ? 'does-like' : ''} className='comment-like' onClick={this.toggleLike}>Like</div>
        //     )
        // }
        return (
            <button className='option-btn'  onClick={this.toggleLike}>
                <i class="fas fa-heart" id={this.props.like ? 'does-like' : 'subpost'} > </i>
            </button>
            
        )
    }
}

export default connect(mSTP, mDTP)(LikeButton);