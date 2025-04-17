export default function Login () {
  return (
    <>
        <article className="box w-[375px] h-[434.03px] bg-white rounded-[8px] outline-[1px] outline-[#D1D1D1] px-[20px] py-[40px] flex flex-col gap-[20px] m-8">
            <div className="text-box w-[325px] h-[58px] bg-white gap-[10px]">
                <h1 className="text-xl font-semibold">Login Into App</h1>
                <h2 className="text-sm font-light inline-block align-bottom">Please enter your details to continue.</h2>
            </div>

            <div className="w-[325px] h-[276.03px] bg-white flex flex-col gap-[32px]">
                <div className="w-[325px] h-[140.03px] bg-white flex flex-col gap-4">
                    <input 
                        type="text" 
                        placeholder="someone@example.com" 
                        className="w-[325px] h-[44px] px-[16px] py-[14px] rounded-[8px] outline-[1px] outline-[#D1D1D1] text-sm font-normal"/>
                    <input 
                        type="text" 
                        placeholder="Enter Password"
                        className="w-[325px] h-[44px] px-[16px] py-[14px] rounded-[8px] outline-[1px] outline-[#D1D1D1] text-sm font-normal"/>
                    <label htmlFor="" className="flex items-center space-x-2 text sm">
                        <input type="checkbox"/>
                        <span className="text-sm text-[#4F4F4F]">I agreee with terms and policies.</span>
                    </label>
                </div>

                <div className="buttons w-[325px] h-[104px] bg-white flex flex-col gap-[16px]">
                    <button className="w-[325px] h-[44px] px-[20px] py-[14px] rounded-[8px] outline-[1px] outline-[#D1D1D1] bg-[#4F4F4F] text-[#F5F5F5] text-sm flex items-center justify-center">Log In</button>
                    <button className="w-[325px] h-[44px] px-[20px] py-[14px] rounded-[8px] outline-[1px] outline-[#D1D1D1] bg-[#FFFFFF] text-[#4F4F4F] text-sm flex items-center justify-center">Go To Sign up</button>
                </div>
            </div>
        </article>
    </>
  );
}