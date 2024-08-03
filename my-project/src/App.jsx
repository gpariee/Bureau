import React, { useState } from 'react';
import './App.css';

const ProfileCreator = () => {
  const [activeTab, setActiveTab] = useState('create');
  const [fileName, setFileName] = useState('Bureau sec card sample.csv');

  return (
    <div className="container">
      <h1>Create or Modify Profile</h1>
      
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'create' ? 'active' : ''}`}
          onClick={() => setActiveTab('create')}
        >
          Create Profile
        </button>
        <button 
          className={`tab ${activeTab === 'update' ? 'active' : ''}`}
          onClick={() => setActiveTab('update')}
        >
          Update Profile
        </button>
        <button 
          className={`tab ${activeTab === 'import' ? 'active' : ''}`}
          onClick={() => setActiveTab('import')}
        >
          Import from CSV
        </button>
      </div>
      
      <div className="info-box">
        <p><i className="info-icon">i</i> Give each column a name (e.g. $name, $phone, Industry). If you do not include a $distinct_id column, it will be generated randomly for each profile.</p>
      </div>
      
      <div className="file-upload">
        <span className="file-name">{fileName}</span>
        <button className="delete-btn" onClick={() => setFileName('')}>
          <i className="trash-icon">🗑</i>
        </button>
      </div>
      
      <div className="column-preview"`>
        <h3>Column 1 Values</h3>
        <ul>
          {['1', '2', 'app_id', '3', 'dc03bee7-aa91-4acf-b814-8a491c900b2b', '...', '500', 
            'fa80081f-a814-46b5-bc8f-aff9c7f52bcd', '501', 'ac262b4d-3568-4c57-a23a-301c0ea9ea9b', 
            '502', 'ed8fc50b-ad93-468b-a703-e9cbd90aa072'].map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>
      
      <div className="actions">
        <button className="cancel-btn">Cancel</button>
        <button className="import-btn">Import 502 profiles</button>
      </div>
    </div>
  );
};

export default ProfileCreator;