import { React } from 'react';
import '../public/home.css';

function Home() {
    return (
        <div className="content">
            <a href="/quotes"><button style={{ backgroundImage: 'url("/got.avif")' }}><span>Quotes</span></button></a>
            <a href="/markdown"><button style={{ backgroundImage: 'url("/binary.jpg")' }}><span>Markdown Compiler</span></button></a>
            <a href="/drum"><button style={{ backgroundImage: 'url("/drumjpg.jpg")' }}><span>Drums</span></button></a>
            <a href="/calculator"><button style={{ backgroundImage: 'url("/calculator.jpg")' }}><span>Calculator</span></button></a>
            <a href="/25clock"><button style={{ backgroundImage: 'url("/sand clock.jpg")' }}><span>Pomodoro Clock</span></button></a>
        </div>
    );
}

export default Home;
