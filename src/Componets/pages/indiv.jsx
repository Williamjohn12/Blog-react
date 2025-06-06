import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const HOST = "https://blog-react-6uzs.onrender.com";

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

  if (!post) return <div>Loading or Post not found...</div>;

  return (
    <div style={{ padding: '2rem', color: '#333', background: '#f8f9fa', fontFamily: 'Arial' }}>
      <h1>{post.title}</h1>
      <p><strong>Description:</strong> {post.description}</p>
      <div><strong>Content:</strong><br />{post.content}</div>
    </div>
  );
};