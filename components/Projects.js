import CardMedia from "@mui/material/CardMedia";

export default function Projects() {
    return (
        <div className='projects'>
            <h1>A Few Things I've Built</h1>
            <div className='projects-container'>
                <div className='meme'>
                    <div className='project-text'>
                        <h3>Meme Generator</h3>

                        <div className='project-description'>
                            <p>
                                A simple app that lets you choose an image and
                                you can input captions which come together and
                                create wonderful memes! Originally done as a
                                school project in ES5, rebuilt by me in ES6
                            </p>
                            <p style={{ marginTop: "2rem" }}>
                                While a simple project. It really helped with
                                the fundamentals of ES6 and how many things
                                changed with the update. Template literals were
                                something that I especially enjoyed using.
                            </p>
                        </div>
                        <div className='tools-used'>
                            <p>VS Code</p>
                            <p>JavaScript</p>
                            <p>HTML</p>
                            <p>CSS</p>
                        </div>
                        <div className='links'>
                            <p>GitHub</p>
                            <p>Website</p>
                        </div>
                    </div>
                    <div className='project-image'>
                        <CardMedia
                            className='js-meme-image'
                            component='img'
                            image='images/js-meme.jpg'
                            title='Meme Generator'
                        />
                    </div>
                </div>

                <div className='flix'>
                    <div className='project-text'>
                        <h3>Clint's Flix</h3>

                        <div className='project-description'>
                            <p>
                                An app that features the ability for a user to
                                login, create a watchlist, leave a review and
                                browse movies. This site uses The Movie Database
                                API to keep up to date with the latest film
                                releases.
                            </p>
                            <p style={{ marginTop: "2rem" }}>
                                This project helped me grasp certain core
                                concepts of React. I tried to push myself with
                                this project so that I could do a little bit of
                                everything. Overall, I am happy with how it
                                turned out. What started as a concept due to me
                                being upset with Netflixs' user interface grew
                                into a full fledged app that I can be proud of.
                            </p>
                        </div>
                        <div className='tools-used'>
                            <p>VS Code</p>
                            <p>React</p>
                            <p>Firebase</p>
                            <p>JavaScript</p>
                            <p>Material UI</p>
                            <p>Next.js</p>
                        </div>
                        <div className='links'>
                            <p>GitHub</p>
                            <p>Website</p>
                        </div>
                    </div>
                    <div className='project-image'>
                        <CardMedia
                            className='js-meme-image'
                            component='img'
                            image='images/clints-flix.jpg'
                            title='Meme Generator'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
