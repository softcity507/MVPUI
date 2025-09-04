import { useState, useEffect } from "react";
import { Heading } from "../../components/mini/Heading";
import { BlackDialogWrapper } from "../../components/mini/BlackDialogWrapper";
import CustomInput from "../../components/mini/Custom";
import { Empty, Image } from "antd";
import { RiDeleteBin5Line } from "react-icons/ri";
import HeaderSection from "../../components/small/DashboardHead";
import { Info } from "../utils/Tostify";

interface DomainData {
  domainURL: string;
  id: string;
}

export default function Domain() {
  const ghlDomainRegex = /^https?:\/\/([a-zA-Z0-9-]+\.)?gohighlevel\.com(\/.*)?$/;

  const [open, setOpen] = useState(false);
  const [instruction, setInstruction] = useState(false);
  const [confirm, setConfirm] = useState<{ show: boolean; id?: string }>({ show: false });
  const [domains, setDomains] = useState<DomainData[]>([]);

  const [newDomain, setNewDomain] = useState<DomainData>({
    domainURL: "",
    id: "",
  });

   useEffect(() => {
    const savedDomains = localStorage.getItem("domains");
    if (savedDomains) {
      try {
        const parsed = JSON.parse(savedDomains) as DomainData[];
        setDomains(parsed);
      } catch (err) {
        console.error("Failed to parse domains", err);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("domains", JSON.stringify(domains));
  }, [domains]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewDomain((prev) => ({
      ...prev,
      [name]: value,
      id: Date.now().toString(),  
    }));
  };

 const handleAddDomain = () => {
  if (newDomain.domainURL.trim() === "") return;

  // Validate domain format
  if (!ghlDomainRegex.test(newDomain.domainURL)) {
    Info("Only valid GHL account domains are accepted!");
    return;
  }

for(const domain of domains) {
    if (domain.domainURL === newDomain.domainURL) {
      Info("This domain is already added.");
      return;
    }else{
      setDomains((prev) => [...prev, newDomain]);
      setNewDomain({ domainURL: "", id: "" });
      setOpen(false);
      Info("Domain added successfully!");
    }
  }

};
  const deleteDomain = (id?: string) => {
    if (!id) return;
    setDomains((prev) => prev.filter((d) => d.id !== id));
    setConfirm({ show: false, id: undefined });
  };

  return (
    <div className="flex flex-col h-screen">
      <HeaderSection
        heading={`Domains (${domains.length})`}
        name="Add New Domain"
        onButtonClick={() => setOpen(true)}
      />

      <div className="w-full ">
        <div className="lg:w-[70%] w-[90%] bg-gray-100 rounded border border-gray-500 flex flex-col mx-auto py-2">
          {domains.length > 0 ? (
            <div className="w-full">
              <Heading text="Approved Domains" className="border-b border-gray-500 py-4 " />
              <div className="flex flex-col gap-y-2 px-4 overflow-auto m-2">
                {domains.map((d) => (
                  <div
                    key={d.id}
                    className="flex justify-between items-center rounded"
                  >
                    <p className="text-gray-600 lg:text-[13px] text-[12px] whitespace-nowrap">{d.domainURL}</p>
                    <button
                      onClick={() => setConfirm({ show: true, id: d.id })}
                      className="bg-red-500 text-[18px] mx-2 p-2 text-white rounded-full"
                    >
                      <RiDeleteBin5Line />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <Empty description="No Domains" />
          )}
        </div>
      </div>

       <BlackDialogWrapper
        open={open}
        title="Add Domain Submit"
        onCloseOrSubmit={() => setOpen(false)}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddDomain();
          }}
        >
          <CustomInput
            label="Domain"
            name="domainURL"
            value={newDomain.domainURL}
            onChange={handleChange}
            type="text"
            required={true}
          />
          <button
            type="button"
            onClick={() => setInstruction(true)}
            className="cursor-pointer text-blue-700 rounded-full"
          >
            Steps to Retrieve Your Domain URL
          </button>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="text-[#fff] rounded-full px-4 py-2 bg-blue-600"
            >
              Add Domain
            </button>
          </div>
        </form>
      </BlackDialogWrapper>

      {/* Instructions Dialog */}
      <BlackDialogWrapper
        open={instruction}
        title="Steps to Retrieve Your Domain URL"
        submitText="GoHighLevel Instructions"
        onCloseOrSubmit={() => setInstruction(false)}
      >
        <div className="mb-2">
          <ol className="list-decimal pl-6 text-gray-700">
            <li>Open your GoHighLevel Dashboard</li>
            <li>Copy your account domain</li>
          </ol>
        </div>
        <Image width={400} src="https://app.aifunnels.ai/img/copy_url_ghl.png" />
      </BlackDialogWrapper>

      {/* Confirm Delete Dialog */}
      <BlackDialogWrapper
        open={confirm.show}
        title="Are you sure you want to delete this domain?"
        submitText=""
        onCloseOrSubmit={() => setConfirm({ show: false })}
      >
        <div className="flex justify-center">
          <button
            className="text-white rounded-full px-4 py-2 bg-red-600 hover:bg-red-700 transition"
            onClick={() => deleteDomain(confirm.id)}
          >
            Delete Domain
          </button>
        </div>
      </BlackDialogWrapper>
    </div>
  );
}
