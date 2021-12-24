

export default function Card({illu, bg, txt}) {
    return (
        <div id="card">
            <div id="imgWrapper">
                <img id="fore" src={illu} />
                <img id="back" src={bg} /> 
            </div>
            <h2>{txt}</h2>

            <style>{`
                #card {
                    position: relative;
                    width: 300px;
                    height: 220px;
                    background: #9145B6;
                    color: #FFF;
                    border-radius: 5px;
                }
                #card #imgWrapper {
                    width: 150px;
                    position: relative;
                    top: 40%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
                #card img {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
                #fore {
                    width: 100px;
                    z-index: 4;
                }
                #back {
                    width: 100%;
                    z-index: 2;
                }
                #card h2 {
                    position: absolute;
                    bottom: .3rem;
                    width: 100%;
                    padding: 1rem;
                    font-size: 1.2rem;
                    text-align: center;
                    letter-spacing: 2px;
                }
                @media screenand (max-width: 350px) {
                    #card {
                        width: 200px;
                        height: 120px;
                    }
                }
            `}</style>
        </div>
    )
}
