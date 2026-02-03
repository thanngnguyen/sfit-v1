interface Leader {
  image: string;
  name: string;
  position: string;
  facebook: string;
  email: string;
}

function LeaderCard({ leader }: { leader: Leader }) {
  return (
    <div className="relative flex flex-col items-center">
      <div className="relative">
        <img
          src={leader.image}
          alt={leader.name}
          className="md:w-[304px] md:h-[304px] w[200px] h-[200px] rounded-full object-cover bg-[#D9D9D9] shadow-[0px_4px_4px_4px_rgba(0,0,0,0.25)]"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 lg:w-[338px] lg:h-[121px] w-[230px] h-[105px]"
          viewBox="0 0 338 121"
          fill="none"
        >
          <path
            d="M3 1C52.5 154.5 286.5 157 334.5 1"
            stroke="#DC9358"
            strokeWidth="6"
          />
        </svg>
      </div>

      <p className="text-center font-bold text-lg mt-[60px]">{leader.name}</p>
      <p className="text-center text-sm">{leader.position}</p>

      <div className="flex justify-center mt-4">
        <a target="_blank" href={leader.facebook} className="mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
          >
            <path
              d="M41.25 22.5C41.25 12.15 32.85 3.75 22.5 3.75C12.15 3.75 3.75 12.15 3.75 22.5C3.75 31.575 10.2 39.1312 18.75 40.875V28.125H15V22.5H18.75V17.8125C18.75 14.1937 21.6937 11.25 25.3125 11.25H30V16.875H26.25C25.2187 16.875 24.375 17.7187 24.375 18.75V22.5H30V28.125H24.375V41.1562C33.8437 40.2187 41.25 32.2312 41.25 22.5Z"
              fill="#39906A"
            />
          </svg>
        </a>
        <a target="_blank" href={leader.email} className="mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
          >
            <path
              d="M41.25 7.5H3.75V37.5H41.25V7.5ZM37.5 15L22.5 24.375L7.5 15V11.25L22.5 20.625L37.5 11.25V15Z"
              fill="#39906A"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default LeaderCard;
