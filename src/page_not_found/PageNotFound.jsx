import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
    const navigator=useNavigate()
  return (
    <div className="flex items-center justify-center min-h-screen w-full flex-col">
      <h1 className="text-white text-[50px] font-bold font-Poppins">404</h1>
      <h1 className="text-yellow-500 text-[34px] font-bold font-Poppins">Page Not Found</h1>
      <div className="flex gap-2">
        <span className="text-white">back to home page</span><button className="text-yellow-500 underline" onClick={()=>navigator("/")}>back</button>
      </div>
    </div>
  );
}

export default PageNotFound
