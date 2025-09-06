import React, { useEffect, useState } from "react";
import { Heading } from "../mini/Heading";
import CustomInput from "../mini/Custom";
import { Languages } from "../../components/variables/Country";
import { ButtonLoader } from "../mini/ButtonLorder";
import CustomTextarea from "../CustomTextarea";
import { Button, Upload, UploadProps } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Error, Success } from "../../pages/utils/Tostify";

type FormDataType = {
    name: string;
    tagline: string;
    tone: string;
    language: string;
    Offername: string;
    Offertype: string;
    problem: string;
    features: string;
    unique: string;
    example: string;
    customer: string;
    audience: string;
    expected: string;
    action: string;
    domain: string;
    inspiration: string;

};

const steps = [
    "Brand Identity",
    "Offer Details",
    "Target Audience",
    "Funnel Setup",
    "Copy Setup",
    "Images Setup",

];

const fonts = ["Casual", "Arial", "Lato", "Open Sans", "Montserrat", "Roboto"]
const typeoffer = ["Digital Product", "Service", "Physical Product", "Software"]
const props: UploadProps = {
    name: 'file',
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            Success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            Error(`${info.file.name} file upload failed.`);
        }
    },
};

const MultiStepFormBrand: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const getdomains = localStorage.getItem("domains");
    let localvalue = getdomains ? JSON.parse(getdomains) : [];
    let domainArray = []
    for (let i = 0; i < localvalue.length; i++) {
        domainArray.push(localvalue[i].domainURL)
    }
    useEffect(() => {
        const savedFormData = localStorage.getItem("formData");
        if (savedFormData) {
            setFormData(JSON.parse(savedFormData));
        }
    }, []);


    console.log(domainArray)
    const [formData, setFormData] = useState<FormDataType>({
        name: "",
        tagline: "",
        tone: "Professional",
        language: "English",
        Offername: "",
        Offertype: typeoffer[0],
        problem: "",
        features: "",
        unique: "",
        example: "",
        customer: "",
        audience: "",
        expected: "",
        action: "",
        domain: domainArray[0],
        inspiration: "",


    });
    useEffect(() => {
        localStorage.setItem("formData", JSON.stringify(formData));
    }, [formData]);


    const [errors, setErrors] = useState<Partial<FormDataType>>({});


    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" }); // clear error when typing
    };



    const validateStep = () => {
        let newErrors: Partial<FormDataType> = {};

        if (currentStep === 0) {
            if (!formData.name.trim()) newErrors.name = "Brand Name is required";
            if (!formData.tagline.trim()) newErrors.tagline = "Tagline is required";


        } else if (currentStep === 1) {
            if (!formData.Offername.trim()) newErrors.Offername = "Offername is required";
            if (!formData.problem.trim()) newErrors.problem = "Problem is required";
            if (!formData.features.trim()) newErrors.features = "Please provide a valid answe";
            if (!formData.unique.trim()) newErrors.unique = "Unique is required";
        } else if (currentStep === 2) {
            if (!formData.customer.trim()) newErrors.customer = "Please provide a valid Ideal Customer description.";
            if (!formData.audience.trim()) newErrors.audience = "Please provide a valid Audience Pain Points.";
            if (!formData.expected.trim()) newErrors.expected = "Please provide a valid Expected Transformation After Using the Offer.";

        } else if (currentStep === 3) {
            if (!formData.action.trim()) newErrors.action = "Please provide a valid Call to Action (CTA).";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // only true if no errors
    };


    // For Backend Funtionality
    const formSubmit = () => {
        console.log("✅ Final formData", formData);
        alert("Form submitted!");
        localStorage.removeItem("formData");

    };



    const nextStep = () => {
        if (!validateStep()) return; // stop if validation fails
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) setCurrentStep(currentStep - 1);
    };

    return (
        <div className="w-[100%] mx-auto h-full flex flex-col justify-between">
            {/* Stepper */}
            <div className="   flex flex-col items-center ">
                <Heading text="Add Template" className=" my-2 text-[30px]" />
                <div className="flex flex-col items-center w-full">
                    <ol className="flex items-center   lg:w-[80%] w-[100%] lg:mx-3 m-3   ">
                        {steps.map((label, index) => (
                            <li
                                key={index}
                                className={`flex w-full items-center after:content-[''] after:w-full after:h-1 after:inline-block ${index < steps.length - 1
                                    ? "after:border-b after:border-gray-200 after:border-4 dark:after:border-gray-700"
                                    : "after:hidden"
                                    }`}
                            >
                                <div
                                    className={`flex items-center justify-center w-7 h-7 rounded-full lg:h-12 lg:w-12 shrink-0 ${index <= currentStep
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-200 text-gray-600 dark:bg-gray-700"
                                        }`}
                                >
                                    {index + 1}

                                </div>
                            </li>
                        ))}
                    </ol>
                    <ol className="flex items-center lg:w-[80%] w-[100%]  lg:m-3 m-3   ">
                        {steps.map((label, index) => (
                            <li
                                key={index}
                                className={`flex w-full items-center after:content-[''] after:w-full after:h-1 after:inline-block `}
                            >
                                <div
                                    className={`flex items-center justify-center lg:w-12 shrink-0 ${index <= currentStep
                                        ? "text-blue-600 "
                                        : " text-gray-600 dark:bg-gray-700"
                                        }`}
                                >
                                    {label.split(" ")[0]}
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>

            {/* Step Content */}
            <form className="space-y-2 h-auto overflow-y-scroll lg:h-[380px]">
                <div className="grid  mx-6 grid-cols-1 gap-4 ">
                    <Heading text={steps[currentStep]} className="my-5 text-[25px]" />

                    <div className="flex flex-col w-[100%]">


                        {currentStep === 0 && (
                            <div>
                                <CustomInput
                                    label="Brand Name"
                                    name="name"
                                    placeholder="Enter Brand Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    type="text"
                                    required
                                    about="The name your brand is known by."
                                    error={errors.name}
                                />

                                <CustomInput
                                    label="Tagline / Slogan"
                                    placeholder="Enter Tagline / Slogan"
                                    name="tagline"
                                    value={formData.tagline}
                                    onChange={handleChange}
                                    type="text"
                                    required
                                    about="Short slogan or tagline for your brand."
                                    error={errors.tagline}
                                />

                                <CustomInput
                                    label="Preferred Voice / Tone"
                                    name="tone"
                                    type="select"
                                    value={formData.tone}
                                    onChange={handleChange}
                                    options={["Friendly", "Bold", "Professional", "Casual", "Authoritative"]}
                                    about="The tone you want your brand to communicate with."
                                    error={errors.tone}
                                />

                                <CustomInput
                                    label="Language"
                                    name="language"
                                    type="select"
                                    value={formData.language}
                                    onChange={handleChange}
                                    options={Languages}
                                    about="The language your brand uses."
                                    error={errors.language}
                                />

                            </div>
                        )}

                        {currentStep === 1 &&
                            <div className="">
                                <CustomInput
                                    label="Offer Name"
                                    placeholder="Enter Offer Name"
                                    name="Offername"
                                    value={formData.Offername}
                                    onChange={handleChange}
                                    type="text"
                                    required
                                    about="Clear and recognizable offer name."
                                    error={errors.Offername}
                                />

                                <CustomInput
                                    label="Offer Type"
                                    placeholder="Enter Offer Type"
                                    name="Offertype"
                                    type="select"
                                    value={formData.Offertype}
                                    onChange={handleChange}
                                    options={typeoffer}
                                    about="Best type that describes your offer."
                                    error={errors.Offertype}
                                />


                                <CustomTextarea
                                    label="What problem does it solve?"
                                    name="problem"
                                    value={formData.problem}
                                    onChange={handleChange}
                                    placeholder="Enter Main issue your offer helps solve"
                                    rows={5}
                                    error={errors?.problem}
                                    description="Key benefits or features of your offer."
                                />

                                <CustomTextarea
                                    label="Main Benefits / Features"
                                    name="features"
                                    value={formData.features}
                                    onChange={handleChange}
                                    placeholder="Enter Key benefits or features of your offer - Comma Separated"
                                    rows={5}
                                    error={errors?.features}
                                    description="Key benefits or features of your offer."
                                />
                                <CustomInput
                                    label="Unique Selling Proposition (USP)"
                                    name="unique"
                                    value={formData.unique}
                                    onChange={handleChange}
                                    placeholder=""
                                    type="text"
                                    about="Best type that describes your offer."
                                    error={errors.unique}
                                />

                                <CustomTextarea
                                    label="Offer Example"
                                    name="example"
                                    value={formData.example}
                                    onChange={handleChange}
                                    placeholder="Example of offer presentation (e.g., social media post, email campaign, brochure text)"
                                    rows={5}
                                    description="Key benefits or features of your offer."
                                />

                            </div>
                        }

                        {currentStep === 2 &&
                            <div>
                                <CustomTextarea
                                    label="Describe Your Ideal Customer"
                                    name="customer"
                                    value={formData.customer}
                                    onChange={handleChange}
                                    placeholder="Enter Type of customer who would benefit most" rows={5}
                                    error={errors?.customer}
                                    description="Type of customer who would benefit most."
                                />
                                <CustomTextarea
                                    label="Audience Pain Points"
                                    name="audience"
                                    value={formData.audience}
                                    onChange={handleChange}
                                    placeholder="Enter Audience Pain Points" rows={5}
                                    error={errors?.audience}
                                    description="Main challenges your audience faces."
                                />
                                <CustomTextarea
                                    label="Expected Transformation After Using the Offer"
                                    name="expected"
                                    value={formData.expected}
                                    onChange={handleChange}
                                    placeholder="Enter What change should customers expect after using your offer" rows={5}
                                    error={errors?.expected}
                                    description="What change should customers expect after using your offer?"
                                />

                            </div>
                        }
                        {currentStep === 3 &&
                            <div>
                                <CustomInput
                                    label="Primary Call to Action (CTA)"
                                    name="action"
                                    value={formData.action}
                                    onChange={handleChange}
                                    type="text"

                                    required
                                    placeholder={"e.g., Book a free Call"}
                                    about="The primary action you want users to take."
                                    error={errors.action}
                                />
                                <CustomInput
                                    label="Domain"
                                    name="domain"
                                    type="select"
                                    value={formData.domain}
                                    onChange={handleChange}
                                    options={domainArray}
                                    about="Domain your funnel will be built on."
                                />
                            </div>
                        }
                        {currentStep === 4 &&
                            <div>
                                <CustomTextarea
                                    label="Add Your Copy For Inspiration"
                                    name="inspiration"
                                    value={formData.inspiration}
                                    onChange={handleChange}
                                    placeholder="Facebook post etc." rows={10}
                                    description="Inspiration copy that reflects your messaging."
                                />

                            </div>}
                        {currentStep === 5 &&
                            <div>

                                <Upload {...props}>
                                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                </Upload>
                                Please review All data Thank you.

                            </div>}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-center mt-6 bottom-0 space-x-2   m-6 h-[10%]">
                    <button
                        type="button"
                        onClick={prevStep}
                        disabled={currentStep === 0}
                        className="px-4 py-2 text-sm font-medium bg-gray-300 rounded-lg disabled:opacity-50"
                    >
                        Previous
                    </button>

                    {currentStep < steps.length - 1 && (
                        <button
                            type="button"
                            onClick={nextStep}
                            className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg"
                        >
                            Next
                        </button>
                    )}

                    {currentStep === steps.length - 1 && (
                        <ButtonLoader
                            onClick={formSubmit}
                            type="button"
                            text="Submit Form"
                            btnClass="border hover:border-blue-500 hover:bg-blue-200 hover:text-blue-600 px-6 py-3 rounded-[15px] border-blue-400 text-blue-700"
                        />
                    )}
                </div>
            </form>
        </div>
    );
};

export default MultiStepFormBrand;
