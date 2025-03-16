import Image from 'next/image'

export default function FeaturesSection() {
    return (
        <section className="overflow-hidden py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <div className="relative z-10 max-w-2xl">
                    <h2 className="text-4xl font-semibold lg:text-5xl">Instantly see your position in the market</h2>
                    <p className="mt-6 text-lg">Get personalized benchmarks comparing your business to industry peers so that you visualize your strengths, spot opportunities for growth, and make informed decisions.</p>
                </div>
                <div className="relative -mx-4 rounded-3xl p-3 md:-mx-12 lg:col-span-3">
                    <div className="perspective-midrange">
                        <div className="rotate-x-6 -skew-2">
                            <div className="aspect-88/36 relative">
                                <div className="bg-radial-[at_75%_25%] to-background z-1 -inset-17 absolute from-transparent to-75%"></div>
                                <Image 
                                    src="/images/dashboard-results.png" 
                                    className="w-full" 
                                    alt="Interface de benchmarking" 
                                    width={2797} 
                                    height={1137}
                                    priority 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
