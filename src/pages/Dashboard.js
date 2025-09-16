import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';
import LinkInLoginsRegisters from '../components/LinkInLoginsRegisters';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Dashboard() {
	const { t } = useTranslation();

	usePageTitle('dashboard.title');

	return (
		<div>
			<div style={{ padding: '2rem' }}>
				<h1>{t('dashboard.bienvenido')}</h1>
				<p>Aquí podrás ver el resumen de tu actividad.</p>

				{/* Aquí puedes meter widgets, estadísticas, etc. */}
				<div style={{ marginTop: '2rem' }}>
					<h2>Resumen</h2>
					<ul>
						<li>Sesiones activas: 3</li>
						<li>Último acceso: 21/05/2025</li>
						<li>Notificaciones: 5 nuevas</li>
					</ul>
				</div>

				<div className="my-5">
					<div className="d-flex justify-content-start">
						<LinkInLoginsRegisters
							text={t('createProject.title')}
							url="/create-project"
							linkText={t('general.ir')}
							classParent={"mb-1"}
						/>
					</div>

					<div className="d-flex justify-content-start">
						<LinkInLoginsRegisters
							text={t('configurateProject.title')}
							url="/configurate-project"
							linkText={t('general.ir')}
							classParent={"mb-1"}
						/>
					</div>

					<div className="d-flex justify-content-start">
						<LinkInLoginsRegisters
							text={t('assignProfiles.title')}
							url="/assign-profiles"
							linkText={t('general.ir')}
							classParent={"mb-1"}
						/>
					</div>

					<div className="d-flex justify-content-start">
						<LinkInLoginsRegisters
							text={t('testingProcess.title')}
							url="/testing-process"
							linkText={t('general.ir')}
							classParent={"mb-1"}
						/>
					</div>

					<div className="d-flex justify-content-start">
						<LinkInLoginsRegisters
							text={t('testRepository.title')}
							url="/test-repository"
							linkText={t('general.ir')}
							classParent={"mb-1"}
						/>
					</div>

					<div className="d-flex justify-content-start">
						<LinkInLoginsRegisters
							text={t('testPlans.title')}
							url="/test-plans"
							linkText={t('general.ir')}
							classParent={"mb-1"}
						/>
					</div>

					<div className="d-flex justify-content-start">
						<LinkInLoginsRegisters
							text={t('testWithSteps.title')}
							url="/test-with-steps"
							linkText={t('general.ir')}
							classParent={"mb-1"}
						/>
					</div>

					<div className="d-flex justify-content-start">
						<LinkInLoginsRegisters
							text={t('testWithoutSteps.title')}
							url="/test-without-steps"
							linkText={t('general.ir')}
							classParent={"mb-1"}
						/>
					</div>

					<div className="d-flex justify-content-start">
						<LinkInLoginsRegisters
							text={t('exploratoryTest.title')}
							url="/exploratory-test-form"
							linkText={t('general.ir')}
							classParent={"mb-1"}
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
