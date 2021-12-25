import Banner from "../components/banner"
import Cards from "../components/cards"
import Nav from "../components/nav"

export default function Home() {
    return (
        <div>
			<Nav />
			<Banner />
			<Cards />

			<style>{`
				* {
					box-sizing: border-box;
					margin: 0;
					padding: 0;
				}
				main {
					padding: 1rem;
				}
			`}</style>
        </div>
    )
}
