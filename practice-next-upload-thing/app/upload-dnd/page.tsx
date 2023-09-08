"use client";

// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import "@uploadthing/react/styles.css";

import { UploadDropzone } from "@uploadthing/react";
import { OurFileRouter } from "../api/uploadthing/core";
import { useState } from 'react'
import Link from 'next/link'
import { UploadFileResponse } from "uploadthing/client";

export default function UploadDndPage() {
    const [images, setImages] = useState<UploadFileResponse[]>([])
    const title = images.length ? (
        <>
            <p>Upload Complete</p>
            <p className="mt-2">{images.length}</p>
        </>
    ) : null
    const imgList = (
        <>
            {title}
            <ul>
                {images.map(image=>(
                    <li key={image.url} className="mt-2" >
                        <Link href={image.url} target="_blank">{image.url}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
    return (
        <main className="flex min-h-screen flex-col items-center justify-start p-24">
            <UploadDropzone<OurFileRouter>
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                    if(res){
                        setImages(res);
                        const json = JSON.stringify(res)
                        // Do something with the response
                        // console.log("Files: ", res);
                        console.log(json)
                    }
                    // alert("Upload Completed");
                }}
                onUploadError={(error: Error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`);
                }}
            />
            {imgList}
        </main>
    );
}