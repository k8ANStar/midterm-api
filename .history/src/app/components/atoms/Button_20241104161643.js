export default function Button({ onClick, children }) {
	return <button classNameonClick={onClick}>{children}</button>;
}
