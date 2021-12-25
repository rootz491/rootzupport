import { useState, useRef, useEffect } from "react";
import Card from "./card";
import Modal from "./modal";

export default function Cards() {
    const [c, setC] = useState();
    const card1 = useRef();
    const card2 = useRef();

    useEffect(() => {
        if (c == 1) {
            card1.current.className = 'border';
            card2.current.className = '';
        }
        if (c == 2) {
            card1.current.className = '';
            card2.current.className = 'border';
        }
    }, [c])

    const updateC = (num) => {
        setC(num);
    }
    return (
        <div className="cards">
            <h1>You Support Can Be</h1>
            <div id="wrapper">
                <div ref={card1} onClick={()=>updateC(1)}>
                    <Card illu="illu_1.png" bg="bg_1.png" txt="A cup of Coffee  $5" />
                </div>
                <div ref={card2} onClick={()=>updateC(2)}>
                    <Card illu="illu_2.png" bg="bg_2.png" txt="booster in studies   $12" />
                </div>
            </div>
            { c ? <Modal c={c} /> : null}

            <style>{`
                .border {
                    outline: 4px solid #4C3F91;
                    border-radius: 10px;
                }
                .cards {
                    margin-top: 3rem;
                    padding: 1rem;
                }
                .cards h1 {
                    text-align: center;
                    padding: 0 .5rem;
                }
                .cards #wrapper {
                    margin: 3rem auto;
                    width: 60%;
                    display: flex;
                    justify-content: space-between;
                }
                @media screen and (max-width: 1050px) {
                    .cards #wrapper {
                        width: 80%;
                    }
                }
                @media screen and (max-width: 800px) {
                    .cards #wrapper {
                        width: 100%;
                    }
                    .cards h1 {
                        font-size: 1.5rem;
                    }
                }
                @media screen and (max-width: 800px) {
                    .cards #wrapper {
                        display: grid;
                        gap: 1rem;
                        justify-content: center;
                    }
                    .cards #wrapper > div:first-child {
                        margin-left: 1.3rem;
                    }
                    .cards #wrapper > div:last-child {
                        margin-right: 1.3rem;
                    }
                }
                @media screen and (max-width: 350px) {
                    .cards #wrapper {
                        display: grid;
                        gap: 1rem;
                        justify-content: center;
                    }
                    .cards #wrapper > div:first-child {
                        margin-left: 0;
                    }
                    .cards #wrapper > div:last-child {
                        margin-right: 0;
                    }
                }
            `}</style>
        </div>
    )
}
