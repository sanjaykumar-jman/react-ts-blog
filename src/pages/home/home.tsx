import './Home.scss'

export default function Home() {
return (
  <div className="home">
    <div className="intro">
      <h1>Welcome to Our Blog</h1>
      <p>
        Discover amazing content from various authors. Explore, read, and share
        your thoughts with our community.
      </p>
    </div>
    <div className="features">
      <div className="feature">
        <h2>Explore Blogs</h2>
        <p>
          Browse through a wide range of topics and find articles that interest
          you.
        </p>
      </div>
      <div className="feature">
        <h2>Upload Your Own</h2>
        <p>
          Share your knowledge and experiences by uploading your own blog posts.
        </p>
      </div>
      <div className="feature">
        <h2>Join the Community</h2>
        <p>
          Engage with other readers and authors by leaving comments and
          feedback.
        </p>
      </div>
    </div>
    <div className="home-image">
      <img src="https://cdn.i-scmp.com/sites/default/files/d8/images/methode/2020/04/04/63e29408-740d-11ea-ab8f-988daf8efd6f_image_hires_110817.jpg" alt="Blogging" />
    </div>
  </div>
);
    
}