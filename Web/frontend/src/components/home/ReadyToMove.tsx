import Link from "next/link";

export default function ReadyToMove() {
    return (
        <section className="bg-primary py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8 relative z-10">
                <h2 className="mb-4 text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.1] font-primary">Ready To Move?</h2>
                <p className="mx-auto mb-10 max-w-2xl text-xl font-medium text-slate-800">
                    Experience the speed of Mubraiz Resources. Get your competitive quote in under minutes.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link href="/tools/calculator">
                        <button className="min-w-[180px] rounded-lg bg-slate-900 px-8 py-4 text-sm font-black text-white shadow-xl hover:bg-slate-800 transition-all uppercase tracking-widest">
                            Get Instant Quote
                        </button>
                    </Link>
                    <Link href="/contact">
                        <button className="min-w-[180px] rounded-lg border-2 border-slate-900 px-8 py-4 text-sm font-black text-slate-900 hover:bg-slate-900 hover:text-white transition-all uppercase tracking-widest">
                            Talk to Sales
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

