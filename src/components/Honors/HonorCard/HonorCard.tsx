interface HonorCard {
  card: {
    name: string;
    image: string;
  };
}

function HonorCard({ card }: HonorCard) {
  return (
    <div
      className="group relative w-[400px] h-[300px] rounded-3xl shadow-[0px_2px_2px_2px_rgba(0,0,0,0.25)]
                        border-2 border-[#39906A] overflow-hidden"
    >
      <img
        src={card.image}
        className="w-full h-[80%] object-cover"
        alt="noalt"
      />
      <div className="flex items-center justify-center h-[20%] transition-opacity duration-200 group-hover:opacity-0">
        <p className="text-center text-xl">{card.name}</p>
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <div className="px-5 py-2 rounded-2xl bg-black/40 text-white text-2xl backdrop-blur-sm text-center">
          {card.name}
        </div>
      </div>
    </div>
  );
}

export default HonorCard;
