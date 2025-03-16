import { DollarSign, UserMinus, ArrowUpRight, Users } from 'lucide-react'
import Image from 'next/image'

export default function FeaturesSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="max-w-5xl px-6 mx-auto">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2">
                        <div className="md:pr-6 lg:pr-0">
                            <h2 className="text-4xl font-semibold lg:text-5xl">Securely Input Your Business Metrics</h2>
                            <p className="mt-6">Enter your key business metrics and validate them instantly using secure cryptographic proofs (ZKP). Connect your data sources, ensure accuracy, and get ready to benchmark your business securely.</p>
                        </div>
                        <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                            <li>
                                <DollarSign className="size-5" />
                                Customer Acquisition Cost (CAC)
                            </li>
                            <li>
                                <UserMinus className="size-5" />
                                Churn Rate
                            </li>
                            <li>
                                <ArrowUpRight className="size-5" />
                                Conversion Rate
                            </li>
                            <li>
                                <Users className="size-5" />
                                Revenue Per Customer
                            </li>
                        </ul>
                    </div>
                    <div className="relative lg:col-span-3">
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-purple-500/5 blur-2xl rounded-[32px]" />
                        <div className="relative overflow-hidden shadow-xl rounded-2xl bg-white/50 ring-1 ring-zinc-200/50">
                            <Image 
                                src="/images/customer-acquisition-metrics.png" 
                                alt="Interface de saisie des métriques d'acquisition client" 
                                width={800} 
                                height={900}
                                className="w-full" 
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
