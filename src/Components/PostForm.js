import React, { Component } from 'react'
import axios from "axios"

export class PostList extends Component {

    constructor(props){
        super(props)

        this.state = {
            posts : [],
            error : ''
        }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            console.log(response)
            this.setState({posts : response.data})
        })
        .catch(error => {
            this.setState({error : "error recieving data"})
            console.log(this.state.error)
          })
    }

  render() {

    const PostList = this.state.posts.length ? this.state.posts.map(post => 
      <tr key = {post.id}>
        <th>{post.id}</th>
        <th>{post.title}</th>
        <th>{post.body}</th>
      </tr>) : null

    return (
      <>
        <h2>PostList</h2>
        <table className='post-list'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                  {PostList}
                </tbody>
            </table>
      </>
      
    )
  }
}

export default PostList