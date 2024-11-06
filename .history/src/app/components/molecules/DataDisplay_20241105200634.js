"use client";
import { useState } from "react";
import Card from "../atoms/Card";
import Button from "../atoms/Button";

export default function DataDisplay() {
	const [data, setData] = useState([]);
	const [error, setError] = useState("");

	const fetchData = async () => {
		try {
			setError("");

			// Fetch data from the Met Museum API
			const response = await fetch(
				"https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=sunflowers"
			);
			const result = await response.json();

			// Fetch details for the first 5 objects
			const promises = result.objectIDs
				.slice(0, 8)
				.map((id) =>
					fetch(
						`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
					).then((res) => res.json())
				);

			const artworks = await Promise.all(promises);
			setData(artworks);
		} catch (error) {
			setError("Failed to load data. Please try again.");
		}
	};

	const clearData = () => {
		setData([]);
	};

	return (
		<div>
			<Button onClick={fetchData}>Fetch Artworks</Button>
			<Button onClick={clearData}>Clear Artworks</Button>
			{error && <p>{error}</p>}
			<div className="cards">
				{data.map((item) => (
					<Card
						key={item.objectID}
						title={item.title}
						imageUrl={item.primaryImage}
						date={item.objectDate}
					/>
				))}
			</div>
		</div>
	);
}
