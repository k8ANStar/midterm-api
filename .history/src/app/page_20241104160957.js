import Head from "next/head";
import DataDisplay from "../components/DataDisplay";

export default function Home() {
	return (
		<div className="container">
			<Head>
				<title>Met Museum Artworks</title>
			</Head>
			<h1>Met Museum Artworks</h1>
			<DataDisplay />
		</div>
	);
}
