import React,{ useState, useEffect }  from 'react';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function ImageUpload(){

    const [uploadUi, setuploadUi] = useState(true);
    const [blobData, setBlobData] = useState<Blob | null>(null);
    const [filebase64,setFileBase64] = useState<string>("")
    

    function convertFileToBase(files: FileList|null) {
        if (files) {
        const fileRef = files[0] || ""
        const fileType: string= fileRef.type || ""
        // setFileTypeVariable(fileType)
  
        // Extract the file extension
          const parts = fileType.split("/");
          if (parts.length === 2) {
          const fileExtension = parts[1];
        //   setFileExtensionVariable(fileExtension);
          // console.log("File extension:", fileExtension);
          } else {
          console.log("Unable to determine file extension.");
          }
  
      //   console.log("This file upload is of type:",fileType)
        const reader = new FileReader()
        reader.readAsBinaryString(fileRef)
        reader.onload=(ev: any) => {
            // convert it to base64
            setFileBase64(`data:${fileType};base64,${btoa(ev.target.result)}`)
        }
        }
    }
  
  
    function convertFile(files: FileList | null) {
        if (files) {
            console.log('files:', files)
        convertFileToBase(files);
        const fileRef = files[0];
        const reader = new FileReader();
    
        reader.onload = (ev) => {
            if (ev.target) {
            const arrayBuffer = ev.target.result as ArrayBuffer;
            const blob = new Blob([arrayBuffer], { type: fileRef.type });
            setBlobData(blob);
            setuploadUi(false)
            } else {
            console.error("Failed to read the file.");
            }
        };
    
        reader.readAsArrayBuffer(fileRef);
        }
    }

    const resrtUploadUi = () => {
        setuploadUi(true)
        setBlobData(null)
    }

    return (
        <div className='flex flex-col justify-center items-center'>

            {uploadUi &&
                <div>
                    <h1 className='text-center text-2xl font-bold text-[#333] mb-10'>Generate Face Analysis</h1>

                    <div className="flex items-center justify-center">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-52 border-2 border-purple-500 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p className="mb-2 text-base text-gray-500 dark:text-gray-400"><span className="font-semibold">Click here to upload images</span></p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">All Image file types are supported.</p>
                            </div>
                            
                            <input type="file" id="dropzone-file" className="hidden" onChange={(e)=> convertFile(e.target.files)} />
                            
                        </label>
                    </div>
                </div>
            }

            { blobData && !uploadUi &&

            <div className='flex items-center justify-center flex-col'>
                <h1 className='text-center text-2xl font-bold text-[#333] mt-5'>Generate Face Analysis</h1>

                {(filebase64.indexOf("image/") > -1)  && 
                    <img className='mt-10' src={filebase64} width="400" height="400" />
                }

                {/* <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Light</button> */}
                {/* <button className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Purple</button> */}

                <div className='flex sm:flex-row flex-col gap-x-10'>
                <button className="mt-10 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg px-10 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"> Submit</button>

                <button onClick={resrtUploadUi} className="mt-10 focus:outline-none text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Try Another </button>
            </div>
            </div>
            }
        </div>
    )
}