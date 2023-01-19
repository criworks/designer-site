function ButtonCta(props) {
	const handleClick = (e) => {
		e.preventDefault()
	}

	return (
		<>
			<button
				type="button"
				className='button button-cta'
				onClick={handleClick}
			>
				{props.label}
			</button>
		</>
	)
}

export default ButtonCta