function ButtonMain(props) {
	const handleClick = (e) => {
		e.preventDefault()
	}

	return (
		<>
			<button
				className='button button-main'
				onClick={handleClick}
			>
				{props.label}
			</button>
		</>
	)
}

export default ButtonMain