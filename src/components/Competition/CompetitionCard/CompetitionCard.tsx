

interface CompetitionCard {
    card: {
        name: string;
        image: string;
        desc: string;
    }
}


function CompetitionCard({card}:  CompetitionCard) {  
    
    return (
        <div className="relative w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px] xl:w-[400px] h-[300px] shadow-[0px_2px_2px_2px_rgba(0,0,0,0.25)]
                        border-2 border-[#39906A] rounded-3xl 
                        overflow-hidden group"
            >
            <img src={card.image} className="w-full h-full object-cover" alt="noalt" />
            
            <div className="after:absolute after:w-full after:h-full after:bg-black after:opacity-30
                            absolute top-0
                            w-full h-full
                            text-emerald-200
                            group-hover:flex
                            hidden items-center justify-center flex-col">
                <h3 className="text-center text-xl font-bold">{card.name}</h3>
                <p className="text-white">{card.desc}</p>
            </div>
            
        </div>
    )
}


export default CompetitionCard