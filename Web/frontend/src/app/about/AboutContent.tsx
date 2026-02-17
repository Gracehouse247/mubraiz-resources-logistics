"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const coreValues = [
    { title: "God-fearing", desc: "We conduct business with moral integrity and spiritual principles.", icon: "church" },
    { title: "Integrity", desc: "Transparency and honesty form the foundation of our client relationships.", icon: "verified_user" },
    { title: "Equity", desc: "Fair treatment and equal opportunities guide our approach to partnerships.", icon: "balance" },
    { title: "Excellence", desc: "We pursue the highest standards in service delivery and industrial benchmarks.", icon: "workspace_premium" },
    { title: "Loyalty", desc: "Dedicated commitment to our clients, partners, and team members.", icon: "handshake" },
    { title: "Professionalism", desc: "Maintaining highest standards of expertise in global logistics and transport.", icon: "engineering" }
];

const strategicObjectives = [
    {
        title: "Market Excellence",
        points: [
            "Deliver outstanding customer service that exceeds expectations",
            "Expand operations into new regional markets across Nigeria",
            "Invest strategically in cutting-edge logistics technology",
            "Build lasting partnerships with key industry players"
        ],
        footer: "Customer-centric strategy drives quality and reach.",
        color: "from-blue-500/20 to-transparent"
    },
    {
        title: "Internal Ops Hub",
        points: [
            "Increase operational efficiency through process optimisation",
            "Improve internal communication systems and protocols",
            "Form strategic alliances with service providers",
            "Implement sustainable and eco-conscious practices"
        ],
        footer: "Streamlined operations enable superior value delivery.",
        color: "from-[#a1dc84]/20 to-transparent"
    },
    {
        title: "Human Capital",
        points: [
            "Recruit industry experts and emerging talent",
            "Develop strong leadership capabilities at all levels",
            "Align rewards and recognition with performance",
            "Foster a culture of continuous learning and innovation"
        ],
        footer: "Our people are the engine of our collective success.",
        color: "from-purple-500/20 to-transparent"
    }
];

const boardMembers = [
    { name: "Nebolisa Chidiebere Johnson", role: "MD, COO", img: "/team/Mr Chidi Olisa MD, COO.png", desc: "Strategic operations and business development architect." },
    { name: "Nebolisa Nneoma Miriam", role: "Executive Director", img: "/team/Mrs Nebolisa Nnoma.png", desc: "Driving corporate strategy, governance, and stakeholder value." },
    { name: "Amarime Edwin Ighotuso", role: "Director, Asset Care", img: "/team/Mr Edwin Amarime Head of Asset Care He's also a board member.png", desc: "Overseeing fleet maintenance integrity and vehicle readiness." },
    { name: "Kalu Ikechukwu Okwun", role: "Director, Operations", img: "/team/Mr Ikechukwu Kalu Head of Operations.png", desc: "Logistics coordination lead ensuring seamless delivery." }
];

const managementTeam = [
    { name: "Bar. Tekena Adebatonye", role: "Mubraiz Lead Advisor", img: "/management-team/Bar Tekena Adebatonye.png", desc: "Legal powerhouse and lead advisor ensuring regulatory compliance." },
    { name: "Mr. Ayodediji Adegunna", role: "Admin & HR Team Lead", img: "/management-team/Mr Ayodediji Adegunna.png", desc: "Driving organizational efficiency and talent management." },
    { name: "Mr. Gyang Joseph", role: "Asset Recovery Lead", img: "/management-team/Mr Gyang Joseph.png", desc: "Specialist in asset management and protection of resources." },
    { name: "Mrs. Beinmote Alagoa", role: "Head of Finance", img: "/management-team/Mrs Beinmote Alagoa.png", desc: "Financial strategist managing corporate accounts and budgets." },
    { name: "Mrs. Bukola Fatimehin", role: "Accountant", img: "/management-team/Bukola Fatimehin.(Accountant).png", desc: "Expert in financial reporting, auditing, and tax compliance." },
    { name: "Mr. Garba Yusuf", role: "Maintenance Team Lead", img: "/team-leads/Mr Garba Yusuf - Maintenance team lead .png", desc: "Directing comprehensive fleet maintenance programs to ensure maximum operational uptime." }
];

const teamLeads = [
    { name: "Mr. Mueez Niyi", role: "HSE Team Lead", img: "/team-leads/Mr Mueez Niyi.png", desc: "Zero-incident workplace strategist and HSE standards champion." },
    { name: "Mr. Obi Odili", role: "Fleet Head Lead (CHI)", img: "/team-leads/Mr Obi Odili.png", desc: "Managing high-capacity logistics missions and regional strategy." },
    { name: "Mr. Tejiri Samuel", role: "Tracking Team Lead", img: "/team-leads/Mr Tejiri Samuel.png", desc: "Spearheading AI-driven asset tracking and efficiency mapping." },
    { name: "Mr. Yekeen Aguntasolo", role: "Fleet Head Lead (TGI)", img: "/team-leads/Mr Yekeen Aguntasolo.png", desc: "Managing high-capacity logistics and coordinating team of fleet supervisors across board." }
];

export default function AboutContent() {
    return (
        <main className="w-full bg-[#f8faf8] dark:bg-[#0a0f0a] transition-colors duration-500">
            {/* Hero Section - Homepage Adopted */}
            <section className="relative flex min-h-[650px] w-full items-center overflow-hidden bg-[#0f172a]">
                {/* Background Image Container */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/40 z-10"></div>

                    {/* Brand Dominance Glow */}
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#a1dc84]/20 rounded-full blur-[120px] z-15 pointer-events-none"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#a1dc84]/10 rounded-full blur-[120px] z-15 pointer-events-none"></div>

                    <Image
                        alt="Logistics Expert Nigeria - Mubraiz Resources Office"
                        className="h-full w-full object-cover grayscale opacity-60"
                        src="/images/About/office.jpeg"
                        fill
                        priority
                    />
                </div>

                <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-2 text-[10px] font-black uppercase tracking-[0.4em] text-[#a1dc84] backdrop-blur-md mb-10">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a1dc84] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a1dc84]"></span>
                            </span>
                            Executive Profile & Heritage
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tighter font-primary text-white mb-10">
                            The Trusted <br />
                            <span className="text-[#a1dc84]">Logistics Expert.</span>
                        </h1>

                        <p className="max-w-lg border-l-4 border-[#a1dc84] pl-8 text-lg font-medium leading-relaxed text-slate-300 font-secondary">
                            Driving the Nigerian logistics ecosystem through operational excellence, absolute reliability, and an unwavering commitment to sustainable growth.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Company Intro - Homepage Spacing */}
            <section id="company-background" className="py-32 px-6 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-24 items-start mb-32">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-10"
                        >
                            <span className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.4em] mb-6 block font-sans">Our Legacy</span>
                            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-[1.1] font-primary">
                                Logistics <br /><span className="text-[#a1dc84]">Leadership.</span>
                            </h2>
                            <div className="space-y-8 text-base text-slate-500 dark:text-slate-400 font-sans font-medium leading-relaxed">
                                <p>
                                    Mubraiz Resources is the premier Logistics Expert in Nigeria serving various industries. We are officially registered with the Corporate Affairs Commission (CAC) to meet the domestic logistics needs of our clients throughout Nigeria. Our services include transportation, warehousing, customs assistance, and procurement.
                                </p>
                                <p>
                                    We operate a modern, eco-friendly fleet of trucks, ensuring safe and dependable service for our Nigerian customers.
                                </p>
                                <p>
                                    Our skilled team provides comprehensive, streamlined services from our offices, offering a well-coordinated network for transporting goods. Through our integrated logistics chain, we excel at interstate road deliveries, providing exceptional service.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="space-y-12 lg:pt-20"
                        >
                            <div className="p-12 bg-white dark:bg-slate-900 rounded-[4rem] border border-slate-100 dark:border-white/5 shadow-2xl space-y-8 text-base text-slate-500 font-sans font-medium leading-relaxed border-l-4 border-[#a1dc84]">
                                <p>
                                    Mubraiz Resources is committed to balanced growth, considering both the company's and the community's needs, as well as growth and service quality. We are dedicated to sustainable development and a progressive work environment, continuously improving our employees' skills.
                                </p>
                                <p>
                                    At Mubraiz Resources, we make decisions based on carefully considered facts, which we call our "fact-founded, thought-through" approach. We adapt our operations to the dynamic environment, managing our business with a sense of competitive urgency.
                                </p>
                            </div>
                            <div className="relative aspect-video rounded-[4rem] overflow-hidden border-8 border-white/10 group shadow-2xl">
                                <Image
                                    src="/images/About/company-meeting.png"
                                    alt="Hire Logistics Company Nigeria - Strategic Planning"
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-bottom p-12">
                                    <p className="text-white font-black text-[10px] uppercase tracking-widest self-end font-sans">Mubraiz Logistics Center</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 border-t border-slate-100 dark:border-white/5 mt-24 pt-20">
                        <div className="space-y-6">
                            <h4 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight font-primary">Operational Philosophy</h4>
                            <p className="text-base text-slate-500 dark:text-slate-400 font-sans font-medium leading-relaxed">
                                As a Nigerian logistics provider, we are focused on reducing costs, increasing efficiency, and delivering outstanding service within Nigeria. We are driven to achieve maximum success by maintaining strong ethical principles in all our interactions, both internally and externally.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight font-primary">Client Competitive Advantage</h4>
                            <p className="text-base text-slate-500 dark:text-slate-400 font-sans font-medium leading-relaxed">
                                We are dedicated to providing reliable services in Nigeria through consistent, high-quality customer service. Our goal is to give our customers a competitive edge by closely monitoring the entire process and lowering logistics expenses.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission - Dark Brand Dominance */}
            <section id="vision-mission" className="py-32 bg-slate-900 relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group p-16 bg-white/5 rounded-[4rem] border border-white/10 hover:bg-[#a1dc84]/5 transition-all duration-500"
                        >
                            <div className="size-20 bg-[#a1dc84] rounded-3xl flex items-center justify-center text-slate-900 mb-10 transform group-hover:rotate-6 transition-transform shadow-xl shadow-[#a1dc84]/10">
                                <span className="material-symbols-outlined !text-4xl">visibility</span>
                            </div>
                            <h3 className="text-3xl lg:text-5xl font-black text-white mb-8 tracking-tighter font-primary leading-tight">Our Vision</h3>
                            <p className="text-slate-400 text-lg font-sans font-medium leading-relaxed">
                                To become a reliable household name in logistics across Nigeria, setting the benchmark for excellence in transportation and supply chain management.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="group p-16 bg-[#a1dc84] rounded-[4rem] border border-[#a1dc84]/20 shadow-2xl transition-all duration-500"
                        >
                            <div className="size-20 bg-slate-900 rounded-3xl flex items-center justify-center text-[#a1dc84] mb-10 transform group-hover:-rotate-6 transition-transform">
                                <span className="material-symbols-outlined !text-4xl">rocket_launch</span>
                            </div>
                            <h3 className="text-3xl lg:text-5xl font-black text-slate-900 mb-8 tracking-tighter font-primary leading-tight">Our Mission</h3>
                            <p className="text-slate-900/80 text-lg font-sans font-black leading-relaxed">
                                To deliver excellence in commercial services using the best people, cutting-edge technology, and world-class resources to exceed client expectations.
                            </p>
                        </motion.div>
                    </div>
                </div>
                {/* Brand Decoration */}
                <div className="absolute -top-24 -right-24 size-[800px] bg-[#a1dc84] blur-[250px] opacity-[0.03] pointer-events-none" />
            </section>

            {/* Core Values - Grid Style */}
            <section id="core-values" className="py-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-24">
                        <span className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.4em] mb-6 block font-sans">The Mubraiz Way</span>
                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tighter font-primary leading-[1.1]">Core <span className="text-[#a1dc84]">Values.</span></h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {coreValues.map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-12 bg-white dark:bg-slate-900 rounded-[3.5rem] border border-slate-100 dark:border-white/5 hover:border-[#a1dc84]/30 shadow-xl hoverShadow transition-all group text-center"
                            >
                                <div className="text-[#a1dc84] mb-10 group-hover:scale-110 transition-transform bg-slate-50 dark:bg-white/5 size-20 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-[#a1dc84]/5">
                                    <span className="material-symbols-outlined !text-4xl">{value.icon}</span>
                                </div>
                                <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-6 font-primary tracking-tighter">
                                    {value.title}
                                </h4>
                                <p className="text-slate-500 dark:text-slate-400 font-sans font-medium text-sm leading-relaxed">
                                    {value.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategic Objectives - Modern Column Grid */}
            <section id="strategic-objectives" className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-24">
                        <span className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.4em] mb-6 block font-sans">Global roadmap</span>
                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tighter font-primary leading-[1.1]">Strategic <span className="text-[#a1dc84]">Objectives.</span></h2>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-10">
                        {strategicObjectives.map((obj, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="flex flex-col p-16 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/10 rounded-[5rem] shadow-xl relative overflow-hidden group"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${obj.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                                <div className="relative z-10 flex-1">
                                    <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-10 tracking-tighter font-primary">{obj.title}</h4>
                                    <ul className="space-y-6 mb-16">
                                        {obj.points.map((pt, i) => (
                                            <li key={i} className="flex gap-4 items-start text-slate-500 dark:text-slate-400 font-sans font-medium text-sm leading-relaxed">
                                                <span className="size-2 bg-[#a1dc84] rounded-full mt-2 shrink-0 shadow-lg shadow-[#a1dc84]/40" />
                                                {pt}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="relative z-10 pt-10 border-t border-slate-100 dark:border-white/5">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] font-sans leading-relaxed">
                                        {obj.footer}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Principal Routes - Dark Map Authority */}
            <section id="principal-routes" className="py-32 bg-slate-900 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.4em] mb-8 block font-sans">Nationwide Grid</span>
                            <h2 className="text-4xl lg:text-7xl font-black text-white tracking-tighter mb-10 leading-[1.1] font-primary">
                                Principal <br />
                                <span className="text-[#a1dc84]">Routes.</span>
                            </h2>
                            <p className="text-slate-400 text-lg font-sans font-medium leading-relaxed mb-16 border-l-4 border-[#a1dc84] pl-10">
                                "With a pan-Nigeria reach, we safely convey goods to all 36 states, providing world-standard logistics across the federation."
                            </p>
                            <div className="grid grid-cols-2 gap-10">
                                <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 shadow-2xl">
                                    <div className="text-5xl font-black text-[#a1dc84] mb-2 tracking-tighter font-display">36</div>
                                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 font-sans leading-none">States Covered</p>
                                </div>
                                <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 shadow-2xl">
                                    <div className="text-5xl font-black text-white mb-2 tracking-tighter font-display">100%</div>
                                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 font-sans leading-none">Delivery Success</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="relative aspect-square rounded-[5rem] overflow-hidden group shadow-2xl bg-white/5 p-8 border border-white/10"
                        >
                            <Image
                                src="/images/About/nigeria-map.png"
                                alt="Nigeria Logistics Network Map - Regional Hubs"
                                fill
                                className="object-contain opacity-80 group-hover:opacity-100 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="text-center">
                                    <span className="text-white text-[12rem] font-black opacity-[0.05] tracking-tighter font-display">NGN</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                {/* Decoration */}
                <div className="absolute top-0 right-0 size-[800px] bg-[#a1dc84] blur-[250px] opacity-[0.03] pointer-events-none" />
            </section>

            {/* Board of Directors - Elite Governance */}
            <section id="board-directors" className="py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0f0a]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-24">
                        <span className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.4em] mb-6 block font-sans">Strategic Oversight</span>
                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tighter font-primary leading-[1.1]">Board of <span className="text-[#a1dc84]">Directors.</span></h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {boardMembers.map((leader, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group flex flex-col items-center text-center"
                            >
                                <div className="w-full aspect-[4/5] relative rounded-[2.5rem] overflow-hidden bg-slate-100 dark:bg-white/5 mb-8 shadow-2xl border border-slate-100 dark:border-white/10 group-hover:shadow-[#a1dc84]/20 transition-all duration-700">
                                    <Image
                                        src={leader.img}
                                        alt={`${leader.name} - ${leader.role}`}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                </div>
                                <div className="px-4">
                                    <h4 className="text-lg font-black text-slate-900 dark:text-white mb-2 tracking-tight leading-none group-hover:text-[#a1dc84] transition-colors">{leader.name}</h4>
                                    <p className="text-[10px] font-black text-[#a1dc84] uppercase tracking-[0.2em] mb-4">{leader.role}</p>
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
                                        {leader.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Management Hub - Modern Horizontal Grid */}
            <section id="management-hub" className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-32">
                        <span className="text-[#a1dc84] font-black tracking-[0.4em] text-[10px] uppercase mb-6 block font-sans">The Engine Room</span>
                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter font-primary leading-[1.1]">Management <span className="text-[#a1dc84]">Hub.</span></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {managementTeam.map((manager, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="group bg-white dark:bg-slate-900 rounded-[3.5rem] p-12 flex flex-col sm:flex-row items-center gap-10 border border-slate-100 dark:border-white/5 shadow-xl hover:shadow-[#a1dc84]/5 transition-all"
                            >
                                <div className="size-32 rounded-[2.5rem] overflow-hidden bg-slate-100 dark:bg-white/5 relative shrink-0 border-4 border-white dark:border-slate-800 shadow-xl">
                                    <Image src={manager.img} alt={`${manager.name} - ${manager.role}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="text-center sm:text-left flex-1">
                                    <h4 className="font-black text-2xl text-slate-900 dark:text-white mb-1 tracking-tighter font-primary">{manager.name}</h4>
                                    <div className="text-slate-900 dark:text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.3em] font-sans mb-6">{manager.role}</div>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm font-sans font-medium leading-relaxed">{manager.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Operational Force - Grid Authority */}
            <section id="operational-force" className="py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0f0a]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-24">
                        <span className="text-[#a1dc84] text-[10px] font-black uppercase tracking-[0.4em] mb-6 block font-sans">Execution Specialists</span>
                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tighter font-primary leading-[1.1]">Operational <span className="text-[#a1dc84]">Force.</span></h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {teamLeads.map((lead, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/10 p-10 rounded-[4rem] shadow-xl hover:shadow-blue-500/5 transition-all flex flex-col items-center"
                            >
                                <div className="size-32 rounded-[2.5rem] overflow-hidden bg-slate-100 dark:bg-white/5 relative mb-8 border-4 border-white dark:border-slate-800 shadow-xl grayscale group-hover:grayscale-0 transition-all duration-700">
                                    <Image src={lead.img} alt={`${lead.name} - ${lead.role}`} fill className="object-cover" />
                                </div>
                                <div className="text-center">
                                    <p className="text-slate-900 dark:text-white font-black text-lg tracking-tighter leading-none mb-2">{lead.name}</p>
                                    <p className="text-[10px] font-black text-[#a1dc84] uppercase tracking-widest">{lead.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Building The Future - Brand Legacy */}
            <section id="building-future" className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[5rem] p-16 sm:p-24 text-center shadow-3xl"
                    >
                        <span className="text-[#a1dc84] text-[12px] font-black uppercase tracking-[0.5em] mb-12 block">Industrial Evolution</span>
                        <h2 className="text-4xl sm:text-6xl font-black text-white mb-10 tracking-tighter leading-[1.1] font-primary">Building The <span className="text-[#a1dc84]">Future.</span></h2>
                        <div className="max-w-2xl mx-auto space-y-8">
                            <p className="text-slate-400 font-sans font-medium text-xl leading-relaxed italic border-l-4 border-[#a1dc84] pl-8 text-left">
                                "Fostering a culture of excellence and environmental stewardship that drives our business forward."
                            </p>
                            <p className="text-slate-500 font-sans font-medium text-lg leading-relaxed text-left">
                                Our commitment to sustainable growth ensures a legacy of reliability and industrial leadership for generations to come.
                            </p>
                            <div className="pt-12">
                                <Link href="/contact" className="inline-block px-14 py-6 bg-[#a1dc84] text-slate-900 rounded-2xl font-black text-[11px] uppercase tracking-[0.4em] hover:scale-105 transition-transform shadow-2xl shadow-[#a1dc84]/20">
                                    Join Our Legacy
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="absolute -bottom-32 -left-32 size-[600px] bg-[#a1dc84] blur-[200px] opacity-[0.05]" />
            </section>
        </main>
    );
}
