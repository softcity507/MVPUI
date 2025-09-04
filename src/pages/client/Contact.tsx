import { useState } from "react";
import { Description } from "../../components/mini/Description";
import HeaderSection from "../../components/small/DashboardHead";
import { IoSearchOutline } from "react-icons/io5";
import { Heading } from "../../components/mini/Heading";
import { BsPerson } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CiFilter } from "react-icons/ci";
import { IoArrowBackOutline } from "react-icons/io5";


const btnData = [
  {
    name: "Template Builder",
    describe: "Create funnels, import templates, and pull website copy in minutes.",
    icon: <CiFilter size={25} />

  },
  {
    name: "Domains",
    describe: "Add and manage your custom funnel domains.",
    icon: <AiOutlineGlobal size={25} />
  },
  {
    name: "Profile",
    describe: "Edit your personal info and account settings.",
    icon: <BsPerson size={25} />

  }
]
const templeteQuestion = [
  {
    q1: "",
    a1: "To build a funnel from a template, select a template from the library, customize it with your brand details, and publish it to your domain.",
  },
  {
    q2: "📄 How to Get Website Copy",
    a2: "To get website copy, use the AI copywriting tool to generate content based on your brand and audience details. You can also import existing content from your website."
  },
  {
    q3: "📥 How to Import a Template",
    a3: "To import a template, go to the template library, select the import option, and upload your template file. Ensure it meets the required format."

  }
]
export default function Contact() {
  const [show, setShow] = useState(false);
  const [domain, setDomain] = useState(false)
  const [profile, setProfile] = useState(false)
  const [template, setTemplate] = useState(true)


  const [search, setSearch] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setSearch(e.target.value);
  };

  const handleInformation = (name: string) => {
    setShow(false);
    console.log(name);

    if (name === "Template Builder") {
      setTemplate(true);
      setDomain(false)
      setProfile(false);
    } else if (name === "Domains") {
      setTemplate(false);
      setDomain(true)
      setProfile(false);
    } else {
      setTemplate(false);
      setDomain(false)
      setProfile(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-scree">
      <HeaderSection
        heading={`Help Center`}
        name="Contact Support"
      />

      <div className="flex flex-col items-center justify-center w-full h-full">

        <div className="flex items-center justify-center borde w-[90%] max-w-md bg-white shadow-md p-2 rounded-full text-gray-600 border-gray-300 focus:outline-none focus:border-blue-500">
          <IoSearchOutline size={25} className=" ml-5" />
          <input type="text" value={search} onChange={handleChange} placeholder="type you issue" className="w-full ml-2 p-2  outline-0 border-0 " name="search" />
        </div>


      </div>
      {
        !show &&
        <div className=" ">
          <div className="w-[50px] h-[50px] my-5 bg-white rounded-full flex justify-center items-center shadow-md cursor-pointer mt-5" onClick={() => setShow(true)}>
            <IoArrowBackOutline size={25} />
          </div>
        </div>
      }
      {
        show ?
          <div className="grid lg:grid-cols-3 gap-6 p-5 md:grid-cols-2 grid-cols-1 items-center justify-center mt-10">
            {
              btnData.map((btn, i) => (
                <div onClick={() => handleInformation(btn.name)} className="group border  rounded flex flex-col justify-between  items-center py-5 px-15 border-gray-300  hover:border-gray-500 cursor-pointer transition hover:scale-105">
                  <div className="icon w-[60px] h-[60px] rounded-full bg-blue-200 flex justify-center items-center text-white transition group-hover:bg-white group-hover:text-slate-500">
                    {btn.icon}
                  </div>
                  <Heading text={btn.name} className=" text-[25px]" />
                  <Description text={btn.describe} desClass="text-gray-600 h-[100px]" />
                </div>

              ))
            }
          </div> :

          <div className="flex flex-col w-full h-full">
            {
              domain &&
             <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <span className="mr-2">🔧</span> How to Add a Domain
      </h2>
      <p className="text-gray-600 mb-6">
        Follow these steps to import your funnel template into the platform:
      </p>

      <ol className="list-decimal list-inside text-gray-700 space-y-4">
        <li>
          <strong>Navigate to the Domains Page</strong>
          <p className="text-gray-600 ml-4">
            From your dashboard, go to the Domains page.
          </p>
        </li>
        <li>
          <strong>Click on "Add New Domain"</strong>
          <p className="text-gray-600 ml-4">
            Once on the Domains page, locate and click the Add New Domain
            button. This will open a modal window where you can enter the
            details of your domain.
          </p>
        </li>
        <li>
          <strong>Choose Your Platform</strong>
          <p className="text-gray-600 ml-4">
            Inside the modal, choose your platform:
          </p>
          <ul className="list-disc list-inside ml-6 text-gray-600">
            <li>GoHighLevel</li>
            <li>ClickFunnels</li>
          </ul>
          <p className="text-gray-600 ml-4">
            Make sure to select the correct platform your domain is associated
            with.
          </p>
        </li>
        <li>
          <strong>Enter Your Domain URL</strong>
          <p className="text-gray-600 ml-4">
            Next, type your domain into the Domain URL input field.
          </p>
          <p className="text-gray-500 italic ml-4">
            Tip: If you’re unsure how to retrieve your domain URL, click the
            help link located just beneath the input field. It will guide you
            through the steps.
          </p>
        </li>
        <li>
          <strong>Finalize and Add Domain</strong>
          <p className="text-gray-600 ml-4">
            Review your selections and domain details. Once you're confident
            everything is correct, click the Add Domain button to complete the
            process.
          </p>
        </li>
      </ol>
    </div>
            }
            {
              profile &&
              <>
                <div className="flex flex-col items-center justify-center h-screen">
                  <Heading text="Profile Settings" className="text-[30px] mb-5" />
                  <div className="p-6 bg-white shadow rounded-lg max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-2">How to Edit Your Profile</h2>
      <p className="text-gray-600 mb-4">Updated 3 months ago</p>

      <ol className="list-decimal pl-6 space-y-3">
        <li>
          <b>Navigate to the Profile Page</b>
          <p className="text-gray-700">
            From your dashboard, go to the Profile page.
          </p>
        </li>
        <li>
          <b>Update Your Information</b>
          <p className="text-gray-700">
            Locate the input fields where you can update your information (such
            as your name or other details). Make the necessary changes in the
            provided fields.
          </p>
        </li>
        <li>
          <b>Save Your Changes</b>
          <p className="text-gray-700">
            Once you’re satisfied with the updates, click the{" "}
            <span className="font-semibold">Save Changes</span> button to apply
            them.
          </p>
        </li>
        <li>
          <b>Confirmation Message</b>
          <p className="text-gray-700">
            If everything went well, a confirmation message will appear
            indicating that your profile has been successfully updated.
          </p>
        </li>
      </ol>
    </div>
                </div>
              </>
            }
            {
              template &&
              <div className="flex flex-col ">
                <Heading text="Template Builder" className="text-[30px] mb-5" />
                
                <div className="text-gray-700 mx-10 text-[25px]">
                  <Description text="📄 How to Get Website Copy" desClass="text-gray-600 mb-5 text-[30px]" />
                  <p className="lg:text-[40px] text-[30px] ">
                    Easily import website text into the template wizard by following these steps:
                  </p>

                  <ol className="list-decimal pl-6 mt-4 space-y-4">
                    <li>
                      <b>Locate the "Get Website Copy/Offer" Button</b>
                      <p className="mt-1">
                        While working in the Template Wizard, you’ll find the Get Website Copy button in key sections like:
                      </p>
                      <ul className="list-disc pl-6 mt-2">
                        <li>Offer Details</li>
                        <li>Copy Setup</li>
                      </ul>
                      <p className="mt-1">
                        These buttons are designed to help you quickly pull content from your existing website.
                      </p>
                    </li>

                    <li>
                      <b>Click the Button to Open the Modal</b>
                      <p className="mt-1">
                        Once you click Get Website Copy, a modal window will appear on your screen.
                      </p>
                    </li>

                    <li>
                      <b>Enter Your Website URL</b>
                      <p className="mt-1">
                        In the modal, you’ll be prompted to enter the URL of your website.
                        Make sure the link is accurate and includes http:// or https://.
                      </p>
                    </li>

                    <li>
                      <b>Click “Get Website Copy/Offer”</b>
                      <p className="mt-1">
                        After entering the URL, click the Get Website Copy button.
                        The system will begin extracting the text content from your site.
                      </p>
                    </li>

                    <li>
                      <b>Review the imported Copy</b>
                      <p className="mt-1">
                        If everything works correctly, the relevant website text will automatically appear in the corresponding input field.
                        You can now review and tweak the content as needed.
                      </p>
                      <p className="mt-1">
                        If nothing appears, double-check the URL and try again.
                      </p>
                    </li>
                  </ol>


                </div>
                <div className="text-gray-700 mx-10 text-[25px]">
                  <Description text="🏗️ How to build a funnel from a Template" desClass="text-gray-600 mb-5 text-[30px]" />
                  <p className="text-sm text-gray-500 mb-4">Avatar Senaid Bacinovic • Updated 3 months ago</p>

                  <p>

                    Easily build a funnel from a template by following these steps:</p>

                  <ol className="list-decimal pl-6 mt-4 space-y-4">
                    <li>
                      <b>Go to the Templates Page</b>
                      <p className="mt-1">
                        Start by navigating to the Templates page from your dashboard.
                      </p>
                    </li>

                    <li>
                      <b>Select the Template You Want to Build</b>
                      <p className="mt-1">
                        Click on the template you want to use. Once selected, you’ll automatically be redirected to the Template Details - Setup Wizard page.
                      </p>
                    </li>

                    <li>
                      <b>Complete the Setup Wizard</b>
                      <p className="mt-1">
                        On the Setup Wizard page, you’ll need to fill in important details to personalize your funnel:
                      </p>
                      <ul className="list-disc pl-6 mt-2">
                        <li>Brand Identity</li>
                        <li>Offer Details</li>
                        <li>Target Audience</li>
                        <li>Funnel Setup</li>
                        <li>Copy Setup</li>
                      </ul>
                      <p className="mt-1">Take your time to enter accurate information in each section.</p>
                    </li>

                    <li>
                      <b>Create the Funnel</b>
                      <p className="mt-1">
                        After you’ve entered all necessary details and verified everything is correct, click the Create Funnel button.
                      </p>
                    </li>

                    <li>
                      <b>Track Progress and Redirect</b>
                      <p className="mt-1">
                        If the funnel creation is successful, a progress bar will appear in the bottom-left corner of the screen.
                      </p>
                      <p className="mt-1">Once complete:</p>
                      <ul className="list-disc pl-6 mt-2">
                        <li>You’ll be automatically redirected to the page of the funnel.</li>
                        <li>If you're not redirected, look for a link at the bottom of the screen to manually access your new funnel, provided there are no errors.</li>
                      </ul>
                    </li>
                  </ol>

                </div>
                <div className="text-gray-700 mx-10 text-[25px]">
                  <Description text="📥 How to Import a Template" desClass="text-gray-600 mb-5 text-[30px]" />
                  <p className="text-sm text-gray-500 mb-4">
                    Avatar Senaid Bacinovic • Updated 3 months ago
                  </p>

                  <p>Easily import a Template by following these steps:</p>

                  <ol className="list-decimal pl-6 mt-4 space-y-4">
                    <li>
                      <b>Go to the Templates Page</b>
                      <p className="mt-1">
                        From your dashboard, go to the Templates page.
                      </p>
                    </li>

                    <li>
                      <b>Click on "Import Template"</b>
                      <p className="mt-1">
                        On the Templates page, click the Import Template button. This will open a modal window where you can input the details of your funnel.
                      </p>
                    </li>

                    <li>
                      <b>Fill in the Template Details</b>
                      <p className="mt-1">Inside the modal, complete the following fields:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>
                          <b>Title:</b> Enter the name of your funnel. This is how it will appear in your funnels list.
                        </li>
                        <li>
                          <b>Page URL:</b> Paste the URL of the funnel page you want to import.
                        </li>
                        <li>
                          ⚠️ Currently, only GoHighLevel pages are supported.
                        </li>
                        <li>
                          <b>Ownership Confirmation:</b> Tick the checkbox to confirm that the page URL you provided is your own and that you have the right to import it.
                        </li>
                      </ul>
                    </li>

                    <li>
                      <b>Confirm the Import</b>
                      <p className="mt-1">
                        Once you’ve double-checked that all the details are correct, click the Confirm button.
                      </p>
                      <p className="mt-1">
                        If everything is successful, you’ll be redirected within a few seconds to our Template Details - Setup Wizard page, where you can continue setting up your funnel.
                      </p>
                    </li>
                  </ol>


                </div>





              </div>
            }
          </div>
      }

    </div>
  );
}


