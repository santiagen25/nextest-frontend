import React, { useState } from 'react';

export default function RegisterTester() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    idiomas: [],
    nacimiento: '',
    ciudad: '',
    cp: '',
    pais: '',
    experiencia: '',
    intereses: [],
    herramientas: '',
    lenguajes: '',
  });

  const toggleIdioma = (idioma) => {
    setForm((prev) => ({
      ...prev,
      idiomas: prev.idiomas.includes(idioma)
        ? prev.idiomas.filter((i) => i !== idioma)
        : [...prev.idiomas, idioma],
    }));
  };

  const toggleInteres = (interes) => {
    setForm((prev) => ({
      ...prev,
      intereses: prev.intereses.includes(interes)
        ? prev.intereses.filter((i) => i !== interes)
        : [...prev.intereses, interes],
    }));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (new Date(form.nacimiento) > new Date(Date.now() - 568025136000)) {
      return alert('Debes tener al menos 18 años.');
    }
    console.log('Tester registrado:', form);
  };

  const idiomasDisponibles = ['Español', 'Inglés', 'Francés'];
  const intereses = [
    'Testing manual y exploratorio',
    'Testing automatizado',
    'Testing IA',
    'Testing de ciberseguridad',
    'Testing de rendimiento',
    'Testing de API / microservicios',
    'Testing de apps de móvil',
    'Behavior Driven Development',
    'Test Driven Development',
  ];

  return (
    <div>
      <h2>Alta como Tester</h2>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <>
            <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required /><br />
            <input name="apellidos" placeholder="Apellidos" value={form.apellidos} onChange={handleChange} required /><br />
            <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required /><br />
            <label>Idiomas:</label><br />
            {idiomasDisponibles.map((lang) => (
              <label key={lang}>
                <input type="checkbox" checked={form.idiomas.includes(lang)} onChange={() => toggleIdioma(lang)} />
                {lang}
              </label>
            ))}<br />
            <label>Fecha de nacimiento:</label><br />
            <input type="date" name="nacimiento" value={form.nacimiento} onChange={handleChange} required /><br />
            <button type="button" onClick={nextStep}>Siguiente</button>
          </>
        )}
        {step === 2 && (
          <>
            <input name="ciudad" placeholder="Ciudad" value={form.ciudad} onChange={handleChange} required /><br />
            <input name="cp" placeholder="Código Postal" value={form.cp} onChange={handleChange} required /><br />
            <input name="pais" placeholder="País" value={form.pais} onChange={handleChange} required /><br />
            <button type="button" onClick={prevStep}>Atrás</button>
            <button type="button" onClick={nextStep}>Siguiente</button>
          </>
        )}
        {step === 3 && (
          <>
            <label>Experiencia:</label><br />
            {['Sin experiencia', 'Menos de 2 años', '3 – 5 años', '6 – 10 años', 'Más de 10 años'].map((exp) => (
              <label key={exp}>
                <input type="radio" name="experiencia" value={exp} checked={form.experiencia === exp} onChange={handleChange} />
                {exp}
              </label>
            ))}<br />
            <button type="button" onClick={prevStep}>Atrás</button>
            <button type="button" onClick={nextStep}>Siguiente</button>
          </>
        )}
        {step === 4 && (
          <>
            <label>Intereses:</label><br />
            {intereses.map((item) => (
              <label key={item}>
                <input type="checkbox" checked={form.intereses.includes(item)} onChange={() => toggleInteres(item)} />
                {item}
              </label>
            ))}<br />
            <input name="herramientas" placeholder="Herramientas de testing que dominas" value={form.herramientas} onChange={handleChange} /><br />
            <input name="lenguajes" placeholder="Lenguajes de programación que dominas" value={form.lenguajes} onChange={handleChange} /><br />
            <button type="button" onClick={prevStep}>Atrás</button>
            <button type="submit">Finalizar</button>
          </>
        )}
      </form>
    </div>
  );
}
