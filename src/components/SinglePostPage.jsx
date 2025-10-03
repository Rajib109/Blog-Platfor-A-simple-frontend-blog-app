import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; 

export default function SinglePostPage() {
  const { postId } = useParams();

  const post = useSelector((state) => 
    state.posts.items.find((post) => post.id === Number(postId))
  );

  if (!post) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Post not found!</h2>
        <Link to="/">&larr; Back to Home</Link>
      </div>
    );
  }
return (
<div className="card bg-base-100 image-full w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{post.title}</h2>
    <p>{post.body}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
);
}