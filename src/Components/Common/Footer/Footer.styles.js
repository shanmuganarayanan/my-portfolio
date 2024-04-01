import tw from "tailwind-styled-components";

export const Maincontainer = tw.div`
    mt-auto 
    flex 
    flex-col 
    justify-center 
    items-center 
    gap-10 
    bg-[#F6F9FA] 
    p-5
`

export const Footertextwrapper = tw.p`
    text-2xl 
    font-semibold 
    text-center 
    md:text-left
`
export const Cardcontainer = tw.div`
    flex 
    flex-wrap 
    justify-center 
    md:justify-center 
    gap-16
`
export const Cardtextwrapper = tw.div`
`
export const Cardcontent = tw.p`
    flex 
    items-center 
    text-2xl 
    gap-2.5 
    cursor-pointer 
    select-none
`