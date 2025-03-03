import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router';
import DragNDrop from './DragNDrop';
import { ContextData } from '../DataProvider';

function Attendee() {
  const {
    formData,
    setFormData,
    handleFormChange,
    handleFormSubmission,
    nameError,
    emailError,
    reqError,
    setUploadedFiles,
  } = useContext(ContextData);

  useEffect(() => {
    setFormData((preForm) => ({
      ...preForm,
      name: '',
      email: '',
      specialRequest: '',
    }));
    setUploadedFiles([]);
  }, []);

  return (
    <section className="attendee-main">
      <header className="attendee-title-box">
        <p>Attendee Details</p>

        <p>
          Step <span>2/3</span>
        </p>
      </header>
      <div className="attend-progress-box">
        <div className="attend-progress"></div>
      </div>

      <form className="attendee-form" onSubmit={handleFormSubmission}>
        <div className="upload-div">
          <p>Upload Profile Photo</p>
          <DragNDrop />
        </div>

        <hr className="form-hr" />

        <label htmlFor="name">Enter your name</label>
        <div className="name-div">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
          />
          {nameError && <p className="form-error">{nameError}</p>}
        </div>

        <label htmlFor="email">Enter your email</label>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="✉ hello@lagos.io"
            value={formData.email}
            onChange={handleFormChange}
          />
          {emailError && <p className="form-error">{emailError}</p>}
        </div>

        <label htmlFor="request">Special request?</label>
        <div>
          <textarea
            id="request"
            name="specialRequest"
            placeholder="Textarea"
            value={formData.specialRequest}
            onChange={handleFormChange}
          />
          {reqError && <p className="form-error">{reqError}</p>}
        </div>

        <div className="attendee-form-btn">
          <Link to="..">Back</Link>
          <button className="formBtn">Get My Ticket</button>
        </div>
      </form>
    </section>
  );
}

export default Attendee;
