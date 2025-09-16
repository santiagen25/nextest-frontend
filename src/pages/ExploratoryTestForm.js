import React, { useState } from 'react';
import Footer from '../components/Footer';
import { usePageTitle } from '../hooks/usePageTitle';
import { t } from 'i18next';
import SidebarTest25 from '../components/SidebarTest25';

export default function ExploratoryTestForm() {
	usePageTitle('exploratoryTest.title');

	const [form, setForm] = useState({
		titulo: '',
		descripcion: '',
		tipo: '',
		prioridad: '',
		automatizada: false,
		regresion: false,
		plan: '',
		requisito: '',
		sprint: ''
	});

	const [created, setCreated] = useState(false);

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Exploratoria creada:', form);
		setCreated(true);
	};

	return (
		<div>
			<div className="d-flex vh-100">
				<SidebarTest25 />
				<div className="w-100 p-5 mt-5 mt-md-0">
					<h2>{t('exploratoryTest.title')}</h2>

					<form onSubmit={handleSubmit}>
						<input className="form-control mb-3" name="titulo" placeholder={t('testWithSteps.titulo')} value={form.titulo} onChange={handleChange} required />
						<input className="form-control mb-3" name="descripcion" placeholder={t('testWithSteps.descripcion')} value={form.descripcion} onChange={handleChange} required />
						<select className="form-select form-select-lg mb-3" name="tipo" value={form.tipo} onChange={handleChange} required>
							<option value="">{t('testWithSteps.tipoDePrueba')}</option>
							<option value="exploratoria">{t('exploratoryTest.exploratoria')}</option>
							<option value="funcional">{t('testWithSteps.funcional')}</option>
						</select>
						<select className="form-select form-select-lg mb-3" name="prioridad" value={form.prioridad} onChange={handleChange} required>
							<option value="">{t('testWithSteps.prioridad')}</option>
							<option value="alta">{t('testWithSteps.alta')}</option>
							<option value="media">{t('testWithSteps.media')}</option>
							<option value="baja">{t('testWithSteps.baja')}</option>
						</select>
						<div className="d-flex justify-content-center">
							<label className="mb-3">
								<input type="checkbox" name="automatizada" checked={form.automatizada} onChange={handleChange} />
								{t('testWithSteps.automatizada')}
							</label>
							<label className="mb-3">
								<input type="checkbox" name="regresion" checked={form.regresion} onChange={handleChange} />
								{t('testWithSteps.regresion')}
							</label>
						</div>
						<select className="form-select form-select-lg mb-3" name="plan" value={form.plan} onChange={handleChange} required>
							<option value="">{t('testWithSteps.planDePrueba')}</option>
							<option value="Plan A">{t('testWithSteps.plan')} A</option>
							<option value="Plan B">{t('testWithSteps.plan')} B</option>
						</select>
						<input className="form-control mb-3" name="requisito" placeholder={t('testWithSteps.requisito')} value={form.requisito} onChange={handleChange} />
						<input className="form-control mb-3" name="sprint" placeholder={t('testWithSteps.sprint')} value={form.sprint} onChange={handleChange} />

						<div className="mt-4">
							<button type="submit">{t('testWithSteps.guardarPrueba')}</button>
						</div>
					</form>

					{created && (
						<div className="mt-5 alert alert-success">
							<h5>✅ {t('exploratoryTest.pruebaExploratoriaGuardada')}</h5>
							<p>{t('exploratoryTest.puedesSeguirEditando')}</p>
						</div>
					)}
				</div>
			</div>
			<Footer />
		</div>
	);
}
