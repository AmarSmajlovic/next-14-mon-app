'use client'

import auth from '@/services/auth'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'
import { useFormState } from 'react-dom'

const Register = () => {
  const router = useRouter()
  const [error,setError] = useState<any>(null)
 
 const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const username = formData.get('username') as string;
  const password = formData.get('password') as string;
  const repeatPassword = formData.get('repeatPassword') as string;
  const subscribeToNewsLetter = formData.get('subscribeToNewsLetter') as any;
  const gender = formData.get('gender') as string;
  const status = formData.get('status') as string;
  const yearOfBirth = formData.get('yearOfBirth') as any;

  const data = { 
    username,
    password,
    repeatPassword,
    subscribeToNewsLetter:  !!subscribeToNewsLetter,
    gender,
    status,
    yearOfBirth:Number(yearOfBirth)
  }
  try {
    await auth.register(data);
    await auth.login(username,password)
    router.push('/')
  } catch (error) {
    setError(error)
  }
 }

  return (
    <div>
      Register Page
      <form onSubmit={onSubmit}>
      <input type="text" name='username' />
      <input type="text" name='password' />
      <input type="text" name='repeatPassword' />
      <input type='checkbox'  name='subscribeToNewsLetter' />
<div>
  <input type="radio" id='male' name="gender" value="male" />
  <label htmlFor="male">Male</label>
</div>
<div>
  <input type="radio" id='female' name="gender" value="female" />
  <label htmlFor="female">Female</label>
</div>
<div>
  <input type="radio" id='other' name="gender" value="other" />
  <label htmlFor="other">Other</label>
</div>

      <select  name='status' >
     <option value='active'>
      Active
     </option >
     <option value='inactive'>
      Inactive
     </option >
      </select>
      <input type="number" name='yearOfBirth' />
      <button type='submit'>Submit</button>
      </form>
      {error && error}
    </div>
  )
}

export default Register

