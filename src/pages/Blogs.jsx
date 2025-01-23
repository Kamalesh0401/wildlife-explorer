
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Blogs.css';
import { useState, useEffect } from 'react';

const Blogs = () => {

    const [blogData, setBlogData] = useState(null);
    const [individualBlogs, setIndividualBlogs] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8080/blogs/")
            .then((res) => res.json())
            .then((response) => setBlogData(response));
    }, []);

    const getBlogsDetailsById = (id) => {
        console.log('blogData : ', blogData);
        console.log('individualBlogs : ', individualBlogs);
        console.log('getBlogsDetailsById : ', id);
        fetch(`http://localhost:8080/blogs/${id}`)
            .then((res) => res.json())
            .then((response) =>
                setIndividualBlogs(response));

    }

    return (
        <>
            {/* Header */}
            <div className="blog-header">
                <Header />
            </div>

            {/* Main Blog Section */}
            <div className="blog-container">
                {blogData && blogData.map((blog, index) => (
                    <div className="blog-card" key={index}>
                        {/* Blog Image */}
                        <div className="blog-image">
                            <img src={blog.image} alt={blog.title} />
                        </div>

                        {/* Blog Content */}
                        <div className="blog-content">
                            <h2 className="blog-title">{blog.title}</h2>
                            <p className="blog-summary">{blog.summary}</p>

                            {/* Blog Metadata */}
                            <div className="blog-metadata">
                                <span>By {blog.author}</span>
                                <span> | Published: {new Date(blog.publishedDate).toLocaleDateString()}</span>
                            </div>

                            {/* Blog Tags */}
                            <div className="blog-tags">
                                {blog.tags.map((tag, idx) => (
                                    <span key={idx} className="blog-tag">
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            {/* Read More Button */}
                            <button className="read-more-btn"
                                onClick={() =>
                                    getBlogsDetailsById(blog._id)
                                }
                            >Read More</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="blog-footer">
                <Footer />
            </div>
        </>
    );
};


export default Blogs;