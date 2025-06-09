import React, { useEffect, useState } from 'react';
import SearchBar from './search';

const HOST = "https://blog-l740.onrender.com"

 import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { IndivBlog } from './indiv';







  export const View = () => {
  const [posts, setPosts] = useState([]);



  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(`${HOST}/get-all`);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }

    fetchPosts();
  }, []);

  const deletePost = async (postId) => {
    try {
      const response = await fetch(`${HOST}/delete/${postId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setPosts(prev => prev.filter(post => post.id !== postId));
        const beb = posts.find(post => post.id === postId);
        toast(`Blog ${beb.title} Deleted Successfully!`);
      } else {
        console.error('Failed to delete post:', await response.text());
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

 

  return (
    <>
      
      <nav className="navbar bg-body-tertiary">
        <div className="Searcho">
          <div className="scubo">Search for your Blog!</div>
          <SearchBar placeholder={"Start Search!"} data={posts.map(post => ({title:post.title , id:post.id}))} />
        </div>
      </nav>

      <ul className="cont Vis-container">
        {posts.map(post => (
          <li key={post.id} className="post-item">
            <a
              href={`/blog?id=${post.id}`}
              className="testesty"
            >
              {post.title}
            </a>
            <button className="removal" onClick={() => deletePost(post.id)}>Remove</button>
            <p>{post.description}</p>
            
          </li>
        ))}
      </ul>

      <div className="main-footer">
        <div className="wordak">&copy; 2025 BlogCorp</div>
      </div>

      <style>{`
        .post-item {
            text-decoration: none;
          margin-bottom: 20px;
          border-bottom: 1px solid #eee;
          padding-bottom: 15px;
          color: white;
        }
        .removal {
          margin-left: 10px;
          background-color: #ff4d4d;
          color: white;
          border: none;
          padding: 5px 10px;
          border-radius: 40px;
          cursor: pointer;
        }
        .removal:hover {
          background-color: rgb(255, 0, 0);
        }
      `}</style>
    </>
  );
};