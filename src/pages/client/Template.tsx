import { useState } from "react";
import HeaderSection from "../../components/small/DashboardHead";
import { BlackDialogWrapper } from "../../components/mini/BlackDialogWrapper";
import TemplateGallery from "../../components/template/TemplateGallery";
  
  export const steps = [
    {
      no: "Step 1:",
      desc: "First, download the ZIP file."
    },
    {
      no: "Step 2:",
      desc: "After it's downloaded, find the ZIP file on your computer (probably in the Downloads folder)."
    },
    {
      no: "Step 3:",
      desc: 'Right-click the ZIP file and choose "Extract" or "Unzip". You will get a normal folder.'
    },
    {
      no: "Step 4:",
      desc: "Open Google Chrome."
    },
    {
      no: "Step 5:",
      desc: "At the top right of Chrome, click the 3 little dots (⋮) → choose Extensions. (Or just type this in Chrome: chrome://extensions)"
    },
    {
      no: "Step 6:",
      desc: "Turn on the Developer mode. (There’s a small switch at the top right corner. Click it.)"
    },
    {
      no: "Step 7:",
      desc: 'Click the button that says "Load unpacked".'
    },
    {
      no: "Step 8:",
      desc: "Find the folder you unzipped. Click Select Folder."
    },
    {
      no: "Done! 🎉",
      desc: "Now you will see your extension ready to use!"
    }
  ];
export default function Template() {
  const [open, setOpen] = useState(false);
  const totalnumber = 3
 
  

 
  return (
    <div className="flex flex-col ">

      <BlackDialogWrapper
        open={open}
        title="🛠 How to Install the Chrome Extension"
        submitText=""
        onCloseOrSubmit={() => setOpen(false)}
      >
        <div className="flex flex-col w-full overflow-y-auto max-h-[280px] space-y-2 px-2">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col text-gray-700 leading-tight">
              <span className="font-bold">{step.no}</span>
              <span className="text-sm">{step.desc}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-5">
          <a
            href="https://drive.google.com/uc?export=download&id=16Gwrc9-VbHBM5N5pZ7tNvMS2W2QNbJEQ"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Download File
          </a>
        </div>
      </BlackDialogWrapper>


      <HeaderSection
        heading={`Funnel Templates ${totalnumber}`}
        name="Import Template"
        onButtonClick={() => setOpen(true)}
      />
      <div className="w-full flex justify-center mb-5">
        <button onClick={() => setOpen(true)} className="text-amber-700 cursor-pointer p-5 w-[80%] bg-[#FFF3CD] border rounded-[10px]"><span className="font-bold">Warning:</span>
          You need to install our Chrome extension for the app to work properly.</button>
      </div>
      <TemplateGallery/>
 

    
    </div>
  );
}
