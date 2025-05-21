import React, { useState } from 'react';
import { registerClient } from '../services/authService';
import AuthLayout from '../components/AuthLayout';

export default function RegisterClient() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '',
    lastName: '',
    email: '',
    companyName: '',
    companyAddress: '',
    companyId: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async () => {
    try {
        await registerClient(form);
        console.log("datos enviados");
    } catch (error) {
        alert("error al enviar datos");
    }
  };

  return (
    <div class="d-flex vh-100">
        <AuthLayout />
        <div class="w-50 align-items-center justify-content-center">
            <div class="container px-5">
                <div class="mb-5">
                    <p class="text-end">
                        Already have an account?
                        <a href="/login" class="ms-2 text-dark fw-bold">Sign In</a>
                    </p>
                </div>
                <div>
                    <h3 class="fw-bold fs-2 text-center mb-5">You're starting something new, let's make it a way of life ;-)</h3>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        {step === 1 && (
                        <>
                            <h4>About yourself...</h4>
                            <div>
                                <p>First name:</p>
                                <input name="name" placeholder="name..." value={form.name} onChange={handleChange} required />
                            </div>
                            <div>
                                <p>Last name:</p>
                                <input name="lastName" placeholder="last name..." value={form.lastName} onChange={handleChange} required />
                            </div>
                            <div>
                                <p>email:</p>
                                <input name="email" placeholder="email..." value={form.email} onChange={handleChange} required />
                            </div>
                            <div class="d-flex justify-content-end">
                                <button type="button" class="mt-5" onClick={nextStep}>Next</button>
                            </div>
                        </>
                        )}
                        {step === 2 && (
                        <>
                            <h4>About your company...</h4>
                            <div class="mt-3">
                                <p>Company name:</p>
                                <input name="companyName" placeholder="company name..." value={form.companyName} onChange={handleChange} required />
                            </div>
                            <div class="mt-3">
                                <p>Address:</p>
                                <input name="companyAddress" placeholder="company address..." value={form.companyAddress} onChange={handleChange} required />
                            </div>
                            <div class="mt-3">
                                <p>NIF:</p>
                                <input name="companyId" placeholder="company ID..." value={form.companyId} onChange={handleChange} required />
                            </div>
                            <div class="d-flex justify-content-between mt-3">
                                <button type="button" class="" onClick={prevStep}>Back</button>
                                <button type="submit" class="">Send</button>
                            </div>
                        </>
                        )}
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}
