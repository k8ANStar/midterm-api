"use client";
import { useState, useEffect } from "react";
import Card from "../atoms/Card";
import Button from "../atoms/Button";

export default function DataDisplay() {
	const [data, setData] = useState([]);
	const [error, setError] = useState("");

	const fetchData = async () => {
		try {
			setError("");
			const response = await fetch(
				"https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=cat"
			);
			const result = await response.json();

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

	// Only fetch data when the component mounts on the client side
	useEffect(() => {
		fetchData();
	}, []);

	const clearData = () => {
		setData([]);
	};

	return (
		<div >
			<div className={styles.buttonContainer}>
				<Button onClick={fetchData}>Fetch Artworks</Button>
				<Button onClick={clearData}>Clear Artworks</Button>
			</div>
			{error && <p className={styles.errorText}>{error}</p>}
			<div className={styles.cardsContainer}>
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
