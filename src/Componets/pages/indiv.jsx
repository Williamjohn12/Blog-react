import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
 import { toast } from 'react-toastify';

const HOST = "https://blog-l740.onrender.com";

export const IndivBlog = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const [post, setPost] = useState(null);

 

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch(`${HOST}/get/${id}`);
        if (!res.ok) throw new Error('Post not found');
        const data = await res.json();
        setPost(data);
      } catch (err) {
        console.error("Error fetching post:", err);
      }
    }

    if (id) fetchPost();
  }, [id]);

  if (!post) return <div className='loadao'>Loading or Post not found...
  <img className='loadba-gif' src='https://global.discourse-cdn.com/sitepoint/original/3X/e/3/e352b26bbfa8b233050087d6cb32667da3ff809c.gif'/>
   <p className="spacemaker"> . . . . </p>If nothing appears within a few seconds, try searching for it <a href="/view">here</a>.
  </div>;

  const deletePost = async (postId) => {
    try {
      const response = await fetch(`${HOST}/delete/${postId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
                toast(`This Blog has been Deleted Successfully! It will disappear in a few seconds!`, { pauseOnHover: false });
                setTimeout(function() {
  window.location.reload();
}, 6000);
      } else {
        console.error('Failed to delete post:', await response.text());
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div style={{ padding: '40px 30px 70px', color: '#333', background: 'rgb(61, 101, 102)', fontFamily: 'Arial',margin: '100px auto 20px' , borderRadius: '10px', maxWidth: '800px', textAlign: 'center' }}>
      <h1 className="title-indiv">{post.title}</h1>
      
      <div className="content-indiv"><strong>Content:</strong><br />{post.content}</div>
      <button className="removal" onClick={() => deletePost(post.id)}>Delete</button>
    </div>
  );
};

//style={{ padding: '2rem', color: '#333', background: '#f8f9fa', fontFamily: 'Arial' }}