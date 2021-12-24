
export default function Banner() {
    return (
        <div className="banner">
            <div className="headingWrapper">
                <h1>HEY, KARAN’S HERE</h1>
                <h1>AND THIS IS MY <br id="br" /> “SPONSOR ME” <br id="br2" /> PAGE!</h1>
            </div>

            <div className="btnWrapper">
                <button >Explore</button>
            </div>

            <img id="plantImg" src="/plant.png" loading="lazy" />
            <img id="manImg" src="/man.png" loading="lazy" />
            <style>{`
                .banner {
                    position: relative;
                    min-height: 350px;
                    background: #4C3F91;
                }
                .headingWrapper {
                    padding: 4em;
                    color: white;
                }
                .headingWrapper h1:last-child {
                    margin-left: 1rem;
                }
                .btnWrapper {
                    padding: 2rem;
                    display: flex;
                    justify-content: center;
                }
                .btnWrapper button {
                    margin: auto;
                    padding: .5rem 3rem;
                    background: #FF8A00;
                    font-size: 1.2rem;
                    color: #FFF;
                    border: none;
                    border-radius: 2px;
                    filter: drop-shadow(6px 6px 4px rgba(0, 0, 0, 0.25));
                    cursor: pointer;
                }
                br {
                    display: none;
                }
                #plantImg {
                    position: absolute;
                    bottom: 1.8rem;
                    left: 1.2rem;
                    width: 120px;
                }
                #manImg {
                    position: absolute;
                    bottom: -6rem;
                    right: 1.2rem;
                    width: 270px;
                }
                @media screen and (max-width: 900px) {
                    .banner h1 {
                        font-size: 1.5rem;
                        margin-bottom: .6rem;
                    }
                    #manImg {
                        width: 220px;
                    }
                }
                @media screen and (max-width: 700px) {
                    .banner h1 {
                        font-size: 1.2rem;
                    }
                    #manImg {
                        bottom: -3rem;
                        rihgt: .8rem;
                        width: 180px;
                    }
                }
                @media screen and (max-width: 600px) {
                    .banner {
                        min-height: 250px;
                    }
                    .headingWrapper {
                        padding: 2rem;
                    }
                    .btnWrapper {
                        position: relative;
                    }
                    .btnWrapper button {
                        position: absolute;
                        right: 2rem;
                    }
                    .banner h1 {
                        font-size: 1.2rem;
                        text-align: right;
                    }
                    #manImg {
                        bottom: -3rem;
                        left: .8rem;
                        width: 150px;
                    }
                    #plantImg {
                        display: none;
                    }
                }
                @media screen and (max-width: 480px) {
                    #br {
                        display: block;
                    }
                    .headingWrapper {
                        padding-bottom: .8rem;
                    }
                }
                @media screen and (max-width: 375px) {
                    .btnWrapper {
                        padding: 0;
                    }
                    br {
                        display: block;
                    }
                }
                `}</style>
        </div>
    )
}
