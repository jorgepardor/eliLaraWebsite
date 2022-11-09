import "./App.css";

function App() {
	return (
		<div className="flex h-screen justify-center items-center">
			<video
				className="m-auto"
				src="https://res.cloudinary.com/elizapardo/video/upload/v1668003184/ElizabethOpeningV2_nqqacn.mp4"
				autoPlay
				muted
			/>
		</div>
	);
}

export default App;
