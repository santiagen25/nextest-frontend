import React from 'react';

export default function LinkInLoginsRegisters({ text, url, linkText, classParent }) {
	return (
		<div className={classParent}>
			<p className="text-end">
				{text}
				<a href={url} className="ms-2 text-dark fw-bold">{linkText}</a>
			</p>
		</div>
	);
}
