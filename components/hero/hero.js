import ButtonSide from "../button/button-side"
import ButtonCta from "../button/button-cta"

const Hero = (props) => {
	return (
		<>
			<main className='hero-content'>
				<div className='hero-group-texts'>
					<h1 className='hero-title'>
						<span className='text-gradient'>
							{props.title1}
						</span>
						<br />
						{props.title2}
					</h1>
					<p className='hero-description'>
						{props.body}
					</p>
				</div>
				<div className='hero-group-buttons'>
					<ButtonCta
						text='Get it now'
					/>
					<ButtonSide
						text="Or book a free demo"
					/>
				</div>
			</main>
		</>
	)
}

export default Hero
