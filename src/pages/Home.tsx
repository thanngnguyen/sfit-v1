import NavBar from "../components/NavBar";
import Slider from "../components/Slider";
import Logo from "../assets/logoCLB.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

function Home() {
  const [widthWindow, setWidthWindow] = useState(window.innerWidth);
  const [isModalOpen, setIsModalOpen] = useState(false); // State quản lý modal

  useEffect(() => {
    const handleResize = () => setWidthWindow(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [widthWindow]);

  const handleModel = () => {
    setIsModalOpen(!isModalOpen); // Toggle modal khi click
  };

  const handleVideo = () => {
    window.open("https://www.facebook.com/share/v/1CH2opBTnD/", "_blank");
  };

  const handleDetail = () => {
    // go to link
    window.open("https://www.facebook.com/sfit2016", "_blank");
  };

  return (
    // Home
    <div className={`overflow-x-hidden `}>
      {/* Modal Full Screen NavBar */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center"
          onClick={handleModel}
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center text-white">
            <nav className="w-full h-full flex flex-col justify-center items-center text-center">
              <ul className="text-3xl">
                <li className="py-4">
                  <Link
                    to="home"
                    onClick={handleModel}
                    duration={500}
                    smooth={true}
                  >
                    Trang chủ
                  </Link>
                </li>
                <li className="py-4">
                  <Link
                    to="team"
                    onClick={handleModel}
                    duration={500}
                    smooth={true}
                  >
                    Các ban trực thuộc
                  </Link>
                </li>
                <li className="py-4">
                  <Link
                    to="activity"
                    onClick={handleModel}
                    duration={500}
                    smooth={true}
                  >
                    Hoạt động
                  </Link>
                </li>
                <li className="py-4">
                  <Link
                    to="training"
                    onClick={handleModel}
                    duration={500}
                    smooth={true}
                  >
                    Đào tạo
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Welcome */}
      <div
        className="relative w-screen h-screen
                      flex justify-center"
      >
        {/* Background */}
        <div
          className="after:absolute after:w-screen after:h-screen after:bg-black after:opacity-30
                        absolute w-screen h-screen 
                        flex items-center justify-center shrink-0
                        overflow-x-hidden  
                        bg-cover bg-no-repeat bg-[url(./assets/CLB-v2.jpg)] blur-sm "
        ></div>

        {/* Main */}
        {widthWindow < 768 ? (
          <div id="home" className="absolute md:mt-10">
            {/* Navigation */}
            <div className="m-[20px]">
              <div className="float-left">
                <span
                  className="w-fit h-fit text-[30px]
              xl:text-[11.625rem] text-transparent leading-[100%] font-bold font-['Jost']
              drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)]
              bg-[linear-gradient(111deg,_#DEFFEE_10%,_#0FA858_72%,_#194C35_87%)] bg-clip-text "
                >
                  SFIT
                </span>
              </div>
              <div
                className="float-right text-blue-100 ml-[10px]"
                onClick={handleModel}
              >
                <svg width="24" height="24" fill="none" aria-hidden="true">
                  <path
                    d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="float-right text-blue-100">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="m19 19-3.5-3.5"></path>
                  <circle cx="11" cy="11" r="6"></circle>
                </svg>
              </div>
            </div>
            {/* First Page */}
            <div className="w-screen h-[80vh] px-24 flex flex-col lg:flex-row justify-center items-center">
              {/* Information */}
              <div className="flex flex-col w-fit mt-[30px]">
                <div className="flex flex-col w-fit items-center justify-center">
                  <span>
                    <img src={Logo} alt="Logo" className="rounded-full" />
                  </span>
                  <span className="w-fit text-4xl xl:text-5xl font-bold text-white mt-[20px]">
                    UTC'S IT CLUB
                  </span>
                </div>
                <div className="flex mt-[20px] justify-center items-center">
                  <div
                    className="w-fit 
                              flex items-center justify-center my-2
                              xl:my-6"
                    onClick={handleVideo}
                  >
                    <button type="button" className="w-[70px] h-[70px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="70"
                        height="70"
                        viewBox="0 0 70 70"
                        fill="none"
                      >
                        <path
                          d="M47.2822 32.3925L28.3997 22.9484C27.8659 22.6813 27.2727 22.5551 26.6764 22.5819C26.0801 22.6087 25.5005 22.7875 24.9928 23.1015C24.4852 23.4154 24.0662 23.8539 23.7757 24.3754C23.4853 24.8969 23.3331 25.484 23.3335 26.0809V43.9192C23.3331 44.5161 23.4853 45.1032 23.7757 45.6247C24.0662 46.1462 24.4852 46.5847 24.9928 46.8986C25.5005 47.2125 26.0801 47.3914 26.6764 47.4182C27.2727 47.445 27.8659 47.3188 28.3997 47.0517L47.2822 37.6075C47.7661 37.3651 48.1729 36.9927 48.4572 36.5322C48.7415 36.0717 48.892 35.5412 48.892 35C48.892 34.4589 48.7415 33.9283 48.4572 33.4678C48.1729 33.0073 47.7661 32.635 47.2822 32.3925Z"
                          stroke="#F8F8F8"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M35 61.25C49.4975 61.25 61.25 49.4975 61.25 35C61.25 20.5025 49.4975 8.75 35 8.75C20.5025 8.75 8.75 20.5025 8.75 35C8.75 49.4975 20.5025 61.25 35 61.25Z"
                          stroke="#F8F8F8"
                          stroke-width="2"
                        />
                      </svg>
                    </button>
                    <span className="w-fit text-xl font-bold text-white sm:mr-10">
                      Xem video
                    </span>
                  </div>
                  <button
                    onClick={handleDetail}
                    type="button"
                    className="w-48 h-16
                                            bg-[#D9D9D9] rounded-[36px]
                                              shadow-[_0px_4px_4px_0px_rgba(0,0,0,0.31)]"
                  >
                    <span className="text-[#267452] text-xl font-bold">
                      Tìm hiểu thêm
                    </span>
                  </button>
                </div>
              </div>
              <div className="hidden md:block">
                {/* Slider */}
                <Slider />
              </div>
            </div>
          </div>
        ) : (
          <div id="home" className="absolute mt-10">
            {/* Navigation */}
            <NavBar />
            {/* First Page */}
            <div className="w-screen h-[80vh] px-24 flex flex-col lg:flex-row justify-between items-center">
              {/* Information */}
              <div className="flex flex-col w-fit">
                {/* <span
                  className="w-fit h-fit text-[140px]
              xl:text-[11.625rem] text-transparent leading-[100%] font-bold font-['Jost']
              drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)]
              bg-[linear-gradient(111deg,_#DEFFEE_10%,_#0FA858_72%,_#194C35_87%)] bg-clip-text "
                >
                  SFIT
                </span> */}
                <img
                  src="/logo-sfitweb.png"
                  width={300}
                  height={300}
                  alt="sfit"
                />
                <span className="w-fit mt-4 text-4xl xl:text-5xl font-bold text-white">
                  UTC'S IT CLUB
                </span>
                <div
                  onClick={handleVideo}
                  className="w-fit 
                              flex items-center justify-center my-2
                              xl:my-6"
                >
                  <button type="button" className="w-[70px] h-[70px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="70"
                      height="70"
                      viewBox="0 0 70 70"
                      fill="none"
                    >
                      <path
                        d="M47.2822 32.3925L28.3997 22.9484C27.8659 22.6813 27.2727 22.5551 26.6764 22.5819C26.0801 22.6087 25.5005 22.7875 24.9928 23.1015C24.4852 23.4154 24.0662 23.8539 23.7757 24.3754C23.4853 24.8969 23.3331 25.484 23.3335 26.0809V43.9192C23.3331 44.5161 23.4853 45.1032 23.7757 45.6247C24.0662 46.1462 24.4852 46.5847 24.9928 46.8986C25.5005 47.2125 26.0801 47.3914 26.6764 47.4182C27.2727 47.445 27.8659 47.3188 28.3997 47.0517L47.2822 37.6075C47.7661 37.3651 48.1729 36.9927 48.4572 36.5322C48.7415 36.0717 48.892 35.5412 48.892 35C48.892 34.4589 48.7415 33.9283 48.4572 33.4678C48.1729 33.0073 47.7661 32.635 47.2822 32.3925Z"
                        stroke="#F8F8F8"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M35 61.25C49.4975 61.25 61.25 49.4975 61.25 35C61.25 20.5025 49.4975 8.75 35 8.75C20.5025 8.75 8.75 20.5025 8.75 35C8.75 49.4975 20.5025 61.25 35 61.25Z"
                        stroke="#F8F8F8"
                        stroke-width="2"
                      />
                    </svg>
                  </button>
                  <span className="w-fit text-xl font-bold text-white">
                    Xem video
                  </span>
                </div>
                <button
                  onClick={handleDetail}
                  type="button"
                  className="w-48 h-16
                                            bg-[#D9D9D9] rounded-[36px]
                                              shadow-[_0px_4px_4px_0px_rgba(0,0,0,0.31)]"
                >
                  <span className="text-[#267452] text-xl font-bold">
                    Tìm hiểu thêm
                  </span>
                </button>
              </div>
              <div className="hidden md:block">
                {/* Slider */}
                <Slider />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
