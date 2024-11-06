import Head from "next/head";
import DataDisplay from "./components/molecules/DataDisplay";
//implementaton
// pick an api X
// build a button component that has a fetch action/clear action X
// build a component thats displays our data (should have an empty and fulfilled state) X
// build a function that will fetch some data X
// format and handle the data
// (error handling do on own)
// style our app and create breakpoints
//component for our button to sit in
// clean code

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
