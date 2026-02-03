import { useEffect, useState } from "react";
import LeaderCard from "./LeaderCard";
import Leader1 from "../../assets/leaders/6_Admin_1.jpg";
import Leader2 from "../../assets/leaders/6_Admin_2.jpg";
import Leader3 from "../../assets/leaders/6_Admin_3.jpg";
import Leader4 from "../../assets/leaders/6_Admin_4.jpg";

const chunhiem = {
  name: "Hoàng Mạnh Khiêm",
  position: "Chủ nhiệm",
  image: Leader1,
  facebook: "https://www.facebook.com/hoangmanhkhiem.IT",
  email: "https://www.facebook.com/hoangmanhkhiem.IT",
};

const leadersData = [
  {
    name: "Nguyễn Văn Hoàng",
    position: "Phó chủ nhiệm",
    image: Leader3,
    facebook: "https://www.facebook.com/zunohoang",
    email: "https://www.facebook.com/zunohoang",
  },
  {
    name: "Hà Thị Thúy Hiên",
    position: "Phó chủ nhiệm",
    image: Leader2,
    facebook: "https://www.facebook.com/hien.ha.htth.09",
    email: "https://www.facebook.com/hien.ha.htth.09",
  },
  {
    name: "Nguyễn Công Thắng",
    position: "Phó chủ nhiệm",
    image: Leader4,
    facebook: "https://www.facebook.com/thangnguyen.0703",
    email: "https://www.facebook.com/thangnguyen.0703",
  },
];

const centerStyle = {
  transform: "scale(1.2)",
  transformOrigin: "center",
  marginTop: "6px",
};

function Leader() {
  const [widthWindow, setWidthWindow] = useState(window.innerWidth);
  const [startX, setStartX] = useState(0);
  const [space, setSpace] = useState(0);
  const [cardStyles, setCardStyles] = useState([{}, centerStyle, {}]);

  useEffect(() => {
    const handleResize = () => setWidthWindow(window.innerWidth);
    window.addEventListener("resize", handleResize);

    if (widthWindow <= 768) {
      setCardStyles([{}, centerStyle, {}]);
    } else {
      setSpace(0);
      setCardStyles([{}, {}, {}]);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [widthWindow]);

  const handleTouchStart = (e: any) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: any) => {
    const endX = e.changedTouches[0].clientX;
    const diffX = startX - endX;

    if (diffX > 50 && space > -250) {
      const newSpace = space - 250;
      setSpace(newSpace);
      updateCardStyles(newSpace);
    } else if (diffX < -50 && space < 250) {
      const newSpace = space + 250;
      setSpace(newSpace);
      updateCardStyles(newSpace);
    }
  };

  const updateCardStyles = (newSpace: any) => {
    if (newSpace === 0) {
      setCardStyles([{}, centerStyle, {}]);
    } else if (newSpace === -250) {
      setCardStyles([{}, {}, centerStyle]);
    } else {
      setCardStyles([centerStyle, {}, {}]);
    }
  };

  return (
    <div
      id="leader"
      className="mt-[184px] mb-[120px] bg-white flex flex-col items-center justify-center"
    >
      <h1 className="text-center tracking-normal font-[Inter] md:text-5xl text-xl font-bold text-[#267452]">
        BAN CHỦ NHIỆM
      </h1>
      <div className="mx-auto mt-2 bg-[#39906A] md:w-[525px] w-[200px] h-[4px] mb-8"></div>

      <LeaderCard leader={chunhiem} />

      {widthWindow < 768 ? (
        <div className="m-[50px]">
          <div
            className="flex gap-[60px] transition-transform duration-500"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{
              transform: `translateX(${space}px)`,
              transition: "transform 0.5s",
            }}
          >
            {leadersData.map((leader, index) => (
              <div
                key={index}
                className="w-[200px] duration-500 ease-in-out"
                style={cardStyles[index]}
              >
                <LeaderCard leader={leader} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="md:flex md:space-x-32 mt-[70px] mb-[8rem]">
          {leadersData.map((leader, index) => (
            <div
              key={index}
              // className={`md:transform ${index === 1 ? "md:translate-y-0" : "md:translate-y-32"
              //   } p-4`}
            >
              <LeaderCard leader={leader} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Leader;
