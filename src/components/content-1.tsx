import Image from 'next/image'

export default function ContentSection() {
    return (
        <section className="relative py-16 overflow-hidden md:py-32">
            <div className="relative max-w-5xl px-6 mx-auto space-y-8 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Instantly see your position in the market</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative mb-6 sm:mb-0">
                        <div className="relative bg-white shadow-sm rounded-2xl">
                            <Image 
                                src="/images/benchmarking-results.png" 
                                alt="Interface de benchmarking montrant les résultats détaillés avec un score de 82/100 et une analyse des métriques clés" 
                                width={800} 
                                height={900} 
                                className="w-full h-full rounded-2xl"
                                quality={100}
                                priority
                            />
                        </div>
                    </div>

                    <div className="relative space-y-4">
                        <p className="text-muted-foreground">
                            As soon as your data is securely aggregated, you instantly receive personalized benchmarks comparing your business to industry peers. Clearly visualize your strengths, spot opportunities for growth, and take informed decisions immediately.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
