import ButtonSide from "../button/button-side";
import ButtonCta from "../button/button-cta";

function Hero() {
	return (
		<>
			<main className='content-hero'>
				<div className='group-texts-hero'>
					<h1 className='title-hero'>
						<span className='text-gradient'>Delightful experiences </span>
						<br />
						for your users
					</h1>
					<p className='description-hero'>
						Cristopher Galarce is the product designer built for bring desirable
						apps to life.
					</p>
				</div>
				<div className='group-buttons-hero'>
					<ButtonCta label='Get it now' />
					<ButtonSide label="Or book a free demo"/>
				</div>
			</main>
		</>
	)
}

export default Hero
