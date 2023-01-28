function FeatureBox(props) {
	return (
		<>
			<div className="feature-content-big">
				<figure
					className="icon-box"
				>
					{props.icon}
				</figure>
				<div
					className="feature-group-texts"
				>
					<h3
						className="feature-title"
					>
						{props.title}
					</h3>
					<p
						className="feature-description"
					>
						{props.body}
					</p>
				</div>
			</div>
		</>
	)
}

export default FeatureBox
