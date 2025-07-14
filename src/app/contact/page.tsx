'use client'

import { useState, FormEvent, ChangeEvent } from 'react';
import { AnimatedXPosition, AnimatedXReversePosition, AnimateScale } from '../animationPages/template';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // handle setiap input
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // kirim ke WhatsApp
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;
    const text = encodeURIComponent(
      `Halo, saya *${name}*\n\n• Email: ${email}\n• No. HP: ${phone}\n• Pesan:\n${message}`
    );
    window.open(`https://wa.me/6282395928309?text=${text}`, '_blank');
  };

  return (
    <>
      <div className="bg-gradient-to-tr from-stone-50 to-orange-100 mx-auto shadow-lg p-10 max-w-4xl mb-10 rounded-lg mt-20">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h1 className='text-black font-bold text-3xl'>Contact Us</h1>
          <AnimatedXPosition>
            <Input
              label="Nama"
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
            />
          </AnimatedXPosition>

          <AnimatedXReversePosition>
            <Input
              label="Email"
              id="email"
              name="email"
              type="email"
              placeholder="johndoe@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />
          </AnimatedXReversePosition>

          <AnimatedXPosition>
            <Input
              label="No. Telepon"
              id="phone"
              name="phone"
              type="tel"
              placeholder="08xxxx"
              value={formData.phone}
              onChange={handleChange}
            />
          </AnimatedXPosition>

          <AnimatedXReversePosition>
            <Textarea
              label="Pesan"
              id="message"
              name="message"
              placeholder="Sampaikan pesan anda"
              value={formData.message}
              onChange={handleChange}
            />
          </AnimatedXReversePosition>

          <AnimateScale>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  cursor-pointer"
            >
              Kirim
            </button>
          </AnimateScale>
        </form>
      </div>
    </>
  );
};

/* --- Komponen kecil biar rapi --- */
const Input = ({
  label,
  id,
  ...rest
}: React.ComponentProps<'input'> & { label: string }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-bold mb-1 text-gray-700">
      {label}
    </label>
    <input
      id={id}
      className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
      {...rest}
    />
  </div>
);

const Textarea = ({
  label,
  id,
  ...rest
}: React.ComponentProps<'textarea'> & { label: string }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-bold mb-1 text-gray-700">
      {label}
    </label>
    <textarea
      id={id}
      rows={4}
      className="shadow border rounded w-full p-3 text-gray-700 focus:outline-none focus:shadow-outline resize-none"
      {...rest}
    />
  </div>
);

export default Contact;
