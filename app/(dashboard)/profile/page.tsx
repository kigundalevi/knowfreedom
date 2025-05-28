'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  User,
  Shield,
  Bell,
  Building,
  Users,
  Camera,
  Trash2,
  Save,
  Upload
} from 'lucide-react';

const ProfileSecurity = () => {
  const [activeTab, setActiveTab] = useState('Personal');
  const [profileData, setProfileData] = useState({
    displayName: 'John Doe',
    firstName: '',
    lastName: '',
    emailAddress: '',
    businessEmailAddress: '',
    personalPhoneNumber: '',
    businessPhoneNumber: '',
    addressLine1: '',
    addressLine2: '123 Street',
    city: '',
    stateProvince: '',
    zipCode: '',
    country: ''
  });

  const tabs = [
    { id: 'Personal', label: 'Personal', icon: User },
    { id: 'Security', label: 'Security', icon: Shield },
    { id: 'Notifications', label: 'Notifications', icon: Bell },
    { id: 'Company', label: 'Company', icon: Building },
    { id: 'Users', label: 'Users', icon: Users }
  ];

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveChanges = () => {
    // Handle save logic here
    console.log('Saving changes:', profileData);
    alert('Changes saved successfully!');
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Handle image upload logic here
      console.log('Uploading image:', file);
    }
  };

  const renderPersonalTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Personal Details</h3>

        {/* Profile Photo Section */}
        <div className="flex items-center  justify-between space-x-4 mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-gray-600 rounded-full flex items-center justify-center text-white text-2xl font-semibold">
              JD
            </div>
            <div className="flex space-x-3">
              <label className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium cursor-pointer hover:bg-blue-700 transition-colors flex items-center space-x-2">
                <Upload size={16} />
                <span>Upload</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
              <button className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors flex items-center space-x-2">
                <Trash2 size={16} />
                <span>Remove</span>
              </button>
            </div>
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="display-name">Display Name</Label>
            <Input
              type="text"
              placeholder="Enter Display Name"
              value={profileData.displayName}
              onChange={(e) => handleInputChange('displayName', e.target.value)}
              className="bg-[#F3F6FF] text-gray-900 sm:text-sm rounded-lg"
            />
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Display Name */}


          {/* First Name */}
          <div>
            <Label htmlFor="first-name">First Name</Label>
            <Input
              type="text"
              placeholder="Enter First Name"
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className="bg-[#F3F6FF] text-gray-900 sm:text-sm rounded-lg"
            />
          </div>

          {/* Last Name */}
          <div>
            <Label htmlFor="last-name">Last Name</Label>
            <Input
              type="text"
              placeholder="Enter Last Name"
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className="bg-[#F3F6FF] text-gray-900 sm:text-sm rounded-lg"
            />
          </div>

          {/* Email Address */}
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              className="bg-[#F3F6FF] text-gray-900 sm:text-sm rounded-lg"
              id="email"
              placeholder="Enter Email Address"
              type="email"
              value={profileData.emailAddress}
              // onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Business Email Address */}
          <div>
            <Label htmlFor="business-email">Business Email Address</Label>
            <Input
              type="email"
              placeholder="Enter Business Email Address"
              onChange={(e) => handleInputChange('businessEmailAddress', e.target.value)}
              className="bg-[#F3F6FF] text-gray-900 sm:text-sm rounded-lg"
            />
          </div>

          {/* Personal Phone Number */}
          <div>
            <Label htmlFor="personal-phone">Personal Phone Number</Label>
            <Input
              type="tel"
              placeholder="Enter Personal Phone Number"
              onChange={(e) => handleInputChange('personalPhoneNumber', e.target.value)}
              className="bg-[#F3F6FF] text-gray-900 sm:text-sm rounded-lg"
            />
          </div>

          {/* Business Phone Number */}
          <div>
            <Label htmlFor="business-phone">Business Phone Number</Label>
            <Input
              type="tel"
              placeholder="Enter Business Phone Number"
              onChange={(e) => handleInputChange('businessPhoneNumber', e.target.value)}
              className="bg-[#F3F6FF] text-gray-900 sm:text-sm rounded-lg"
            />
          </div>

          {/* Address Line 1 */}
          <div>
            <Label htmlFor="address-line-1">Address Line 1</Label>
            <Input
              type="text"
              placeholder="Enter Address Line 1"
              onChange={(e) => handleInputChange('addressLine1', e.target.value)}
              className="bg-[#F3F6FF] text-gray-900 sm:text-sm rounded-lg"
            />
          </div>

          {/* Address Line 2 */}
          <div>
            <Label htmlFor="address-line-2">Address Line 2</Label>
            <Input
              type="text"
              value={profileData.addressLine2}
              placeholder="Enter Address Line 2"
              onChange={(e) => handleInputChange('addressLine2', e.target.value)}
              className="bg-[#F3F6FF] text-gray-900 sm:text-sm rounded-lg"
            />
          </div>

          {/* City */}
          <div>
            <Label htmlFor="city">City</Label>
            <Input
              type="text"
              placeholder="Enter City"
              onChange={(e) => handleInputChange('city', e.target.value)}
              className="bg-[#F3F6FF] text-gray-900 sm:text-sm rounded-lg"
            />
          </div>

          {/* State/Province */}
          <div>
            <Label htmlFor="state-province">State / Province</Label>
            <select
              value={profileData.stateProvince}
              onChange={(e) => handleInputChange('stateProvince', e.target.value)}
              className="w-full px-2 py-1.5 h-8 bg-[#EDF2F7] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
            >
              <option value="Utah">Utah</option>
              <option value="California">California</option>
              <option value="New York">New York</option>
              <option value="Texas">Texas</option>
              <option value="Florida">Florida</option>
            </select>
          </div>

          {/* Zip Code */}
          <div>
            <Label htmlFor="zip-code">Zip Code</Label>
            <Input
              type="text"
              placeholder="Enter Zip Code"
              onChange={(e) => handleInputChange('zipCode', e.target.value)}
              className="bg-[#F3F6FF] text-gray-900 sm:text-sm rounded-lg"
            />
          </div>

          {/* Country */}
          <div>
            <Label htmlFor="country">Country</Label>
            <select
              placeholder="Select Country"
              onChange={(e) => handleInputChange('country', e.target.value)}
              className="w-full px-2 py-1.5 h-8 bg-[#EDF2F7] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
            >
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Australia">Australia</option>
            </select>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end mt-6">
          <button
            onClick={handleSaveChanges}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <Save size={16} />
            <span>Save Changes</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderPlaceholderTab = (tabName: string) => (
    <div className="bg-white rounded-lg p-8 shadow-sm text-center">
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Shield className="w-8 h-8 text-gray-400" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{tabName} Settings</h3>
      <p className="text-gray-600">
        {tabName} settings will be implemented here. This is a placeholder for the {tabName.toLowerCase()} functionality.
      </p>
    </div>
  );

  return (
    <div className="px-6 pb-6 rounded-b-2xl" style={{ backgroundColor: '#F3F6FF' }}>


      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm mb-6">
        <nav className="flex space-x-8 px-6" aria-label="Tabs">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 transition-colors ${activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'Personal' && renderPersonalTab()}
      {activeTab === 'Security' && renderPlaceholderTab('Security')}
      {activeTab === 'Notifications' && renderPlaceholderTab('Notifications')}
      {activeTab === 'Company' && renderPlaceholderTab('Company')}
      {activeTab === 'Users' && renderPlaceholderTab('Users')}

    </div>
  );
};

export default ProfileSecurity;