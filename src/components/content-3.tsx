import Image from 'next/image'

export default function ContentSection3() {
    return (
        <section className="relative py-16 md:py-32">
            <div className="relative max-w-5xl px-6 mx-auto">
                <div className="relative grid items-center gap-12 md:grid-cols-2">
                    <div className="relative space-y-6">
                        <h2 className="relative text-4xl font-medium lg:text-5xl">
                            Securely input your business metrics in seconds
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Enter your key metrics easily through our intuitive interface. Our platform automatically validates your data using advanced Zero-Knowledge Proof cryptography, ensuring your metrics are authentic, confidential, and fully encrypted at all times.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="relative rounded-2xl">
                            <Image
                                src="/images/metrics-intput.png"
                                alt="Interface de saisie du Churn Rate avec intégrations Stripe et Chargebee"
                                width={800}
                                height={500}
                                className="w-full"
                                quality={100}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 