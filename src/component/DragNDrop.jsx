import React, { useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import { Circles } from 'react-loader-spinner';
import { ContextData } from '../DataProvider';

function DragNDrop() {
  const { uploadedFiles, isLoading, error, onDrop, feedBack } =
    useContext(ContextData);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accepts: 'image/*',
    multiple: false,
  });

  return (
    <div className="input-box">
      <div className="input-inner-box" {...getRootProps()}>
        <input {...getInputProps()} />

        {!isDragActive && !isLoading && (
          <div>
            <img src="cloud.png" width="25px" />
            <p>Drag & drop or click to upload</p>
          </div>
        )}

        {isLoading ? (
          <Circles
            height="65"
            width="65"
            color="#f5f5f5"
            ariaLabel="circle-loading"
            wrapperStyle={{ display: 'grid', placeContent: 'center' }}
            visible={true}
          />
        ) : (
          <ul>
            {uploadedFiles.map((file) => (
              <li key={file.public_id}>
                <img
                  src={file.secure_url}
                  alt={file.public_id}
                  className="uploaded-img"
                />
              </li>
            ))}
          </ul>
        )}
      </div>
      {error && <p className="error-display">{error}</p>}
      {feedBack && !error && <p className="error-display">{feedBack}</p>}
    </div>
  );
}

export default DragNDrop;
