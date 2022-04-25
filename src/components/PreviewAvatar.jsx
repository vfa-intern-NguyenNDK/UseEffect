import React from 'react';
import { useState, useEffect } from 'react';

function PreviewAvatar() {
	const [showimg, setShowimg] = useState();

	useEffect(() => {
		return () => {
			showimg && URL.revokeObjectURL(showimg.preview);
		};
	}, [showimg]);

	const handlePreviewAvatar = (e) => {
		const file = e.target.files[0];

		file.preview = URL.createObjectURL(file);
		setShowimg(file);
		e.target.value = null;
	};

	return (
		<div>
			<input type="file" onChange={handlePreviewAvatar} />
			{showimg && <img src={showimg.preview} alt="" width="80%" />}
		</div>
	);
}

export default PreviewAvatar;
