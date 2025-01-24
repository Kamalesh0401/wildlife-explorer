import Header from '../components/Header';
import Footer from '../components/Footer';
import IndividualBlog from '../components/IndividualBlog';
import './Blogs.css';
import { useState, useEffect } from 'react';

const Blogs = () => {
    const [blogData, setBlogData] = useState(null);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch("http://localhost:8080/blogs/");
                const response = await res.json();
                setBlogData(response);
            } catch (ex) {
                console.error("Error fetching blog data: ", ex);
            }
        };

        fetchBlogs();
    }, []);

    const fetchBlogDetailsById = async (id) => {
        setLoading(true);
        try {
            const res = await fetch(`http://localhost:8080/blogs/${id}`);
            const response = await res.json();
            setSelectedBlog(response);
        } catch (ex) {
            console.error("Error fetching individual blog data: ", ex);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Header */}
            <div className="blog-header">
                <Header />
            </div>

            {/* Main Blog Section */}
            <div className="blog-container">
                {selectedBlog ? (
                    // Individual Blog View
                    <div className="individual-blog">
                        <button className="back-button" onClick={() => setSelectedBlog(null)}>
                            ← Back to Blogs
                        </button>
                        <IndividualBlog individualBlog={selectedBlog} />
                    </div>
                ) : (
                    // Blog List View
                    <>
                        {blogData && blogData.length > 0 ? (
                            blogData.map((blog, index) => (
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
                                                <span key={idx} className="blog-tag">#{tag}</span>
                                            ))}
                                        </div>

                                        {/* Read More Button */}
                                        <button
                                            className="read-more-btn"
                                            onClick={() => fetchBlogDetailsById(blog._id)}
                                            disabled={loading}
                                        >
                                            {loading ? "Loading..." : "Read More"}
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="loading-message">Loading blogs...</p>
                        )}
                    </>
                )}
            </div>

            {/* Footer */}
            <div className="blog-footer">
                <Footer />
            </div>
        </>
    );
};

export default Blogs;
