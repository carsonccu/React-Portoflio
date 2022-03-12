import './about.css'
import React from 'react';
import image3 from "my-react-app/src/images/80716109.jpg";
import Typed from 'typed.js'


export default function Intro() {
    const el = React.useRef(null);
    // Create reference to store the Typed instance itself
    const typed = React.useRef(null);

    React.useEffect(() => {
        const options = {
            strings: [
                'Hi... My Name is Carson Colgate',
                "I am a full-stack developer"
            ],
            typeSpeed: 50,
            backSpeed: 50,
        };
        typed.current = new Typed(el.current, options);

        return () => {

            typed.current.destroy();
        }
    }, [])

    return <div className='intro'>

        <div class='row'>
            <img src={image3} style={{ width: '40%', height: '30%', display: 'block', marginTop: '2%', marginLeft: 'auto', marginRight: 'auto', }} alt="Logo" />
            <h1 style={{ whiteSpace: 'pre', textAlign: 'center', marginTop: '4%' }} ref={el}></h1>

            <article style={{ marginLeft: '20%', marginRight: '20%', width: '60%', textAlign: 'center', PaddingTop: '1rem', PaddingBottom: '1rem' }}> My full name is Carson John Wayne Colgate. I've been a bar manager and mixologist helping revamp restaurant's cocktail and beverage programs. I've spent my time understanding peoples likes and dislikes and have decided upon a new career path of learning the likes and dislikes in the world of web development. I have a small family consisting of my girlfriend and our princess Colorado Mountain dog named Elsa. We enjoy the outdoors skiing ⛷ , hiking 🥾 , and we love hot springs 🏊 .
            </article>
        </div>
    </div >

}
