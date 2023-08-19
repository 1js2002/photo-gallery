"use client"
import { CldUploadButton } from "next-cloudinary";
import { Button } from "@/components/ui/button";

export default function GalleryPage() {
  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <Button asChild className="bg-300">
          <CldUploadButton className="" uploadPreset="aqtrvven" />
          </Button>
        </div>
      </div>
    </section>
  );
}
