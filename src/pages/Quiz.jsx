import React, { useState } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Quiz.css';

const Quiz = () => {
    // Quiz data
    const questions = [
        {
            question: "1. What percentage of Earth's land area is covered by forests?",
            options: ["10%", "31%", "45%", "62%"],
            answer: "31%"
        },
        {
            question: "2. Which rainforest is known as the 'lungs of the Earth'?",
            options: ["Congo Rainforest", "Amazon Rainforest", "Daintree Rainforest", "Sundarbans"],
            answer: "Amazon Rainforest"
        },
        {
            question: "3. Which animal is critically endangered due to poaching?",
            options: ["Elephant", "Tiger", "Panda", "Koala"],
            answer: "Tiger"
        },
        {
            question: "4. What is the main cause of deforestation?",
            options: ["Urbanization", "Agriculture", "Logging", "All of the above"],
            answer: "All of the above"
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    // Handle answer click
    const handleAnswer = (selectedOption) => {
        if (selectedOption === questions[currentQuestion].answer) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowResult(true);
        }
    };

    return (
        <>
            {/* Header */}
            <div className="quiz-header">
                <Header />
            </div>

            {/* Quiz Section */}
            <div className="quiz-container">
                <section className="quiz-content">
                    {!showResult ? (
                        <div className="quiz-question-card">
                            <h2 className="quiz-question">{questions[currentQuestion].question}</h2>
                            <div className="quiz-options">
                                {questions[currentQuestion].options.map((option, index) => (
                                    <button
                                        key={index}
                                        className="quiz-option-btn"
                                        onClick={() => handleAnswer(option)}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="quiz-result">
                            <h2>Your Quiz Score</h2>
                            <p>
                                You scored <strong>{score}</strong> out of <strong>{questions.length}</strong>.
                            </p>
                            <button className="quiz-restart-btn" onClick={() => {
                                setScore(0);
                                setCurrentQuestion(0);
                                setShowResult(false);
                            }}>
                                Restart Quiz
                            </button>
                        </div>
                    )}
                </section>
            </div>

            {/* Footer */}
            <div className="quiz-footer">
                <Footer />
            </div>
        </>
    );
};

export default Quiz;