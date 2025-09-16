import React, { useState } from 'react';
import Footer from '../components/Footer';
import { usePageTitle } from '../hooks/usePageTitle';
import SidebarTest25 from '../components/SidebarTest25';
import { t } from 'i18next';

export default function TestWithSteps() {
	usePageTitle('testWithSteps.title');

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

	const [pasos, setPasos] = useState([{ descripcion: '', resultado: '' }]);
	const [created, setCreated] = useState(false);

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
	};

	const handlePasoChange = (index, field, value) => {
		const newPasos = [...pasos];
		newPasos[index][field] = value;
		setPasos(newPasos);
	};

	const handleAddPaso = () => {
		setPasos([...pasos, { descripcion: '', resultado: '' }]);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Prueba creada:', { ...form, pasos });
		setCreated(true);
	};

	return (
		<div>
			<div className="d-flex min-vh-100">
				<SidebarTest25 />
				<div className="w-100 p-5 mt-5 mt-md-0">
					<h2>{t('testWithSteps.title')}</h2>

					<form onSubmit={handleSubmit}>
						<input className="form-control mb-3" name="titulo" placeholder={t('testWithSteps.titulo')} value={form.titulo} onChange={handleChange} required />
						<input className="form-control mb-3" name="descripcion" placeholder={t('testWithSteps.descripcion')} value={form.descripcion} onChange={handleChange} required />
						<select className="form-select form-select-lg mb-3" name="tipo" value={form.tipo} onChange={handleChange} required>
							<option value="">{t('testWithSteps.tipoDePrueba')}</option>
							<option value="funcional">{t('testWithSteps.funcional')}</option>
							<option value="rendimiento">{t('testWithSteps.rendimiento')}</option>
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

						<hr />
						<h5>{t('testWithSteps.pasos')}:</h5>
						{pasos.map((paso, idx) => (
							<div key={idx} className="mb-3">
								<input
									className="form-control mb-3"
									placeholder={t('testWithSteps.paso') + ` ${idx + 1} - ` + t('testWithSteps.descripcion')}
									value={paso.descripcion}
									onChange={(e) => handlePasoChange(idx, 'descripcion', e.target.value)}
								/>
								<input
									className="form-control mb-3"
									placeholder={t('testWithSteps.resultadoEsperado')}
									value={paso.resultado}
									onChange={(e) => handlePasoChange(idx, 'resultado', e.target.value)}
								/>
							</div>
						))}
						<button type="button" onClick={handleAddPaso}>{t('testWithSteps.anadirPaso')}</button>

						<div className="mt-4">
							<button type="submit">{t('testWithSteps.guardarPrueba')}</button>
						</div>
					</form>

					{created && (
						<div className="mt-5 alert alert-success">
							<h5>✅ {t('testWithSteps.pruebaCreadaConExito')}</h5>
							<p>{t('testWithSteps.puedesEditarlaCambiandoLosCampos')}</p>
						</div>
					)}
				</div>
			</div>
			<Footer />
		</div>
	);
}
