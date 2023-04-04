import React, { useEffect, useState } from 'react'
import Admin_Sidebar from '../../components/admin-sidebar'
import UserList from '../../components/user-list'
import { FaTrash } from 'react-icons/fa'

function Posts({ post }) {
  const [data, setData] = useState([])
  useEffect(() => {
    getAllPosts();
  }, [])

  const  getAllPosts = () => {
    fetch("https://emowall-backend.onrender.com/getAllPosts",{
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "post");
        setData(data.data)
      })
  }

  const deletePost = (id, codename) => {
    if(window.confirm(`Are you sure you want to delete ${codename}`)){
      fetch("https://emowall-backend.onrender.com/deletePosts", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          postsid: id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.data)
          getAllPosts();
        })
    }else{

    }
  }

  return (
    <>
      <Admin_Sidebar />
      <div className="container">

        <div>
          <h2>Posts</h2>
          <table className='table'>

            <thead>
              <tr>
                <th>Codename</th>
                <th>Title</th>
                <th>Content</th>
                <th>Created At</th>
                <th>Delete</th>
              </tr>
              {data.map(i => {
                return(
                  <tr>
                    <td>{i.codename}</td>
                    <td>{i.title}</td>
                    <td>{i.summary}</td>
                    <td>{i.createdAt}</td>
                    <td>
                      <FaTrash onClick={() => deletePost(i._id,i.title)} />
                    </td>
                  </tr>
                )
              })}
            </thead>

            <tbody>

            </tbody>

          </table>
        </div>
      </div>
    </>
  )
}

export default Posts