import tw from "tailwind-styled-components";

export const Maincontainer = tw.div`
    flex 
    flex-col 
    px-10 
    py-20 
    bg-[#F6F9FA]
`
export const Firstcard = tw.div`
    flex 
    flex-col 
    justify-center 
    items-center 
    flex-grow 
    mb-[32px]
`
export const Secondcard = tw.div`
    flex 
    flex-col 
    justify-center 
    items-center 
    flex-grow 
`
export const Cardinnerwrapper = tw.div`
    lg:flex 
    lg:flex-rows-2 
    bg-white 
    w-10/12 
    lg:h-[395px] 
    items-center 
    border 
    border-[#D5EDF4] 
    rounded-lg
`
export const Imagecontainer = tw.div`
    h-full 
    w-full
`
export const Imagewrapper = tw.img`
    h-full 
    w-full
`
export const Descriptioncontainer = tw.div`
    flex 
    flex-col  
    rounded-lg 
    mt-5 
    p-10
`
export const Titlewrapper = tw.p`
    text-3xl 
    font-bold 
    text-gray-800
`
export const Subtitlewrapper = tw.div`
    mt-2 
    flex
    gap-1
`
export const Subtitletext = tw.span`
    text-[#064E3B] 
    bg-[#E4FCFA] 
    py-1 
    px-1.5 
    rounded 
    font-medium 
    text-sm
`
export const Descriptiontext = tw.p`
    mt-3 
    text-gray-500
`
export const Buttonwrapper = tw.div`
    mt-10 
    flex 
    items-center 
    gap-3
`
export const Buttonprimary = tw.button`
    px-3.5 
    py-2 
    bg-[#FF6464] 
    rounded-lg 
    text-white 
    font-medium
`
export const Buttonsecontary = tw.button`
    px-3.5 
    py-2 
    bg-white 
    rounded-lg 
    text-[#FF6464] 
    font-medium
`