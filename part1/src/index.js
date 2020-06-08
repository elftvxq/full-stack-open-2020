import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
	return (
		<div>
			<h1>{props.course}</h1>
		</div>
	)
}

const Content = (props) => {
	return (
		<>
			<Part part1={props.part1} exercise1={props.exercise1} />
			<Part part2={props.part2} exercise2={props.exercise2} />
			<Part part3={props.part3} exercise2={props.exercise3} />
		</>
	)
}

const Part = (props) => {
	return (
		<>
			<p>
				{props.part1}{props.exercise1}
				{props.part2}{props.exercise2}
				{props.part3}{props.exercise3}
			</p>
		</>
	)
}

const Total = (props) => {
	return (
		<>
			<p> Number of exercises {props.exercise1 + props.exercise2 + props.exercise3}</p>
		</>
	)
}

const App = () => {
	const course = 'Half Stack application development'
	const part1 = 'Fundamentals of React'
	const exercise1 = 10
	const part2 = 'Using props to pass data'
	const exercise2 = 7
	const part3 = 'State of component'
	const exercise3 = 14

	return (
		<div>
			<Header course={course} />
			<Content part1={part1} part2={part2} part3={part3} exercise1={exercise1} exercise2={exercise2} exercise3={exercise3} />
			<Total exercise1={exercise1} exercise2={exercise2} exercise3={exercise3} />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
