
export default function Home() {
    return (
        <section className="min-h-screen relative bg-[#ffe1be] flex justify-between items-center flex-wrap" >

            <img className="object-cover w-full lg:w-1/2 h-full max-h-screen aspect-auto" src={"/hero.svg"} alt="hero_image" />

            <article className="w-full lg:w-1/2" >
                <div className="px-2 flex flex-col gap-6 flex-wrap text-start justify-center">
                    <h1 className="z-50 text-5xl font-righteous leading-tight text-gray-800">Need Help In Your Profession?</h1>
                    <span className="text-2xl font-normal font-kanit leading-tight" >We help you by providing an opportunity to learn & adapt from the most experienced professionals in various fields.</span>
                    <button className="hero-btn bg-green-600 hover:bg-green-700 text-white max-w-fit" >Book a 30 Minute Session</button>
                    <span className="text-lg font-normal font-kanit">And Yes! It's Completely Free!</span>
                </div>
            </article>

        </section>
    );
};
