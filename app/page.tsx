"use client"
import { CldUploadButton } from 'next-cloudinary'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton uploadPreset='aqtrvven' />
    </main>
  )
}

