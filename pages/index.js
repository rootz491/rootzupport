import Banner from "../components/banner"
import Cards from "../components/cards"
import Nav from "../components/nav"
import Modal from "../components/modal"

export default function Home() {
    return (
        <div>
			<Nav />
			<Banner />
			<Cards />
			<Modal c={2} />

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
