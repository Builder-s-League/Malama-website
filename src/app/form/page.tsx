'use client'

import { useState } from 'react'

const provinces = [
    'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick',
    'Newfoundland and Labrador', 'Nova Scotia', 'Ontario',
    'Prince Edward Island', 'Quebec', 'Saskatchewan',
]

export default function FormPage() {
    const [form, setForm] = useState({
        fullName: '',
        age: '',
        gender: '',
        street: '',
        city: '',
        province: '',
        medical: '',
        situation: '',
    })

    const [image, setImage] = useState<File | null>(null)

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            setImage(e.target.files[0])
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log({ ...form, image })
    }

    const inputClass =
        'w-full px-4 py-3 text-sm text-gray-800 placeholder-gray-400 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand'

    const labelClass = 'block text-sm font-medium text-gray-700 mb-1'

    return (
        <main className="py-10 px-4 flex justify-center">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-2xl p-8 rounded-3xl shadow-lg space-y-6"
            >
                <h1 className="text-xl font-semibold text-center text-gray-800">
                    Tell us about yourself
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                        <label htmlFor="fullName" className={labelClass}>Full Legal Name</label>
                        <input
                            id="fullName"
                            name="fullName"
                            placeholder="John Brit Doe"
                            value={form.fullName}
                            onChange={handleChange}
                            className={inputClass}
                        />
                    </div>
                    <div>
                        <label htmlFor="age" className={labelClass}>Age</label>
                        <input
                            id="age"
                            name="age"
                            placeholder="31"
                            type="number"
                            value={form.age}
                            onChange={handleChange}
                            className={inputClass}
                        />
                    </div>
                    <div>
                        <label htmlFor="gender" className={labelClass}>Gender</label>
                        <select
                            id="gender"
                            name="gender"
                            value={form.gender}
                            onChange={handleChange}
                            className={inputClass}
                        >
                            <option value="">Gender</option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="nonbinary">Non-binary</option>
                            <option value="prefer_not_to_say">Prefer not to say</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label htmlFor="street" className={labelClass}>Street Address</label>
                    <input
                        id="street"
                        name="street"
                        placeholder="543 Market Street"
                        value={form.street}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="city" className={labelClass}>Town/City</label>
                        <input
                            id="city"
                            name="city"
                            placeholder="Winnipeg"
                            value={form.city}
                            onChange={handleChange}
                            className={inputClass}
                        />
                    </div>
                    <div>
                        <label htmlFor="province" className={labelClass}>Province</label>
                        <select
                            id="province"
                            name="province"
                            value={form.province}
                            onChange={handleChange}
                            className={inputClass}
                        >
                            <option value="">Province</option>
                            {provinces.map(p => (
                                <option key={p} value={p}>{p}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div>
                    <label htmlFor="medical" className={labelClass}>Medical Conditions</label>
                    <textarea
                        id="medical"
                        name="medical"
                        placeholder="Medical Conditions (chronic illnesses, allergies)"
                        value={form.medical}
                        onChange={handleChange}
                        className={`${inputClass} h-24 resize-none`}
                    />
                </div>

                <div>
                    <label htmlFor="situation" className={labelClass}>Current Situation</label>
                    <textarea
                        id="situation"
                        name="situation"
                        placeholder="Briefly describe your current situation"
                        value={form.situation}
                        onChange={handleChange}
                        className={`${inputClass} h-24 resize-none`}
                    />
                </div>

                <div className="border border-dashed border-gray-300 p-6 rounded-lg bg-gray-50 text-center">
                    <p className="text-sm text-gray-500 mb-2">Attach Images</p>
                    <p className="text-xs text-gray-400 mb-4">Drag and drop or browse to upload images</p>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                        id="upload"
                    />
                    <label
                        htmlFor="upload"
                        className="inline-block bg-brand text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-brand-dark transition"
                    >
                        Upload
                    </label>
                    {image && (
                        <p className="text-xs text-brand mt-3 truncate">📎 {image.name}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-brand hover:bg-brand-dark text-white font-medium py-3 rounded-full transition"
                >
                    Submit
                </button>
            </form>
        </main>
    )
}
