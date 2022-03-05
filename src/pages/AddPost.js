import React, { Component } from 'react'
import swal from 'sweetalert';
import axios from 'axios'
import TextField from '../components/shared/TextFiels'
import TextArea from '../components/shared/TextArea';



export default class AddPost extends Component {
    constructor(props) {
    super(props);
    this.state = {
        userId: this.props.match.params.userId,
        title: '',
        body: '',
        loading: false,
        titleError: '',
        bodyError: '',
    };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    reset = () => {
        this.setState(this.baseState)
    }

    validateInput = () => {
        const txtError = this.state.title ? '' : 'post Title is required';
        const sbjError = this.state.body ? '' : 'Post body is required';
        if (txtError.length > 0 || sbjError.length > 0) {
          this.setState({
            titleError: txtError,
            bodyError: sbjError,
            loading: false,
          });
        } else {
          this.setState({ loading: true });
        }
      };

      savingPost = async() =>{
        const {title,body} = this.state
        await axios
        .post(
            "https://jsonplaceholder.typicode.com/posts",
            {
                title,
                body,
                userId:this.state.userId
            }
        )
        .then(res => {
            console.log("post:---",res.status)
            if(res.status === 201){
                swal("This modal will disappear soon!", {
                    title: "Good job!",         
                    text: "You clicked the button!",
                    icon: "success",
                    buttons: false,
                    timer: 2000,
                  })
            }
            
        })
        .catch(err => {
            console.log("error:--",err);
            swal("This modal will disappear soon!", {
                title: "request fails",
                text: "Saving fails",
                icon: "error",
                buttons: false,
                timer: 2000,
              });
            });
      }
    
      handleSubmit = (e) => {
        e.preventDefault();
        this.validateInput();
        this.savingPost();
      };
  render() {
    const search = this.props.location.search;
    const userId = new URLSearchParams(search).get("userId");
    return (
        <div className="flex flex-row min-h-screen justify-center items-center bg-red-100">
            <div className="p-7 shadow-2xl bg-white w-3/5 rounded-2xl">
                <h1 className="font-bold text-2xl text-center">Add Post</h1>
                <div className="container ">
                <form>
                    <div className="w-full">
                    <TextField
                        type="text"
                        name="title"
                        value={this.state.text}
                        onChange={this.handleChange}
                        placeholder="Enter Your post title"
                        label="Title"
                    />
                    <p className="text-red-500 text-xs px-3 mt-1">
                        {this.state.titleError}
                    </p>
                    </div>

                    <div className="mt-6 w-full">
                    <TextArea 
                        name="body"
                        value={this.state.body}
                        onChange={this.handleChange}
                     />
                    <p className="text-red-500 text-xs px-3 mt-1">
                        {this.state.bodyError}
                    </p>
                    </div>

                    <div className="mt-6 w-50 text-center">
                    <button
                        type="button"
                        disabled={this.state.loading}
                        onClick={this.handleSubmit}
                        className={`mt-4 hover:bg-opacity-75 text-center w-full md:w-2/3 px-4 py-4 bg-lime-500 rounded-md text-white font-bold tracking-wide text-xl ${
                        this.state.loading &&
                        'opacity-25 cursor-not-allowed'
                        }`}
                    >
                        save Post
                    </button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
  }
}
