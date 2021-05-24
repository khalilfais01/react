import React from 'react';
import './Home.css'
function Home(props) {
	return (
		<div className="card-container">
                  <div>
			<header style={{backgroundColor: props.backgroundColor}}>
                        <h2 style={{color: props.color}}>{props.title}</h2>
                        <div className="star-left">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/505px-Red_star.svg.png" alt=""/>
				</div>
                        <div className="star-right">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/505px-Red_star.svg.png" alt=""/>
				</div>
                        <img src={props.src} className='img' alt={props.name} />
			</header>
			<h1 className="bold-text">
				{props.name} <span className="normal-text">Age {props.age}</span>
			</h1>
			<h2 className="normal-text">From {props.city}</h2>
                  <h2 className="skilles">Skills</h2>

			<div className="social-container">

				<div className="skill_1">
					<h1 className="bold-text-mobile">{props.skill_1}</h1>
					<h2 className="smaller-text">{props.name_skill_1}</h2>
				</div>
				<div className="skill_2">
					<h1 className="bold-text-mobile">{props.skill_2}</h1>
					<h2 className="smaller-text">{props.name_skill_2}</h2>
				</div>
				<div className="skill_3">
					<h1 className="bold-text-mobile">{props.skill_3}</h1>
					<h2 className="smaller-text">{props.name_skill_3}</h2>
				</div>
				<div className="skill_4">
					<h1 className="bold-text bold-text-mobile">{props.skill_4}</h1>
					<h2 className="smaller-text">{props.name_skill_4}</h2>
				</div>

			</div>
                  </div>
		</div>
	);
}


export default Home
