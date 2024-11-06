export default function Card({ title, imageUrl, date }) {
	return (
		<div
			style={{
				border: "1px solid #ccc",
				padding: "10px",
				width: "100%",
				maxWidth: "250px",
				textAlign: "center",
			}}
		>
			{imageUrl ? (
				<img
					src={imageUrl}
					alt={title}
					style={{ width: "100%", height: "auto" }}
				/>
			) : (
				<p>No Image</p>
			)}
			<h3>{title}</h3>
			<p>{date}</p>
		</div>
	);
}
