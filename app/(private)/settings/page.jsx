"use client";
import { useState } from 'react'
import Link from 'next/link'
import useSettings from './settings';

export default function SettingsPage(){
  const {handleLogout} = useSettings()
  const [name, setName] = useState('John Doe')
  const [email, setEmail] = useState('john@example.com')
  const [avatarPreview, setAvatarPreview] = useState('')
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false)

  function handleAvatarChange(e){
    const file = e.target.files && e.target.files[0]
    if(!file) return
    const url = URL.createObjectURL(file)
    setAvatarPreview(url)
  }

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white dark:bg-black/40 p-6">
      <div className="mx-auto max-w-3xl bg-white dark:bg-gray-900 rounded-lg shadow px-6 py-5">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-lg font-semibold">Settings</h1>
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">Back</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 flex flex-col items-center gap-3">
            <div className="w-32 h-32 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden flex items-center justify-center">
              {avatarPreview ? (
                <img src={avatarPreview} alt="avatar" className="w-full h-full object-cover" />
              ) : (
                <span className="text-gray-400">No Photo</span>
              )}
            </div>
            <label className="text-xs text-gray-500">Profile Photo</label>
            <input type="file" accept="image/*" onChange={handleAvatarChange} className="text-sm" />
          </div>

          <div className="md:col-span-2">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Name</label>
                <input value={name} onChange={(e)=>setName(e.target.value)} className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent text-sm outline-none" />
              </div>

              <div>
                <label className="text-xs text-gray-500 mb-1 block">Email</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent text-sm outline-none" />
              </div>

              <div className="flex items-center gap-2 justify-end pt-2">
                <button className="px-4 py-2 rounded border border-gray-200 dark:border-gray-700">Cancel</button>
                <button className="px-4 py-2 rounded bg-blue-600 text-white">Save</button>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                <h3 className="text-sm font-medium text-gray-600 mb-2">Danger Zone</h3>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Logout of your account</div>
                  <button onClick={() => setShowLogoutConfirm(true)} className="px-3 py-2 rounded bg-red-600 text-white text-sm">Logout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showLogoutConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={()=>setShowLogoutConfirm(false)} />
          <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-lg w-full max-w-sm p-4">
            <h4 className="text-sm font-semibold mb-2">Are you sure?</h4>
            <p className="text-xs text-gray-500 mb-4">You will be logged out of this device. This action won't delete your account.</p>
            <div className="flex justify-end gap-2">
              <button onClick={()=>setShowLogoutConfirm(false)} className="px-3 py-2 rounded border border-gray-200 dark:border-gray-700">No</button>
              <button onClick={handleLogout} className="px-3 py-2 rounded bg-red-600 text-white">Yes, logout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
