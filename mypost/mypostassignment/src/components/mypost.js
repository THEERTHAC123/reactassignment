import React from "react"
import './mypost.css';
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
                    <Menu.Item className="nav"
                        name='Mypost'
                        active={activeItem === 'messages'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item className="nav"
                        name='Addpost'
                        active={activeItem === 'friends'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item className="navs"
                        name='Logout'
                        active={activeItem === 'friends'}
                        onClick={this.handleItemClick}
                    />
                </Menu>
           </div>
        )
    }
}
export  function EditableTable() {
  return (
    <div className="form">
       <div className="form-body">
    <div>
      <h2>My Post</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Title</th>
            <th>Content</th>
            <th>Action</th>
          </tr>
          </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Post 1</td>
            <td>hhhhh</td>
            <td><button type="button">Update</button><br/><br/>
                <button type="button">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
    </div>
  )
}
export default Navbar