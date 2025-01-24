
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Community.css';

const Community = () => {
    return (
        <>
            {/* Header */}
            <div className="community-header">
                <Header />
            </div>

            {/* Community Main Content */}
            <main className="community-main">
                {/* Hero Section */}
                <section className="community-hero-section">
                    <h1>Welcome to Our Wildlife Community</h1>
                    <p>
                        Join a growing community of wildlife enthusiasts, nature lovers, and conservationists. Together, we can make a difference for endangered species and the planet.
                    </p>
                    <a href="/join" className="cta-button">Join the Community</a>
                </section>

                {/* Community Features Section */}
                <section className="community-features-section">
                    <div className="feature-card">
                        <h2>Connect</h2>
                        <p>Meet like-minded individuals who share your passion for wildlife and nature conservation.</p>
                    </div>
                    <div className="feature-card">
                        <h2>Learn</h2>
                        <p>Access exclusive resources, articles, and news to expand your knowledge about wildlife.</p>
                    </div>
                    <div className="feature-card">
                        <h2>Contribute</h2>
                        <p>Participate in conservation programs, spread awareness, and support ongoing efforts.</p>
                    </div>
                </section>

                {/* Take a Quiz Section */}
                <section className="community-quiz-section">
                    <h2>How Much Do You Know About Wildlife?</h2>
                    <p>Test your knowledge about wildlife, endangered species, and conservation efforts by taking our fun quiz!</p>
                    <a href="/quiz" className="cta-button">Take the Quiz</a>
                </section>

                {/* Community Testimonials Section */}
                <section className="community-testimonials-section">
                    <h2>What Our Members Say</h2>
                    <div className="testimonial">
                        <p>"Being part of this community has opened my eyes to the importance of protecting wildlife."</p>
                        <span>- Surya, Community Member</span>
                    </div>
                    <div className="testimonial">
                        <p>"I love the quizzes and resources. They make learning about wildlife so much fun!"</p>
                        <span>- Kamalesh, Wildlife Enthusiast</span>
                    </div>
                </section>

                {/* Call to Action Section */}
                <section className="community-cta-section">
                    <h2>Become a Wildlife Hero</h2>
                    <p>Join us in our mission to protect wildlife and inspire others to care for nature. Together, we can make a lasting impact.</p>
                    <a href="/contact" className="cta-button">Join Now</a>
                </section>
            </main>

            {/* Footer */}
            <div className="community-footer">
                <Footer />
            </div>
        </>
    );
};

export default Community;