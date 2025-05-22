import { HeadingLarge, HeadingSmall } from "./Headings";
export default function SectionIntro({ title, tagline, options }) {
    return (
        <div className="flex flex-col items-center h-full gap-2 p-3 md:p-5 ">
            <HeadingLarge label={title} />
            <div className="px-10">
                <HeadingSmall label={tagline} className={options?.textColor || "text-amber-50"} />
            </div>
            <div className="w-2/8 h-1 mt-6 bg-purple-400 shadow-[0_0_25px_15px_rgba(168,85,247,0.9)] z-10 transition-all" />
        </div>
    );
}