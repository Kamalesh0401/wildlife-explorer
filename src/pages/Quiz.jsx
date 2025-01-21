
import Header from '../components/Header';
import Footer from '../components/Footer';
import './style.css';
const Quiz = () => {
    return (<>
        <div className='quiz-header'>
            <Header></Header>
        </div>
        <div className='quiz-footer'>
            <Footer></Footer>
        </div>
    </>
    );
};

export default Quiz;