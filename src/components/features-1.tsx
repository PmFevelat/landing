import { TextEffect } from '@/components/text-effect'
import { AnimatedGroup } from '@/components/animated-group'
import { Shield, LineChart, Users } from 'lucide-react'
import Image from 'next/image'

const features = [
    {
        name: 'Confidential & Secure',
        description: 'Your sensitive business data is fully encrypted using advanced cryptography, ensuring total confidentiality.',
        icon: Shield,
    },
    {
        name: 'Actionable Insights',
        description: 'Get precise, contextualized insights compared with your industry peers, allowing you to quickly identify strengths and improvement areas.',
        icon: LineChart,
    },
    {
        name: 'Powered by Collective Intelligence',
        description: 'Access real-time, anonymized market insights contributed by hundreds of businesses.',
        icon: Users,
    },
]

export default function Features() {
    return (
        <section className="relative py-16 md:py-32">
            <div className="px-6 mx-auto max-w-7xl">
                <div className="text-center">
                    <TextEffect
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        as="h2"
                        className="text-4xl font-semibold text-balance lg:text-5xl">
                        Benchmark privately, decide confidently
                    </TextEffect>
                    <TextEffect
                        per="line"
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        delay={0.5}
                        as="p"
                        className="max-w-2xl mx-auto mt-4 text-lg text-balance text-muted-foreground">
                        Leverage secure and anonymous benchmarks powered by collective intelligence and cryptography.
                    </TextEffect>
                </div>

                <AnimatedGroup
                    variants={{
                        container: {
                            visible: {
                                transition: {
                                    staggerChildren: 0.15,
                                },
                            },
                        },
                    }}
                    className="grid max-w-5xl gap-8 mx-auto mt-16 md:mt-20 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-background/60 flex flex-col relative rounded-2xl border p-8 backdrop-blur-sm h-[360px]">
                            <div className="flex flex-col items-center h-full text-center">
                                <div className="flex items-center justify-center bg-primary/10 size-16 rounded-xl">
                                    <feature.icon 
                                        className="text-primary size-8"
                                        strokeWidth={feature.icon === Users ? 1.2 : 1.5} 
                                    />
                                </div>
                                <div className="flex flex-col flex-1 pt-24">
                                    <h3 className="text-xl font-semibold leading-tight">{feature.name}</h3>
                                    <p className="text-muted-foreground text-[15px] leading-relaxed mt-4">{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </AnimatedGroup>
            </div>
        </section>
    )
}
