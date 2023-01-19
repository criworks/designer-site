import UrlResume from "../../data/url-resume.json"
import IconFile from "../../public/img/icon/solid/file.svg"
import IconMoon from "../../public/img/icon/solid/moon.svg"
import BrandMain from "../../public/img/brand/isotype/main.svg"

function HeaderMain() {
	return (
		<>
			<header className='header-main'>
				<div className='group-logo'>
					<figure>
						<a className='brand-isotype-header' href='#top'>
							<BrandMain />
						</a>
					</figure>
					<div className='logo hide'>
						<a href='#top'>Cristopher Galarce</a>
					</div>
					<div className='pill-sky hide'>
						<p>Now available</p>
					</div>
				</div>
				<nav className='nav-main-header'>
					<ul>
						<li className='nav-button'>
							<a href='#top'>Discover</a>
						</li>
						<li className='nav-button'>
							<a href='#top'>How it works</a>
						</li>
						<li className='nav-button'>
							<a href='#top'>Features</a>
						</li>
						<li className='nav-button'>
							<a href='#top'>Contact</a>
						</li>
					</ul>
				</nav>
				<div className='group-icons-header'>
					<figure className="icon-link-box icon-grey-to-purp">
						<a
							href={UrlResume["url-download-resume"]}
							target='_blank'
							rel='noopener noreferrer'
						>
							<IconFile />
						</a>
					</figure>
					<figure className='icon-link-box icon-grey-to-purp hide'>
						<a href='#top'>
							<IconMoon />
						</a>
					</figure>
				</div>
			</header>
		</>
	)
}

export default HeaderMain