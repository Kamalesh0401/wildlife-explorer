
import Header from '../components/Header';
import Footer from '../components/Footer';
import './home.css';


const Home = () => {
    return (
        <>
            <div className="home-header">
                <Header />
            </div>

            <div className="home-container">
                {/* Hero Section */}
                <section className="hero-section animate fade-in">
                    <h1 className="hero-title">
                        Welcome to <span>Wildlife Explorer</span>!
                    </h1>
                    <p className="hero-subtitle">
                        Dive into the wonders of the wild and explore the beauty of nature like never before.
                    </p>
                    <a href="/forestexplorer" className="explore-btn">Explore Forests</a>
                </section>

                {/* Facts Section */}
                <section className="facts-section animate slide-up">
                    <h2>Did You Know?</h2>
                    <ul>
                        <li>
                            <strong>Forests cover 31%</strong> of Earth's land area and are home to over 80% of terrestrial species.
                        </li>
                        <li>
                            The Amazon Rainforest produces <strong>20% of the world's oxygen</strong>.
                        </li>
                        <li>
                            Deforestation contributes to <strong>15% of global greenhouse gas emissions</strong>.
                        </li>
                        <li>
                            Some species, like the tiger and orangutan, are critically endangered due to habitat loss.
                        </li>
                    </ul>
                </section>
                {/* <section className="cta-section animate zoom-in">
                    <h2>Join the Adventure</h2>
                    <p>
                        Discover forests, wildlife, threats, and much more. Let’s start your adventure into the wild and make a difference for future generations.
                    </p>
                    <a href="/forestexplorer" className="cta-btn">Start Exploring</a>
                </section> */}
            </div>

            <div className="home-footer">
                <Footer />
            </div>
        </>
    );
};


export default Home;