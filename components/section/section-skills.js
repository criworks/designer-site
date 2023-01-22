import FeatureBox from "../feature/feature-box"
import ButtonCta from "../button/button-cta"
import IconLineMagic from "../../public/img/icon/line/magic.svg"
import IconSolidBolt from "../../public/img/icon/solid/bolt.svg"
import IconLineCode from "../../public/img/icon/line/code.svg"
import IconLineSearch from "../../public/img/icon/line/search.svg"
import IconLineUserPin from "../../public/img/icon/line/user-pin.svg"
import IconLineTarget from "../../public/img/icon/line/target.svg"

function SectionSkills(props) {
	return (
		<>
			<section
				id='Discover'
				className='section-container'
			>
				<div
					className='section-group-texts'
				>
					<h2
						className='section-title'
					>
						<span
							className='text-gradient'
						>
							{props.h2FirstLine}
						</span>
						<br />
						{props.h2SecondLine}
					</h2>
					<p
						className='section-description'
					>
						{props.description}
					</p>
				</div>
				<div
					className='features-group'
				>
					<FeatureBox
						icon={<IconLineMagic
							viewBox="0 0 24 24"
						/>}
						title='Subtle Visual Design'
						description='Clever solutions for interface design'
					/>
					<FeatureBox
						icon={<IconSolidBolt
							viewBox="0 0 24 24"
						/>}
						title='Rapid Prototyping'
						description='Validate ideas and concepts really fast'
					/>
					<FeatureBox
						icon={<IconLineCode
							viewBox="0 0 24 24"
						/>}
						title='Friendly Handoff'
						description='Ordered specs and assets for developers'
					/>
					<FeatureBox
						icon={<IconLineSearch
							viewBox="0 0 24 24"
						/>}
						title='End User-Centered'
						description='Co-create value and business with users'
					/>
					<FeatureBox
						icon={<IconLineUserPin
							viewBox="0 0 24 24"
						/>}
						title='Research-Driven'
						description='Continuous usability testing and research'
					/>
					<FeatureBox
						icon={<IconLineTarget
							viewBox="0 0 24 24"
						/>}
						title='Business oriented'
						description='Focus on improving the right goals'
					/>
				</div>
				<ButtonCta
					label='Know more about ultra powers'
				/>
			</section>
		</>
	)
}

export default SectionSkills
