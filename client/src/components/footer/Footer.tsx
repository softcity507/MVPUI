 
export default function Footer() {
  const year=new Date().getFullYear();
  return (
    <div className=" text-gray-400 p-4 text-center borde">
          Copyrights by MVP™  {year} | Terms & Conditions
     </div>
  );
}
