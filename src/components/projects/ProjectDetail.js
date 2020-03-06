import React from 'react';

const ProjectDetail = props => {
	// console.log(props);
	const id = props.match.params.id;
	return (
		<div className='container section project-details'>
			<div className='card z-depth-0'>
				<div className='card-content'>
					<span className='card-title'>Project Title - {id}</span>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
						odio incidunt quia ipsum voluptatibus labore deserunt dolores
						tenetur maxime quam voluptatum officia, esse aliquid deleniti
						veritatis facilis eum qui magnam non quas natus sequi vel porro
						dicta. Recusandae ipsam unde perferendis placeat cum, temporibus id
						dicta, voluptates vero rem et.
					</p>
				</div>
				<div className='card-action gret lighten-4 grey-text'>
					<div>Posted by The Net Ninja</div>
					<div>2nd Septemeber,2am</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetail;
