import { useState, useEffect } from 'react';

const tabs = ['posts', 'albums', 'photos'];

function Content() {
	const [posts, setPosts] = useState([]);
	const [type, setType] = useState('posts');
	const [showGoToTop, setShowGoToTop] = useState(false);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/${type}`)
			.then((res) => res.json())
			.then((posts) => {
				setPosts(posts);
			});
	}, [type]);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY >= 400) {
				setShowGoToTop(true);
			} else {
				setShowGoToTop(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		console.log('addEventListener');

		//cleanup function
		return () => {
			window.removeEventListener('scroll', handleScroll);
			console.log('removeEventListener');
		};
	}, []);

	return (
		<div>
			{tabs.map((tab) => (
				<button
					key={tab}
					style={
						type === tab
							? { color: '#fff', backgroundColor: '#333' }
							: {}
					}
					onClick={() => setType(tab)}
				>
					{tab}
				</button>
			))}
			{posts.map((post) => (
				<li key={post.id}>{post.title}</li>
			))}
			{showGoToTop && (
				<button
					style={{
						position: 'fixed',
						right: '20px',
						bottom: '20px',
					}}
				>
					<a href="/#" style={{ textDecoration: 'none' }}>
						Go To Top
					</a>
				</button>
			)}
		</div>
	);
}

export default Content;
