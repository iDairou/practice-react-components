import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

class Article extends React.Component {
	state = {
		content: "",
		comments: [],
	};

	renderComments() {
		const { comments } = this.state;

		return comments.map((comment) => {
			return <li>{comment}</li>;
		});
	}
	inputChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	};
	addComment(comment) {
		const trimmedComment = comment.trim();
		if (trimmedComment) {
			this.setState({
				comments: [...this.state.comments, trimmedComment],
				content: "",
			});
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const { content } = this.state;
		this.addComment(content);
		// this.setState({
		// 	content: "",
		// });
	};

	render() {
		const { title, body } = this.props;
		const { content } = this.state;
		return (
			<article>
				<h1>{title}</h1>
				<p>{body}</p>
				<section>
					<form onSubmit={this.handleSubmit}>
						<div>
							<label>
								<textarea
									value={content}
									onChange={this.inputChange}
									style={{ minWidth: "300px", minHeight: "120px" }}
									name="content"
								/>
							</label>
						</div>
						<div>
							<input type="submit" value={"dodaj komentarz"} />
						</div>
					</form>
					<ul>{this.renderComments()}</ul>
				</section>
			</article>
		);
	}
}

root.render(
	<Article
		title="Programowanie jest super!"
		body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
	/>
);
