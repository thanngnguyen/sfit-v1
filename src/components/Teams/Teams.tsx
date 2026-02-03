import TeamCard from "./TeamCard/TeamCard";
import banchunhiem from "../../assets/teams/BAN_CHU_NHIEM.jpg";
import bancansu from "../../assets/teams/BAN_CAN_SU.jpg";
import banchuyenmon from "../../assets/teams/BAN_CHUYEN_MON.jpg";
import banhoctap from "../../assets/class/4_Classes_4.jpg";
import banweb from "../../assets/teams/BAN_WEB.jpg";
import bangame from "../../assets/teams/BAN_GAME.jpg";
import banai from "../../assets/teams/BAN_AI.jpg";
import banktmt from "../../assets/teams/BAN_KY_THUAT_MAY_TINH.jpg";
import baniot from "../../assets/teams/BAN_IOT.jpg";
import bantruyenthong from "../../assets/teams/BAN_TRUYEN_THONG.jpg";
import bandoingoai from "../../assets/teams/BAN_DOI_NGOAI.jpg";
import { useState } from "react";

const teams = [
  {
    name: "BAN CHỦ NHIỆM",
    activate:
      "Đảm bảo hoạt động của CLB diễn ra suôn sẻ, quản lý các ban trực thuộc và định hướng phát triển của CLB.",
    leader: "Hoàng Mạnh Khiêm",
    image: banchunhiem,
    icon: "/src/assets/teams/BAN_CHU_NHIEM_ICON.svg",
  },
  {
    name: "BAN CÁN SỰ",
    activate:
      "Chịu trách nhiệm quản lý các hoạt động hàng ngày của CLB, hỗ trợ Ban Chủ nhiệm trong việc điều hành và tổ chức các sự kiện.",
    leader: "Hoàng Mạnh Khiêm",
    image: bancansu,
    icon: "/src/assets/teams/BAN_CAN_SU_ICON.svg",
  },
  {
    name: "BAN CHUYÊN MÔN",
    activate:
      "Bao gồm các sinh viên năm 2 trở lên có thành tích học tập xuất sắc, có nhiệm vụ tổ chức các lớp học và chia sẻ kiến thức chuyên môn đến các thành viên CLB.",
    leader: "Nguyễn Đức Mạnh",
    image: banchuyenmon,
    icon: "/src/assets/teams/BAN_CHUYEN_MON_ICON.svg",
  },
  {
    name: "BAN HỌC TẬP",
    activate:
      "Sẽ được tham gia vào các lớp học do CLB tổ chức và ban chuyên môn trực tiếp giảng dạy, đồng thời có nhiệm vụ tham gia hỗ trợ tích cực các hoạt động do CLB tổ chức.",
    leader: "Nguyễn Việt Hoàng",
    image: banhoctap,
    icon: "/src/assets/teams/BAN_HOC_TAP_ICON.svg",
  },

  {
    name: "BAN WEB3",
    activate:
      "Phát triển và duy trì các dự án liên quan đến lập trình web, giảng dạy các công nghệ và kỹ thuật liên quan.",
    leader: "Mai Thành Đạt",
    image: banweb,
    icon: "/src/assets/teams/BAN_WEB_ICON.svg",
  },
  {
    name: "BAN LẬP TRÌNH GAME",
    activate:
      "Tạo môi trường học tập và làm việc cho những bạn muốn theo hướng phát triển game (programmer, artist, designer). Thường tổ chức chia đội để tham gia những sự kiện GameJam (GameJam VietNam, GMTK GameJam)",
    leader: "Nguyễn Việt Hoàng",
    image: bangame,
    icon: "/src/assets/teams/BAN_GAME_ICON.svg",
  },
  {
    name: "BAN DATA&AI",
    activate:
      "Nghiên cứu và phát triển các ứng dụng trí tuệ nhân tạo, chia sẻ kiến thức về machine learning và deep learning.",
    leader: "Lương Tiến Dũng",
    image: banai,
    icon: "/src/assets/teams/BAN_AI_ICON.svg",
  },
  {
    name: "BAN KỸ THUẬT MÁY TÍNH",
    activate:
      "Giải quyết các vấn đề liên quan đến phần cứng và kỹ thuật máy tính, tổ chức các buổi thực hành về lắp ráp và sửa chữa máy tính.",
    leader: "Bùi Xuân Sơn",
    image: banktmt,
    icon: "/src/assets/teams/BAN_KY_THUAT_MAY_TINH_ICON.svg",
  },
  {
    name: "BAN IOT",
    activate:
      "Nghiên cứu và phát triển các dự án về Internet of Things, giảng dạy và chia sẻ kiến thức về các thiết bị kết nối. Tham gia các cuộc thi cấp trường, ngoài trường.",
    leader: "Hoàng Trường Dũng",
    image: baniot,
    icon: "/src/assets/teams/BAN_IOT_ICON.svg",
  },
  {
    name: "BAN TRUYỀN THÔNG",
    activate:
      "Xây dựng và phát triển hình ảnh của CLB, quản lý các kênh truyền thông xã hội và tổ chức các chiến dịch quảng bá.",
    leader: "Trần Quang Huy",
    image: bantruyenthong,
    icon: "/src/assets/teams/BAN_TRUYEN_THONG_ICON.svg",
  },
  {
    name: "BAN SỰ KIỆN",
    activate:
      "Chịu trách nhiệm thiết lập và duy trì mối quan hệ với các doanh nghiệp và các câu lạc bộ khác, tổ chức sự kiện, đồng thời tìm kiếm cơ hội hợp tác và tài trợ cho câu lạc bộ.",
    leader: "Nguyễn Thùy Linh",
    image: bandoingoai,
    icon: "/src/assets/teams/BAN_DOI_NGOAI_ICON.svg",
  },
];

function Teams() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div id="team" className="w-screen">
      <h1
        className="text-center tracking-normal
                       font-[Inter] md:text-5xl text-xl font-bold text-[#267452]
                       "
      >
        CÁC BAN TRỰC THUỘC
      </h1>
      <div className="mx-auto mt-2 bg-[#39906A] md:w-[525px] w-[200px] h-[4px]"></div>
      <div className="md:mt-[148px] mt-[50px]">
        {expanded
          ? teams.map((team, index) => (
              <TeamCard key={index} team={team} type={index % 2 === 0} />
            ))
          : teams
              .slice(0, 2)
              .map((team, index) => (
                <TeamCard key={index} team={team} type={index % 2 === 0} />
              ))}
      </div>
      <button
        className="flex mx-auto mt-4 bg-[#39906A] text-white px-4 py-2 rounded relative z-10"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Thu gọn" : "Xem thêm"}
      </button>
    </div>
  );
}

export default Teams;
