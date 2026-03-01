"use client";
import React, { useState } from 'react'

const Field = ({label, defaultValue, type = 'text'}) => (
  <div className="flex flex-col">
    <label className="text-xs text-gray-500 mb-1">{label}</label>
    <input defaultValue={defaultValue} type={type} className="px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent text-sm outline-none" />
  </div>
)

export default function SettingsModal({ isOpen, onClose }){
  const [showConfirm, setShowConfirm] = useState(false)

  if(!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className="relative w-full max-w-md mx-4">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-800">
            <h3 className="text-sm font-semibold">Settings</h3>
            <button onClick={onClose} className="text-sm text-gray-500 hover:text-gray-700">Close</button>
          </div>

          <div className="p-4 space-y-4">
            <div>
              <h4 className="text-xs font-medium text-gray-600 mb-2">Profile</h4>
              <div className="grid grid-cols-1 gap-3">
                <Field label="Name" defaultValue="John Doe" />
                <Field label="Email" defaultValue="john@example.com" type="email" />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2">
              <button className="px-3 py-2 text-sm rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">Save</button>
              <button onClick={onClose} className="px-3 py-2 text-sm rounded border border-gray-200 dark:border-gray-700">Cancel</button>
            </div>

            <div className="pt-2 border-t border-gray-100 dark:border-gray-800">
              <h4 className="text-xs font-medium text-gray-600 mb-2">Danger Zone</h4>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">Logout of your account</div>
                <button onClick={() => setShowConfirm(true)} className="px-3 py-2 rounded text-sm bg-red-600 text-white">Logout</button>
              </div>
            </div>
          </div>
        </div>

        {showConfirm && (
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg w-full max-w-sm">
              <div className="p-4">
                <h5 className="text-sm font-semibold mb-2">Are you sure?</h5>
                <p className="text-xs text-gray-500 mb-4">You will be logged out of this device. This action won't delete your account.</p>
                <div className="flex justify-end gap-2">
                  <button onClick={() => setShowConfirm(false)} className="px-3 py-2 rounded border border-gray-200 dark:border-gray-700">No</button>
                  <button onClick={() => { setShowConfirm(false); onClose(); }} className="px-3 py-2 rounded bg-red-600 text-white">Yes, logout</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
