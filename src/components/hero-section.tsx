import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { TextEffect } from '@/components/text-effect'
import { AnimatedGroup } from '@/components/animated-group'
import { HeroHeader } from '@/components/hero5-header'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="relative min-h-screen overflow-hidden">
                <section>
                    <div className="relative pt-24 md:pt-36">
                        {/* Fond avec dégradé orangé */}
                        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#FFF8F6] via-[#FFF4F0] to-[#FFF8F6]"></div>
                        
                        {/* Effets de superposition */}
                        <div className="absolute inset-0 -z-10">
                            <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,182,147,0.12),transparent)]"></div>
                            <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_100%,rgba(255,182,147,0.08),transparent)]"></div>
                        </div>

                        <div className="px-6 mx-auto max-w-7xl">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <Link
                                        href="#link"
                                        className="flex items-center gap-4 p-1 pl-4 mx-auto transition-colors duration-300 border rounded-full shadow-md hover:bg-background dark:hover:border-t-border bg-muted group w-fit shadow-zinc-950/5 dark:border-t-white/5 dark:shadow-zinc-950">
                                        <span className="text-sm text-foreground">Introducing Zero-Knowledge Benchmarking</span>
                                        <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                                        <div className="overflow-hidden duration-500 rounded-full bg-background group-hover:bg-muted size-6">
                                            <div className="relative size-full">
                                                <div className="absolute inset-0 flex items-center justify-center duration-500 opacity-100 group-hover:opacity-0">
                                                    <span className="relative -left-0.5">✨</span>
                                                </div>
                                                <div className="absolute inset-0 flex items-center justify-center duration-500 opacity-0 group-hover:opacity-100">
                                                    <span className="relative -left-0.5">🔥</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </AnimatedGroup>

                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="h1"
                                    className="mt-8 text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                                    Encrypted Insights for Smarter Business Decisions
                                </TextEffect>
                                <TextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.5}
                                    as="p"
                                    className="max-w-2xl mx-auto mt-8 text-lg text-balance">
                                    Compare your key business metrics with industry benchmarks—fully encrypted and privacy-first.
                                </TextEffect>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="flex justify-center mt-12">
                                    <div
                                        key={1}
                                        className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="px-5 text-base rounded-xl">
                                            <Link href="/waitlist">
                                                <span className="text-nowrap">Join the Waitlist </span>
                                            </Link>
                                        </Button>
                                    </div>
                                </AnimatedGroup>
                            </div>
                        </div>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div className="relative px-6 mx-auto mt-8 overflow-hidden sm:mt-12 md:mt-16">
                                <div
                                    aria-hidden
                                    className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                                />
                                <div className="relative max-w-5xl mx-auto">
                                    {/* Glow effect */}
                                    <div className="absolute -inset-4 z-0 bg-[radial-gradient(closest-side,rgba(221,210,255,0.15),transparent)] blur-2xl" />
                                    <div className="absolute -inset-4 z-0 bg-[radial-gradient(closest-side,rgba(255,220,240,0.15),transparent)] blur-2xl translate-x-8" />
                                    {/* Image container */}
                                    <div className="relative overflow-hidden bg-white border shadow-lg inset-shadow-2xs ring-background/50 dark:inset-shadow-white/20 z-1 rounded-2xl shadow-purple-950/10 ring-1">
                                        <Image
                                            className="w-full"
                                            src="/images/hero-benchmarking.png"
                                            alt="Interface de benchmarking montrant les résultats détaillés et l'analyse des métriques"
                                            width={1200}
                                            height={800}
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
                <section className="relative pb-16 md:pb-24">
                    <div className="relative px-6 mx-auto group max-w-7xl">
                        {/* Background blanc avec une très légère teinte bleue */}
                        <div className="absolute inset-0 -z-10 bg-[#FEFEFF] rounded-2xl" />
                        
                        {/* Hover effect */}
                        <div className="absolute inset-0 z-20 flex items-center justify-center duration-500 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100">
                            <Link
                                href="/"
                                className="block text-sm duration-150 hover:opacity-75">
                                <span>Meet Our Partners</span>
                                <ChevronRight className="inline-block ml-1 size-3" />
                            </Link>
                        </div>

                        {/* Logos */}
                        <div className="relative z-10 flex flex-row items-center justify-center py-4 mx-auto mt-12 gap-x-20">
                            <div className="flex h-16">
                                <Image
                                    className="mx-auto w-[280px] object-contain"
                                    src="/logos/hec-incubateur.png"
                                    alt="HEC Incubateur"
                                    width={280}
                                    height={64}
                                    priority
                                />
                            </div>
                            <div className="flex h-24">
                                <Image
                                    className="mx-auto w-[380px] object-contain"
                                    src="/logos/paris-ai.png"
                                    alt="Paris Artificial Intelligence for Society"
                                    width={380}
                                    height={96}
                                    priority
                                />
                            </div>
                        </div>

                        {/* Gradient de transition en bas seulement */}
                        <div className="absolute bottom-0 left-0 right-0 h-32 -z-10 bg-gradient-to-b from-[#FFF8F6] via-[#FEFEFF] to-[#FEFEFF]" />
                    </div>
                </section>
            </main>
        </>
    )
}
