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
							className='section-title-gradient'
						>
							{props.title1}
						</span>
						<br />
						{props.title2}
					</h2>
					<p
						className='section-description'
					>
						{props.body}
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
						body='Clever solutions for interface design'
					/>
					<FeatureBox
						icon={<IconSolidBolt
							viewBox="0 0 24 24"
						/>}
						title='Rapid Prototyping'
						body='Validate ideas and concepts really fast'
					/>
					<FeatureBox
						icon={<IconLineCode
							viewBox="0 0 24 24"
						/>}
						title='Friendly Handoff'
						body='Ordered specs and assets for developers'
					/>
					<FeatureBox
						icon={<IconLineSearch
							viewBox="0 0 24 24"
						/>}
						title='End User-Centered'
						body='Co-create value and business with users'
					/>
					<FeatureBox
						icon={<IconLineUserPin
							viewBox="0 0 24 24"
						/>}
						title='Research-Driven'
						body='Continuous usability testing and research'
					/>
					<FeatureBox
						icon={<IconLineTarget
							viewBox="0 0 24 24"
						/>}
						title='Business oriented'
						body='Focus on improving the right goals'
					/>
				</div>
				<ButtonCta
					text='Know more about ultra powers'
				/>
			</section>
		</>
	)
}

export default SectionSkills
