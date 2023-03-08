
export default function Header() {
    return (
        <header className="row justify-between items-center fixed h-20 py-2 text-center w-full z-40">

            <div className="relative">

                <h1 className="font-normal underline underline-offset-2 ml-3 text-slate-800 font-righteous text-4xl cursor-pointer">Meet Up!</h1>
                <span className="text-xs absolute -bottom-4 left-3">Helping Society!</span>
            </div>

            <span className="link btn-hover rounded-lg mr-3 bg-orange-700 hover:bg-orange-800 text-white">Register</span>
        </header >
    );
};
