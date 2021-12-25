// import HomeBtn from "../components/homeBtn.Js";
import { useRouter } from "next/router"

export default function Success() {
    const router = useRouter();

    function goHome() {
        router.push('/');
    }

    return (
        <div id="success">

            <div id="wrapper">
                <div><img src="/plant.png" alt="plant img" /></div>
                <h1>arigato gozaimasu !</h1>
                <p>[payment successful]</p>
                <div id="btnWrapper">
                    <button onClick={goHome}>go to home</button>
                </div>
            </div>

            <style>{`
                #success { 
                    height: 100vh;
                    display: grid;
                    place-content: center;
                }
                #success #wrapper {
                    width: 300px;
                }
                #success #wrapper > div {
                    margin: auto;
                    width: 200px;
                }
                #success img {
                    width: 100%;
                    margin: auto;
                }
                #success h1 {
                    text-align: center;
                    margin-top: 1rem;
                }
                #success p {
                    text-align: center;
                }
                #btnWrapper {
                    display: flex;
                    justify-content: center;
                }
                #btnWrapper button {
                    width: 9em;
                    height: 3em;
                    border-radius: 30em;
                    font-size: 15px;
                    font-family: inherit;
                    border: none;
                    position: relative;
                    overflow: hidden;
                    z-index: 1;
                    box-shadow: 6px 6px 12px #c5c5c5,
                                -6px -6px 12px #ffffff;
                   }
                   
                #btnWrapper button::before {
                    content: '';
                    width: 0;
                    height: 3em;
                    border-radius: 30em;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background-image: linear-gradient(to right, #0fd850 0%, #f9f047 100%);
                    transition: .5s ease;
                    display: block;
                    z-index: -1;
                }
                   
                #btnWrapper button:hover::before {
                    width: 9em;
                }
            `}</style>
        </div>
    )
}