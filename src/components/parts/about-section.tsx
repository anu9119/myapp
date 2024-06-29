import Carousel from "@/components/parts/carousel";


export default function AboutSection() {
    return (
        <section id="about">
            <div className="container mt-10">  
                <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:mr-20 sm:w-2/5">
                        <Carousel />
                    </div>
                    <div className="w-full sm:w-3/5">
                        Hello
                    </div>
                </div> 
            </div>
        </section>
    )
}