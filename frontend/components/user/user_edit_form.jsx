import React from 'react';

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

        const preview = this.state.profilePicPreviewURL ? <img height="200px" width="200px" src={this.state.profilePicPreviewURL} /> : null;

        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>Upload a New Profile Pic</h1>
                    {preview}
                    <input
                        type="file"
                        onChange={this.handleFile}
                    />


                    <input type="submit" value="Update Profile Pic" />
                </form>

                
            </div>
        );
    }
}

export default UserEditForm;