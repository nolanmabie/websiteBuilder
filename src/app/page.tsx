'use client'

import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const EnhancedWebsiteBuilder = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    major: '',
    minor: '',
    gpa: '',
    bio: '',
    internships: '',
    honorsAwards: '',
    projects: '',
    professorReferrals: '',
    certifications: '',
    section1Title: '',
    section2Title: '',
    section3Title: '',
    section1Content: '',
    section2Content: '',
    section3Content: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileUpload = (e) => {
    console.log('File uploaded:', e.target.files[0]);
    // Handle file upload logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Welcome Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">Hi There,</h1>
          <p className="text-gray-600">
            Let's start building you your own personal website. Fill in the form
            here and upload the needed documents. If you have any questions about the
            form, just click the star next to it and it will go more in depth on what's
            needed!
          </p>
          <p className="text-gray-600 mt-4">Happy creating...</p>
        </div>

        {/* Main Form */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <form className="space-y-8">
            {/* Personal Information Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800">Personal Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </div>

              {/* Headshot Upload */}
              <div className="border-2 border-dashed rounded-lg p-6">
                <div className="text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="mt-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Upload Headshot
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800">Academic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Major</label>
                  <input
                    type="text"
                    name="major"
                    value={formData.major}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Minor</label>
                  <input
                    type="text"
                    name="minor"
                    value={formData.minor}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">GPA</label>
                  <input
                    type="text"
                    name="gpa"
                    value={formData.gpa}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Resume</label>
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </div>
            </div>

            {/* Experience & Achievements */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800">Experience & Achievements</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Internships or Jobs you're proud of
                  </label>
                  <textarea
                    name="internships"
                    value={formData.internships}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Honors/Awards
                  </label>
                  <textarea
                    name="honorsAwards"
                    value={formData.honorsAwards}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Projects You Want to Share
                  </label>
                  <textarea
                    name="projects"
                    value={formData.projects}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800">Additional Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Professor Referrals
                  </label>
                  <textarea
                    name="professorReferrals"
                    value={formData.professorReferrals}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Certifications
                  </label>
                  <textarea
                    name="certifications"
                    value={formData.certifications}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bio - Tell us about you, hobbies, favorite things to share with others
                  </label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full p-2 border rounded-md"
                    placeholder="What makes you, you?"
                  />
                </div>
              </div>
            </div>

            {/* Custom Sections */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800">Custom Sections</h2>
              {[1, 2, 3].map((num) => (
                <div key={num} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Section {num} Title
                    </label>
                    <input
                      type="text"
                      name={`section${num}Title`}
                      value={formData[`section${num}Title`]}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Section {num} Content
                    </label>
                    <textarea
                      name={`section${num}Content`}
                      value={formData[`section${num}Content`]}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Create Website
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnhancedWebsiteBuilder;