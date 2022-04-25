import { useState } from 'react';
import './App.css';
import GoToTop from './components/DOM events/GoToTop';
import Resize from './components/DOM events/Resize';
import CountDown from './components/Timer Function/CountDown';
import PreviewAvatar from './components/PreviewAvatar';
import FakeChatApp from './components/FakeChatApp';

function App() {
	const [show, setShow] = useState(false);

	return (
		<div style={{ padding: 20 }}>
			<button onClick={() => setShow(!show)}>show</button>
			{/* {show && <GoToTop />} */}
			{/* {show && <Resize />} */}
			{/* {show && <CountDown />} */}
			{/* {show && <PreviewAvatar />} */}
			{/* {show && <PreviewAvatar />} */}
			{show && <FakeChatApp />}
		</div>
	);
}

export default App;
