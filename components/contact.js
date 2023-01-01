
import { Button } from "./button"
import {Motion} from "./motion"



export const Contact = () => {


    return(
        <section className="flex justify-between py-[64px] mt-[92px] md:flex-row flex-col md:gap-0 gap-[64px]">
            <Motion>
                <div>
                    <Button opacity={true} text="Contact" color="#2F80ED"  px="24px" py="10px" ifSectionStyle />
                    <p className="text-[36px] md:text-[42px] font-bold font-syne text-[#1A202C] tracking-[-1.44195px] dark:text-white">Lets work!</p>
                </div>
            </Motion>
            <Motion>
                <div className="md:w-[709px] flex flex-col gap-[15px]">
                    <div className="px-[20px] break-all md:px-[40px] py-[25px] border-[1px] dark:text-white border-[#E2E8F0] rounded-[25px] text-[22px] md:text-[26px] font-bold font-syne text-[#1A202C]">odebiyiridwan@gmail.com</div>
                    <div className="px-[20px] break-all md:px-[40px] py-[25px] dark:text-white border-[1px] border-[#E2E8F0] rounded-[25px] text-[22px] md:text-[26px] font-bold font-syne text-[#1A202C]">+2348106855544</div>
                </div>
            </Motion>
        </section>
    )

}