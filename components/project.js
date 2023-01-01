

import Image from "next/image"

export const Project = ({content, image, title, mobileImg, projectID }) => {


    return(
        <div 
        className={`selector_${projectID} py-[26px] px-[24px] rounded-[25px] border-[1px] border-[#E2E8F0]`}  key={projectID}>
            <div className="relative h-[259px] block md:hidden">
                <Image fill={true} src={mobileImg} alt={title} loading="lazy" />
            </div>
            <div className="relative h-[259px] hidden md:block">
                <Image fill={true} src={image} alt={title} loading="lazy" />
            </div>
            <p className="font-syne md:text-[26px] text-[22px] font-bold tracking-[-1.44195px] text-[#1A202C] mt-[21px] mb-[8px] dark:text-[#F7FAFC]">{title}</p>
            <p className="text-[#A0AEC0] text-lg font-outfit font-normal leading-[-0.36px] dark:text-[#CBD5E0]">{content}</p>
        </div>
    )

}