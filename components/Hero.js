import ButtonSide from "./ButtonSide";
import ButtonMain from "./ButtonMain";

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
					<ButtonMain label='Get it now' />
					<ButtonSide label="Or book a free demo"/>
				</div>
			</main>
		</>
	)
}

export default Hero
