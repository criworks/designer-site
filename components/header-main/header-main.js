import UrlResume from "../../data/url-resume.json"
import IconFile from "../../public/img/icon/solid/file.svg"
import IconMoon from "../../public/img/icon/solid/moon.svg"
import IconSun from "../../public/img/icon/solid/sun.svg"
import BrandIsoWhite from "../../public/img/brand/isotype/brand-iso-white.svg"
import BrandIsoColor from "../../public/img/brand/isotype/brand-iso-color.svg"
import ToggleDarkmode from "../toggle-dark-mode/toggle-dark-mode"
import { useState } from 'react'

function HeaderMain(props) {
	const [isDarkMode, setIsDarkMode] = useState(false)

	const changeComponent = () => {
        setIsDarkMode(!isDarkMode)
    }

	return (
		<>
			<header className='header-main-content'>
				<div className='group-logo'>
					<figure>
						<a
							className='brand-isotype'
							href='#top'
						>
							{isDarkMode ? <BrandIsoColor /> : <BrandIsoWhite />}
						</a>
					</figure>
					<div className='logo hide'>
						<a href='#top'>Cristopher Galarce</a>
					</div>
					<div className='pill-sky hide'>
						<p>Now available</p>
					</div>
				</div>
				<nav className='header-main-nav'>
					<ul>
						<li className='nav-button'>
							<a href='#top'>
								{props.text1}
							</a>
						</li>
						<li className='nav-button'>
							<a href='#top'>
								{props.text2}
							</a>
						</li>
						<li className='nav-button'>
							<a href='#top'>
								{props.text3}
							</a>
						</li>
						<li className='nav-button'>
							<a href='#top'>
								{props.text4}
							</a>
						</li>
					</ul>
				</nav>
				<div className='header-group-icons'>
					<figure className="button-icon-box">
						<a
							href={UrlResume["url-download-resume"]}
							target='_blank'
							rel='noopener noreferrer'
						>
							<IconFile />
						</a>
					</figure>
					<ToggleDarkmode
						iconToDark={<IconMoon />}
						iconToLight={<IconSun />}
						changeComponent={changeComponent}
					/>
				</div>
			</header>
		</>
	)
}

export default HeaderMain