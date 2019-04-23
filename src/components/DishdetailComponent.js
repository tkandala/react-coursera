import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

	constructor (props){
		super(props);
	}

	componentDidMount(){
		console.log('DishDetail Component componentDidMount invoked');
	}

	componentDidUpdate(){
		console.log('DishDetail Component componentDidUpdate invoked');
	}

	renderDish(dish){
		return(
			<Card>
				<CardImg width="100%" src={dish.image} alt={dish.name} />
				<CardBody>
					<CardTitle>{dish.name}</CardTitle>
					<CardText>{dish.description}</CardText>
				</CardBody>
			</Card>
		);
	}

	renderComments(comments){
		if (comments != null){
			const comment_list = comments.map((comment,key) => 
				<li key={comment.id}>
					<p>{comment.comment}</p>
					<p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
				</li>
			);
			return(
				<ul className="list-unstyled">
					{comment_list}
				</ul>
			);
		} else {
			return(
				<div></div>
			)
		}
	}

	render(){
		console.log('DishDetail Component render invoked');
		const dish = this.props.dish;
		if (dish != null){
	  		return (
	  			<div className="container">
					<div className="row">
						<div className="col-12 col-md-5 m-1">
							{this.renderDish(dish)}
						</div>
						<div className="col-12 col-md-5 m-1">
							<h4>Comments</h4>	
							{this.renderComments(dish.comments)}
						</div>
					</div>
	  			</div>
	  		);
	  	}
	  	else {
	  		return (
	  			<div></div>
	  		);
	  	}
	}

}

export default Dishdetail;