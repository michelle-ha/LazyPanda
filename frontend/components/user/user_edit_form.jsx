import React from 'react';
import { Link } from 'react-router-dom';
import EditNavBar from "../greeting/edit_navbar"



class UserEditForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.currentUserId,
            profile_pic: null,
            profilePicPreviewURL: null
        };

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFile = this.handleFile.bind(this)
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();

        fileReader.onloadend = () => {
            this.setState({ profile_pic: file, profilePicPreviewURL: fileReader.result })
        }

        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[id]', this.state.id);

        if (this.state.profile_pic) {
            formData.append('user[profile_pic]', this.state.profile_pic);
        }

        this.props.updateUser(formData)
            .then( () => this.props.history.push("/"))
    }


    render() {

        const preview = this.state.profilePicPreviewURL ? <img src={this.state.profilePicPreviewURL} className="profile-pic-edit" /> : null;

        return (
            <div>      <EditNavBar/>
            
            <div className="picture-edit-container">

                <form className="picture-edit-form" onSubmit={this.handleSubmit}>
                    <h1 className="profile-pic-heading"> { this.props.currentUser.name}'s Profile Picture</h1>
                <h3 className="button-holder">Original Photo</h3>
                <div className="pic-holder">
                <img className="profile-pic-edit" src = { this.props.currentUser.profilePicURL } />
                </div>
                
                <h3 className="button-holder">New Photo</h3>
                    {preview}
                    <div>
                        <input
                        type="file" required
                        onChange={this.handleFile}
                        className="update-profile-button"
                    />
                    </div>
                    
                    <div><input type="submit" value="Update Profile Pic" className="update-profile" /></div>

                    <div className="go-back-link-edit"><Link to="/" className="go-back">Go Back</Link></div>


                </form>


                
            </div>
            </div>
        );
    }
}

export default UserEditForm;