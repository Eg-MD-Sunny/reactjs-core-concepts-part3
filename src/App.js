import './App.css';


function App() {
	return (
		<div className="App">	
			{/*Function Call*/}
			<Person></Person>
			<Person></Person>
			<Person></Person>
			<Person></Person>

			<h5>New Component YAY</h5>
			<p>Rock Mara React Mama</p>
			<Friend></Friend>
			<Friend></Friend>
			<Friend></Friend>
		</div>
	);
}

/*Create Function*/
function Person(){
	return (
		<div className='person'>
			<h1>Sakib Al Hasan</h1>
			<p>Profession: Cricket</p>
		</div>
	)
}
function Friend(){
	return (
		<div className="container">
			<h3>Name: Ajay Devgun</h3>
			<p>Job: Maramari</p>
		</div>
	)
}



export default App;
