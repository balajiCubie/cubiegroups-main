'use client';
import React, { useState } from 'react';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: null as File | null,
    coverLetter: ''
  });
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prevState => ({
        ...prevState,
        resume: e.target.files![0]
      }));
    }
  };

  const handleNext = () => {
    setStep(prevStep => Math.min(prevStep + 1, totalSteps));
  };

  const handleBack = () => {
    setStep(prevStep => Math.max(prevStep - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would send formData to a backend
    console.log('Application submitted:', formData);
    alert('Your application has been submitted successfully!');
    setFormData({
      name: '',
      email: '',
      resume: null,
      coverLetter: ''
    });
    setStep(1); // Reset to first step
  };

  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Online Application Form</h2>
      <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <div className="mb-6">
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300">Step {step} of {totalSteps}</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${(step / totalSteps) * 100}%` }}></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 1 && (
            <>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <button type="button" onClick={handleNext} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Next
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Upload Resume (PDF, DOCX)</label>
                <input type="file" name="resume" id="resume" accept=".pdf,.doc,.docx" onChange={handleFileChange} required className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                {formData.resume && <p className="mt-2 text-sm text-gray-500">Selected file: {formData.resume.name}</p>}
              </div>
              <div>
                <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Cover Letter (Optional)</label>
                <textarea name="coverLetter" id="coverLetter" value={formData.coverLetter} onChange={handleChange} rows={5} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
              <div className="flex justify-between">
                <button type="button" onClick={handleBack} className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                  Back
                </button>
                <button type="button" onClick={handleNext} className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Next
                </button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="p-4 border rounded-lg bg-white dark:bg-gray-700">
                <h3 className="text-lg font-bold mb-2">Review Your Application</h3>
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Resume:</strong> {formData.resume ? formData.resume.name : 'Not uploaded'}</p>
                <p><strong>Cover Letter:</strong> {formData.coverLetter || 'N/A'}</p>
              </div>
              <div className="flex justify-between">
                <button type="button" onClick={handleBack} className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                  Back
                </button>
                <button type="submit" className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  Submit Application
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </section>
  );
};

export default ApplicationForm;
