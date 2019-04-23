import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

	constructor (props){
		super(props);
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
			this.comment_list = comments.map((comment,key) => 
				<li>
					{comment.comment}<br/>
					-- {comment.author}, {comment.date}
				</li>
			);
			return(
				<ul className="list-unstyled">
					{this.comment_list}
				</ul>
			);
		} else {
			return(
				<div></div>
			)
		}
	}

	render(){
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