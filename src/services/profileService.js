export const getClientProfile = async () => {
	// Simulado. Reemplaza por una llamada real al backend.
	return {
		name: 'Nombre',
		lastName: 'Apellido',
		email: 'cliente@email.com',
		companyName: 'Empresa S.L.',
		companyAddress: 'Calle Ejemplo 123',
		companyId: 'B12345678'
	};
};

export const updateClientProfile = async (form) => {
	// Simula una petición PUT al backend
	console.log('Enviando datos actualizados:', form);
};
