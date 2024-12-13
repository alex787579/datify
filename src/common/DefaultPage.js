import React from 'react';
import './DefaultPage.css'; // Assuming you move styles to this CSS file
// E:\dating-react\datify\src\common\DefaultPage.css
const DefaultPage = React.memo(() => {
    return (
        <div>
            {/* Fixed Login Button */}
            <a href="/login" className="btn btn-outline-light position-fixed" style={fixedButtonStyle}>
                Login
            </a>

            {/* Hero Section */}
            <div className="hero">
                <div className="container">
                    <h1>Welcome to Datify</h1>
                    <p>Find your perfect match today!</p>
                    <a href="/signup" className="btn btn-danger btn-lg">Join Now</a>
                    <a href="/matches" className="btn btn-outline-light btn-lg">Learn More</a>
                </div>
            </div>

            {/* Features Section */}
            <div className="container features mt-5">
                <h2>Why Choose Us?</h2>
                <div className="row">
                    {featuresData.map((feature, index) => (
                        <div key={index} className="col-md-4">
                            <div className="work-box">
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* How It Works Section */}
            <div className="container how-it-works text-center my-5">
                <h2>How It Works</h2>
                <div className="row">
                    {howItWorksData.map((step, index) => (
                        <div key={index} className="col-md-4">
                            <div className="work-box">
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="container testimonials text-center my-5">
                <h2>What Our Users Say</h2>
                <div className="row">
                    {testimonialsData.map((testimonial, index) => (
                        <div key={index} className="col-md-4">
                            <div className="testimonial-box">
                                <p>{testimonial.quote}</p>
                                <h5>- {testimonial.author}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Call to Action Section */}
            {/* <div className="container text-center my-5">
                <h2>Ready to Find Love?</h2>
                <a href="#join" className="btn btn-danger btn-lg">Join Now</a>
            </div> */}

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2024 Datify. All rights reserved.</p>
                <a href="#">Privacy Policy</a> | 
                <a href="#">Terms of Service</a>
            </footer>
        </div>
    );
});

// Fixed button style
const fixedButtonStyle = {
    top: '20px',
    right: '20px'
};

// Data arrays for features, steps, and testimonials
const featuresData = [
    { title: 'Safe & Secure', description: 'Your safety and privacy are our top priority.' },
    { title: 'Personalized Matches', description: 'Get matched with people tailored to your interests.' },
    { title: 'Fun Events', description: 'Join community events and meet new people.' },
];

const howItWorksData = [
    { title: 'Step 1: Sign Up', description: 'Create a free account and complete your profile.' },
    { title: 'Step 2: Get Matched', description: 'We use our algorithm to find your perfect match.' },
    { title: 'Step 3: Start Chatting', description: 'Connect and start conversations with potential matches.' },
];

const testimonialsData = [
    { quote: '"I found my soulmate on Datify! Highly recommend it!"', author: 'Emma R.' },
    { quote: '"Fantastic experience! The events are so much fun."', author: 'Jake L.' },
    { quote: '"The matches are spot on. I\'ve met some amazing people."', author: 'Sarah T.' },
];

export default DefaultPage;
