import React from 'react';
import ReactQuill from 'react-quill'; // React wrapper for Quill
import 'react-quill/dist/quill.snow.css'; // Quill stylesheet
import { Controller } from 'react-hook-form';

export default function RTE({ name, control, label, defaultValue = "" }) {
  // Quill toolbar options
  const toolbarOptions = [
    [{ header: [1, 2, 3, false] }], // Header dropdown
    ['bold', 'italic', 'underline', 'strike'], // Formatting buttons
    [{ list: 'ordered' }, { list: 'bullet' }], // Lists
    ['link', 'image'], // Links and images
    ['clean'] // Remove formatting
  ];

  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      <Controller
        name={name || 'content'}
        control={control}
        render={({ field: { onChange, value } }) => (
          <ReactQuill
            value={value || defaultValue}
            onChange={onChange}
            modules={{
              toolbar: toolbarOptions,
            }}
            formats={[
              'header',
              'bold',
              'italic',
              'underline',
              'strike',
              'list',
              'bullet',
              'link',
              'image',
            ]}
            theme="snow" // Theme options: 'snow' or 'bubble'
          />
        )}
      />
    </div>
  );
}
