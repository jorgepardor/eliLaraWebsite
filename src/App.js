import "./App.css";

function App() {
	return (
		<div className="App grow">
			<header className="flex h-96">

				<div className="mt-48 mx-auto">
					<video
						className="m-auto"
						src="https://res.cloudinary.com/elizapardo/video/upload/v1657467828/ElizabethLaraMainVideo_ahiiws.mp4"
						autoPlay
						muted
					/>
				</div>

				{/* <img
					className="mt-60 w-2/3 md:w-1/3 lg:2/5 m-auto max-w-lg"
					src="https://res.cloudinary.com/elizapardo/image/upload/v1655667645/Artboard-1-copy_eewqjy.webp"
					alt="logo"
				/> */}

			</header>
		</div>
	);
}

export default App;
