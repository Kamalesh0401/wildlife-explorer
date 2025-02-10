import './index.css';

const IndividualBlog = ({ individualBlog }) => {

    return (
        <>
            {/* Blog Details */}
            <div className="individual-blog-container">
                {individualBlog ? (
                    <>
                        {/* Blog Header */}
                        <div className="blog-hero">
                            <img src={individualBlog.image} alt={individualBlog.title} className="blog-hero-image" />
                            <h1 className="blog-title">{individualBlog.title}</h1>
                            <div className="blog-metadata">
                                <span>By {individualBlog.author}</span>
                                <span> | Published: {new Date(individualBlog.publishedDate).toLocaleDateString()}</span>
                                {individualBlog.updatedDate && (
                                    <span> | Updated: {new Date(individualBlog.updatedDate).toLocaleDateString()}</span>
                                )}
                            </div>
                        </div>

                        {/* Blog Content */}
                        <div className="blog-content">
                            <p>{individualBlog.content}</p>
                        </div>

                        {/* Blog Video */}
                        {individualBlog.video && (
                            <div className="blog-video">
                                <h2>Related Video</h2>
                                <video controls>
                                    <source src={individualBlog.video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        )}

                        {/* Blog Stats */}
                        <div className="blog-stats">
                            <span>👁️ {individualBlog.views} Views</span>
                            <span>❤️ {individualBlog.likes} Likes</span>
                        </div>

                        {/* Blog Tags */}
                        <div className="blog-tags">
                            <h3>Tags:</h3>
                            {individualBlog.tags.map((tag, idx) => (
                                <span key={idx} className="blog-tag">#{tag}</span>
                            ))}
                        </div>

                        {/* Comments Section */}
                        <div className="blog-comments">
                            <h3>Comments {individualBlog.comments?.length ? (individualBlog.comments?.length) : <span style={{ opacity: '0.7' }}>(no comments)</span>}</h3>
                            {individualBlog.comments?.map((comment) => (
                                <div key={comment._id} className="comment">
                                    <p><strong>{comment.userName}</strong>: {comment.commentText}</p>
                                    <span className="comment-date">
                                        {new Date(comment.commentedAt).toLocaleString()}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <p className="loading-message">Loading blog details...</p>
                )}
            </div>
        </>
    );
};

export default IndividualBlog;
