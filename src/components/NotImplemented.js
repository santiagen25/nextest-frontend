import { t } from 'i18next';
import { usePageTitle } from '../hooks/usePageTitle';

export default function NotImplemented() {
	usePageTitle('sitio.enConstruccion');

	return (
		<div style={{ padding: '2rem', textAlign: 'center' }}>
			<h1>🚧 {t('notImplemented.screenUnderConstruction')} 🚧</h1>
			<p>{t('notImplemented.thisScreenIsNotImplemented')}</p>
		</div>
	);
}
