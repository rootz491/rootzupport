import Banner from "../components/banner"
import Cards from "../components/cards"
import Nav from "../components/nav"
import Head from "next/head";

export default function Home() {
    return (
        <div>
			<Head>
				<title>sponsor rootz</title>
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>
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
