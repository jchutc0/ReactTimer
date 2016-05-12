var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
	return (
		<div className="top-bar">
			<div className="top-bar-left">
				<ul className="menu">
					<li className="menu-text">React Time App</li>
					<li>
						<IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
					</li>
					<li>
						<Link to="/countdown" activeClassName="active-link">Countdown</Link>
					</li>
				</ul>
			</div>
			<div className="top-bar-right">
				<ul className="menu">
					<li className="menu-text">by <a href="http://lunchtimedang.com/" target="_new">Casey Hutchinson</a></li>
				</ul>
			</div>
		</div>
	)
};

module.exports = Nav;
