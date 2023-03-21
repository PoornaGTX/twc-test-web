const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-center h-screen bg-mainBackground relative overflow-hidden ">
      <div className="bg-themeColor self-center  rounded-[50%] absolute     -top-[120px] rotate-[35deg]  w-[130%] h-[130%] xl:-top-[180px] xl:w-[150%] xl:h-[150%] xl:rotate-[35deg]    xxl:-top-[200px] xxl:w-[130%] xxl:h-[140%] xxl:rotate-[40deg]      2xl:-top-[240px] 2xl:w-[150%] 2xl:h-[170%] 2xl:rotate-[40deg]        2xxl:-top-[35%]  2xxl:rotate-[30deg]  2xxl:w-[120%] 2xxl:h-[170%]"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Layout;
