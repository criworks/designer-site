import ButtonSide from "../button/button-side";
import ButtonCta from "../button/button-cta";

function Hero() {
	return (
		<>
			<main className='hero-content'>
				<div className='hero-group-texts'>
					<h1 className='hero-title'>
						<span className='text-gradient'>Delightful experiences </span>
						<br />
						for your users
					</h1>
					<p className='hero-description'>
						Cristopher Galarce is the product designer built for bring desirable
						apps to life.
					</p>
				</div>
				<div className='hero-group-buttons'>
					<ButtonCta
						label='Get it now'
					/>
					<ButtonSide
						label="Or book a free demo"
					/>
				</div>
			</main>
		</>
	)
}

export default Hero
