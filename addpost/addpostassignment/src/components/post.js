import React from 'react'
import  { useState } from 'react';
import './post.css';
import {  Menu, } from 'semantic-ui-react'
class Navbar extends React.Component {

    state = { activeItem: 'home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    getSearch = (event) => {
      console.log(event.target.value);
    }

    getClicked = (event) => {
      console.log(event);
    }

    render() {
        const { activeItem } = this.state
        return (

            <div className="container-navbar">
                <Menu>
                    <Menu.Item name='Logo' active={activeItem === 'home'} onClick={this.handleItemClick} />
                    <Menu.Item className="space"
                        name='Mypost'
                        active={activeItem === 'messages'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item className="space"
                        name='Addpost'
                        active={activeItem === 'friends'}
                        onClick={this.handleItemClick}
                    />
                     <Menu.Item className="spaces"
                        name='Logout'
                        active={activeItem === 'friends'}
                        onClick={this.handleItemClick}
                    />
                </Menu>
           </div>
        )
    }
}
export function AddPost() {
  const [title, setTitle] = useState('');
  const [ setContent] = useState('');
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

}
return (
    <div className="form">
      <div className="form-body">
        <form onSubmit={handleSubmit}>
         <h2>Edit Post</h2>
         <div>
            <label htmlFor="title"> Title</label><br/><br/>
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
            />
            </div><br/>
            <div>
            <label htmlFor="content"> Content</label><br/>
            <textarea
                        type="textarea"
                        id="content"
                        name="content"
                        rows="6" 
                        cols="28"
                        ref={({required: true, maxLength: 3000})}
                    />
            </div><br/>
            <button type="submit">Submit</button>
        </form>
    
        </div>
        </div>
)
    
}
export default Navbar