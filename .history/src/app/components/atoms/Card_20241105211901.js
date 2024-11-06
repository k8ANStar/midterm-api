
export default function Card({ title, imageUrl, date }) {
	return (
		<div
		
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
