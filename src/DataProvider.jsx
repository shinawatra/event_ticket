import React, { useState, useCallback, useEffect } from 'react';
import { createContext } from 'react';
import { useNavigate } from 'react-router';

export const ContextData = createContext({});

function DataProvider({ children }) {
  const [displayOption, setDisplayOption] = useState(
    JSON.parse(localStorage.getItem('ticketType')) || ''
  );
  const [selectedValue, setSelectValue] = useState(
    JSON.parse(localStorage.getItem('selectedValue')) || ''
  );
  const [uploadedFiles, setUploadedFiles] = useState(
    () => JSON.parse(localStorage.getItem('file')) || []
  );

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [reqError, setReqError] = useState('');
  const [feedBack, setFeedBack] = useState('');

  const [formData, setFormData] = useState(
    () =>
      JSON.parse(localStorage.getItem('formData')) || {
        name: '',
        email: '',
        specialRequest: '',
      }
  );

  const navigate = useNavigate();

  function handleFormChange(e) {
    const { value, name } = e.target;
    setFormData((preFormData) => {
      return {
        ...preFormData,
        [name]: value,
      };
    });
  }

  const onDrop = useCallback((acceptedFiles) => {
    const url = 'https://api.cloudinary.com/v1_1/daxyvjs3p/image/upload';

    acceptedFiles.forEach(async (file) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'ml_default');

      try {
        setIsLoading(true);
        const response = await fetch(url, {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();
        setUploadedFiles((prevFile) => [...prevFile, data]);
        setIsLoading(false);
      } catch (err) {
        setError('An error occurred, Try again.');
      }
    });
  }, []);

  function handleFormSubmission(e) {
    e.preventDefault();

    if (uploadedFiles.length === 0 || !uploadedFiles) {
      setFeedBack('Please upload an image');
      return;
    } else {
      setFeedBack('');
    }

    if (!formData.name) {
      setNameError('This field is requried');
      return;
    } else {
      setNameError('');
    }

    if (!formData.email) {
      setEmailError('This field is requried');
      return;
    } else {
      setEmailError('');
    }

    if (!formData.specialRequest) {
      setReqError('This field is requried');
      return;
    } else {
      setReqError('');
    }

    navigate('/bookedTicket', { state: uploadedFiles });
  }

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
    localStorage.setItem('File', JSON.stringify(uploadedFiles));
    localStorage.setItem('ticketType', JSON.stringify(displayOption));
    localStorage.setItem('selectedValue', JSON.stringify(selectedValue));
  }, [formData, uploadedFiles, displayOption]);

  const handleChange = (e) => setSelectValue(e.target.value);

  function handleBtns(e) {
    let btn;

    if (e.target.tagName === 'SPAN') {
      btn = e.target.closest('button');
    } else if (e.target.tagName === 'BUTTON') {
      btn = e.target;
    }

    if (btn.textContent.includes('Free')) {
      setDisplayOption('REGULAR');
    } else if (btn.textContent.includes('$150')) {
      setDisplayOption('VIP');
    } else if (btn.textContent.includes('$250')) {
      setDisplayOption('VVIP');
    }
  }

  return (
    <ContextData.Provider
      value={{
        handleBtns,
        handleChange,
        displayOption,
        selectedValue,
        formData,
        setFormData,
        handleFormChange,
        handleFormSubmission,
        uploadedFiles,
        setUploadedFiles,
        error,
        isLoading,
        onDrop,
        nameError,
        emailError,
        reqError,
        feedBack,
      }}
    >
      {children}
    </ContextData.Provider>
  );
}

export default DataProvider;
