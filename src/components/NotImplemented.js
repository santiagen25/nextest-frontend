import React from 'react';
import { usePageTitle } from '../hooks/usePageTitle';

export default function NotImplemented() {
	usePageTitle('sitio.enConstruccion');

	return (
		<div style={{ padding: '2rem', textAlign: 'center' }}>
			<h1>🚧 Sitio en construcción 🚧</h1>
			<p>Esta pantalla aún no está implementada.</p>
		</div>
	);
}
