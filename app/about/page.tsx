import Image from "next/image"
import aboutImg from "@/app/assets/about.png"

export default function About() {
    return (
        <>
            <div className="columns-2 gap-8">
                <div className="flex items-center h-[500px]">
                    <div>
                        <h1 className="text-4xl font-bold mb-8">Sobre a Pokedex</h1>
                        <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, sunt praesentium numquam sequi repudiandae est? Sit, fugit accusantium vitae culpa dolores ipsam perferendis, libero dignissimos exercitationem tempora optio sequi error asperiores illum!</p>
                        <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, sunt praesentium numquam sequi repudiandae est? Sit, fugit accusantium vitae culpa dolores ipsam perferendis, libero dignissimos exercitationem tempora optio sequi error asperiores illum!</p>
                        <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, sunt praesentium numquam sequi repudiandae est? Sit, fugit accusantium vitae culpa dolores ipsam perferendis, libero dignissimos exercitationem tempora optio sequi error asperiores illum!</p>
                    </div>
                </div>
                <div>
                    <Image className="w-full h-[500px] object-contain" src={aboutImg} height={500} width={500} alt="Sobre nós" />
                </div>
            </div>
        </>
    )
}