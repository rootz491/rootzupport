// import HomeBtn from "../components/homeBtn.Js";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Cancel() {
    const router = useRouter();
    
    function goHome() {
        router.push('/');
    }

    return (
        <div id="cancel">
            <Head>
				<title>payment cancelled</title>
			</Head>


            <div id="wrapper">
                <div><img src="/plant.png" alt="plant img" /></div>
                <h1>Thankyou for showing your interest!</h1>
                <p>[payment cancelled]</p>
                
                <div id="btnWrapper">
                    <button onClick={goHome}>go to home</button>
                </div>

            </div>

            <style>{`
                #cancel { 
                    height: 100vh;
                    display: grid;
                    place-content: center;
                }
                #cancel #wrapper {
                    width: 300px;
                }
                #cancel #wrapper > div {
                    margin: auto;
                    width: 200px;
                }
                #cancel img {
                    width: 100%;
                    margin: auto;
                }
                #cancel h1 {
                    text-align: center;
                    margin-top: 1rem;
                }
                #cancel p {
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