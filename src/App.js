import "./App.css";

function App() {
  return (
    <div className="flex h-screen justify-center items-center">
      <video
        className="m-auto"
		src="https://res.cloudinary.com/elizapardo/video/upload/vc_h264:main:3.1/v1668003184/ElizabethOpeningV2_nqqacn.mp4"
		type="video/mp4"
        autoPlay
        muted
      />
    </div>
  );
}

export default App;
