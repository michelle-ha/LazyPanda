import React from 'react'
import { connect } from 'react-redux';
import { createLike, deleteLike } from '../../actions/like_actions';
import { findLike } from '../../reducers/selectors';
import { fetchPosts, fetchPost } from '../../actions/post_actions';
import {openModal } from '../../actions/modal_actions'


const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        like: findLike(state.entities.likes, ownProps.likeable_id, ownProps.likeable_type, ownProps.author_id)


    }
}

const mDTP = (dispatch) => {
    return {
        createLike: (like) => dispatch(createLike(like)),
        deleteLike: (likeId) => dispatch(deleteLike(likeId)),
        fetchPosts: () => dispatch(fetchPosts()),
        fetchPost: postId => dispatch(fetchPost(postId)),

        openModal: () => dispatch(openModal('login'))

    }
}


class LikeButton extends React.Component{
    constructor(props){
        super(props)

        this.toggleLike = this.toggleLike.bind(this)
    }

    toggleLike(e){
        e.preventDefault();
        
// debugger
        if(this.props.like ){
            if (this.props.likeable_type === "Post") {
                // this.props.deleteLike(this.props.like.id).then(() => this.props.fetchPosts())
                this.props.deleteLike(this.props.like.id).then(() => this.props.fetchPost(this.props.likeable_id))
            } else {
                this.props.deleteLike(this.props.like.id)
            }
        } else {

            if (this.props.likeable_type === "Post") {
                this.props.createLike({
                    likeable_id: this.props.likeable_id, 
                    likeable_type: this.props.likeable_type,
                    author_id: this.props.currentUser.id
                })
                // .then(() => this.props.fetchPosts())
                .then(() => this.props.fetchPost(this.props.likeable_id))
            } else {
                this.props.createLike({
                    likeable_id: this.props.likeable_id, 
                    likeable_type: this.props.likeable_type,
                    author_id: this.props.currentUser.id
                })
            }
        
        }
    }



    render(){

        return (
            <div className="like-button">
                {this.props.currentUser ?
                    (<button className='option-btn'  onClick={this.toggleLike}>
                    <i class="fas fa-heart" id={this.props.like ? 'does-like' : 'subpost'} > </i>
                    </button>)
                : (<button className='option-btn'  onClick={() => this.props.openModal()}>
                    <i class="fas fa-heart" id={this.props.like ? 'does-like' : 'subpost'} > </i>
                    </button>)
                }
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(LikeButton);

