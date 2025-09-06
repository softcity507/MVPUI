import { useState } from "react";
import logo from "../../assets/rbg/logo.png";
import FloatingInput from "../../components/mini/FloatingInput";
import { Heading } from "../../components/mini/Heading";
import CustomInput from "../../components/mini/Custom";
import { CountryName } from "../../components/variables/Country";
import { MdDateRange } from "react-icons/md";
import { IoCardOutline } from "react-icons/io5";
import { Form, Input, Tooltip, Button } from "antd";
import banck from "../../assets/rbg/payment.png";
import { Description } from "../../components/mini/Description";
import { ButtonLoader } from "../../components/mini/ButtonLorder";
import Footer from "../../components/footer/Footer";
import { P } from "framer-motion/dist/types.d-Cjd591yU";

const Payments = () => {
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        // Contact info
        name: "",
        email: "",
        businessName: "",
        phone: "",
        state: "",
        zipcode: "",
        country: "Pakistan",

        // Payment info
        cardNumber: "",
        expiry: "",
        cvc: "",
        billingCountry: "Pakistan",
        select: "business"
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Validation
        let errorMsg = "";
        if (name === "name" && value.length < 1) {
            errorMsg = "Can't be blank";
        }
        if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            errorMsg = "Enter a valid email.";
        }
        if (name === "phone" && !/^\d{10,15}$/.test(value)) {
            errorMsg = "Must be a valid phone number.";
        }
        if (name === "zipcode" && !/^\d{4,10}$/.test(value)) {
            errorMsg = "Enter a valid zip code.";
        }

        setErrors((prev) => ({
            ...prev,
            [name]: errorMsg,
        }));
    };

    const handleSubmit = () => {
        let newErrors: Record<string, string> = {};
        let firstInvalidField: string | null = null;

        // Check required fields
        const requiredFields = [
            "name",
            "email",
            "businessName",
            "phone",
            "state",
            "zipcode",
            "country",
            "cardNumber",
            "expiry",
            "cvc",
            "billingCountry",
        ];

        requiredFields.forEach((field) => {
            if (!formData[field as keyof typeof formData]) {
                newErrors[field] = "This field is required.";
                if (!firstInvalidField) {
                    firstInvalidField = field;
                }
            }
        });

        setErrors(newErrors);

        if (firstInvalidField) {
            // Scroll to first invalid field
            const el = document.querySelector(`[name="${firstInvalidField}"]`);
            if (el) {
                (el as HTMLElement).scrollIntoView({ behavior: "smooth", block: "center" });
                (el as HTMLElement).focus();
            }
            return;
        }
        setLoading(true)
        console.log("Submitted Data:", formData);
        setTimeout(() => {
            setLoading(false)

        }, 2000)
    };


    return (
        <div className="bg-gray-700">
            {/* Logo */}
            <div className="flex justify-center items-center ">
                <img
                    src={logo}
                    alt="MVP logo"
                    className="lg:w-[70px] lg:h-[70px] w-[50px] h-[50px]"
                />
            </div>

            <div className=" bg-[#fff] py-5">
                <div className="lg:m-10 m-5 border border-gray-300 pb-5  rounded-[10px] h-auto overflow-y-auto">
                    <div className="lg:p-5 p-2">
                        <div className="">
                            {/* Contact Info */}
                            <Heading
                                text="Contact Information"
                                className="text-[20px] my-5 text-left"
                            />

                            <FloatingInput
                                label="Your name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                error={errors.name}
                            />

                            <FloatingInput
                                label="Your email address"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                error={errors.email}
                            />

                            <div className="flex gap-2">
                                <FloatingInput
                                    label="Your business name"
                                    name="businessName"
                                    value={formData.businessName}
                                    onChange={handleChange}
                                    error={errors.businessName}
                                />

                                <FloatingInput
                                    label="Phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    error={errors.phone}
                                />
                            </div>

                            <div className="flex gap-2">
                                <FloatingInput
                                    label="State"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    error={errors.state}
                                />

                                <FloatingInput
                                    label="Zip Code"
                                    name="zipcode"
                                    value={formData.zipcode}
                                    onChange={handleChange}
                                    error={errors.zipcode}
                                />
                            </div>

                            <CustomInput
                                name="country"
                                type="select"
                                value={formData.country}
                                onChange={handleChange}
                                placeholder="Country"
                                options={CountryName}
                                error={errors.country}
                            />

                            {/* Payment Info */}
                            <Heading
                                text="Payment Information"
                                className="text-[20px] my-5 text-left"
                            />

                            <div className="border rounded-[10px] border-gray-300 m-5 p-5">
                                <div className="h-auto border border-gray-300 rounded-[10px] p-5">
                                    <div className="gap-4 flex items-center text-blue-500">
                                        <IoCardOutline />
                                        <Heading
                                            text="Card"
                                            className="text-left text-blue-500"
                                        />
                                    </div>

                                    <div className="my-5 lg:flex lg:flex-col">
                                        <div className="lg:flex gap-2">
                                            <Form.Item
                                                label="Card Number"
                                                name="cardNumber"
                                                labelCol={{ span: 24 }}
                                                
                                            >
                                                <Input
                                                    name="cardNumber"
                                                    value={formData.cardNumber}
                                                    height={200}
                                                    onChange={handleChange}
                                                    placeholder="1234 1234 1234 1234"
                                                    suffix={
                                                        <Tooltip title="Extra information">
                                                            <img
                                                                className="md:block hidden 
                                                                w-[100px] h-[30px]"
                                                                src={banck}
                                                                alt="bank payments"
                                                            />
                                                        </Tooltip>
                                                    }
                                                />
                                            </Form.Item>

                                            <Form.Item
                                                label="Expiration date (MM/YY)"
                                                name="expiry"
                                                labelCol={{ span: 24 }}
                                            >
                                                <Input
                                                    name="expiry"
                                                    value={formData.expiry}
                                                    onChange={handleChange}
                                                    placeholder="MM / YY"
                                                    suffix={
                                                         <Tooltip title="Extra information">
                                                            <p
                                                                className="md:block hidden 
                                                                w-[10px] h-[30px]"
                                                             > </p>
                                                        </Tooltip>
                                                    }
                                                />
                                            </Form.Item>

                                            <Form.Item
                                                label="Security code"
                                                name="cvc"
                                                labelCol={{ span: 24 }}
                                            >
                                                <Input
                                                    name="cvc"
                                                    value={formData.cvc}
                                                    onChange={handleChange}
                                                    placeholder="CVC"
                                                    suffix={
                                                        <Tooltip title="Extra information">
                                                            <MdDateRange className=" w-[10px] h-[30px]" />
                                                        </Tooltip>
                                                    }
                                                />
                                            </Form.Item>
                                        </div>
                                        <CustomInput
                                            name="billingCountry"
                                            type="select"
                                            value={formData.billingCountry}
                                            onChange={handleChange}
                                            placeholder="Billing Country"
                                            options={CountryName}
                                            error={errors.billingCountry}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}

                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center border-b border-gray-300 py-5">
                        <img className="w-[150px]" src="https://tinder.thrivecart.com/v20250814150647/plugins/core.template.v2/widgets/seal/frontend/assets/guarantee_4.png" alt="secure" />
                    </div>
                    {/* <div className="p-10 gap-5">
                  <Heading text="Choose a pricing option"                             className="text-[20px] my-5  text-left"/>
                   <div className="w-[250px] mb-4 border flex h-auto p-5 rounded-[10px]">
                     <div>
                     <Heading text="$297.00" className=" text-left text-[15px]"/>
                     <span className="text-gray-300 text-[15px]">EARLY BIRD SPECIAL (Business Plan)</span>
                      </div>
                     <input type="radio" value={formData.select} className="" name="select"/>
                   </div>
                    <div className="w-[250px] border flex h-auto p-5 rounded-[10px]">
                     <div>
                     <Heading text="$497.00" className=" text-left text-[15px]"/>
                     <span className="text-gray-300 text-[15px]">EARLY BIRD SPECIAL (Agency Plan)</span>

                     </div>
                     <input type="radio" value={formData.select} className="" name="select"/>
                   </div>

                </div> */}

                    <div className="p-10 gap-5 md:flex ">
                        <div className="md:w-[50%] ">
                            <Heading
                                text="Choose a pricing option"
                                className="text-[20px] my-5 text-left"
                            />

                            <div
                                className={`lg:w-[350px] w-[250px] mb-4 border flex justify-between items-center h-auto p-5 rounded-[10px] cursor-pointer 
                                    ${formData.select === "business" ? "border-blue-600" : "border-gray-300"
                                    }`}
                                onClick={() =>
                                    setFormData((prev) => ({ ...prev, select: "business" }))
                                }
                            >
                                <div>
                                    <Heading
                                        text="$297.00"
                                        className="text-left text-[15px]"
                                    />
                                    <span className="text-gray-400 text-[13px]">
                                        EARLY BIRD SPECIAL (Business Plan)
                                    </span>
                                </div>
                                <input
                                    type="radio"
                                    name="select"
                                    value="business"
                                    checked={formData.select === "business"}
                                    onChange={handleChange}
                                />
                            </div>

                            <div
                                className={`lg:w-[350px] w-[250px] border flex justify-between items-center h-auto p-5 rounded-[10px] cursor-pointer ${formData.select === "agency" ? "border-blue-600" : "border-gray-300"
                                    }`}
                                onClick={() =>
                                    setFormData((prev) => ({ ...prev, select: "agency" }))
                                }
                            >
                                <div>
                                    <Heading
                                        text="$497.00"
                                        className="text-left text-[15px]"
                                    />
                                    <span className="text-gray-400 text-[13px]">
                                        EARLY BIRD SPECIAL (Agency Plan)
                                    </span>
                                </div>
                                <input
                                    type="radio"
                                    name="select"
                                    value="agency"
                                    checked={formData.select === "agency"}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="md:w-[50%] flex flex-col justify-end">
                            <Heading
                                text="Total payment"
                                className="text-[20px] my-5 text-left"
                            />
                            <p> <span>MVP Tool </span> <span>{formData.select === "business" ? "$297.00" : "$497.00"}</span></p>
                            <p className="text-[10px] text-right">All prices in USD</p>
                        </div>

                    </div>


                    <div className="flex justify-end px-5">
                        <ButtonLoader
                            onClick={handleSubmit}
                            type="submit"
                            text="Complete Order"
                            btnClass="border  hover:border-blue-500 hover:bg-blue-200 hover:text-blue-600 px-6 py-3 border-blue-400 text-blue-700 px-5"
                            loading={loading}
                        />

                    </div>
                </div>
            </div>
            <div className="lg:p-10 p-5">
                <div className=" text-center text-[#fff]">
                    <p className=" line-tight mb-5">
                        This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
                    </p>
                    <p className="text-[10px] text-left">
                        We can not and do not make any guarantees about your ability to get results or earn any money with our ideas, information, tools, or strategies. What we can guarantee is your satisfaction with our training. We give you a 30-day 100% satisfaction guarantee on the products we sell, so if you are not happy for any reason with the quality of our training, just ask for your money back. You should know that all products and services by our company are for educational and informational purposes only. Nothing on this page, any of our websites, or any of our content or curriculum is a promise or guarantee of results or future earnings, and we do not offer any legal, medical, tax or other professional advice. Any financial numbers referenced here, or on any of our sites, are illustrative of concepts only and should not be considered average earnings, exact earnings, or promises for actual or future performance. Use caution and always consult your accountant, lawyer or professional advisor before acting on this or any information related to a lifestyle change or your business or finances. You alone are responsible and accountable for your decisions, actions and results in life, and by your registration here you agree not to attempt to hold us liable for your decisions, actions or results, at any time, under any circumstance.
                    </p>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Payments;
