import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section className="relative py-16 md:py-32">
            <div className="absolute inset-0 bg-[#FEFEFF]" />
            <div className="relative max-w-5xl px-6 mx-auto">
                <div className="text-center">
                    <h2 className="text-4xl font-semibold text-balance lg:text-5xl">Join the Waitlist</h2>
                    <p className="mt-4">Join our early access program to test the future of private, encrypted benchmarking.</p>

                    <div className="mt-10 lg:mt-12">
                        <Button asChild size="lg" className="px-8">
                            <Link href="/waitlist">
                                Join the Waitlist
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
