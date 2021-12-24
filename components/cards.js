import Card from "./card";

export default function Cards() {
    return (
        <div className="cards">
            <h1>You Support Can Be</h1>
            <div id="wrapper">
                <Card illu="illu_1.png" bg="bg_1.png" txt="A cup of Coffee  $5" />
                <Card illu="illu_2.png" bg="bg_2.png" txt="booster in studies   $12" />
            </div>


            <style>{`
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
