import Link from 'next/link'

const links = [
    {
        title: 'Solution',
        href: '#',
    },
    {
        title: 'About',
        href: '#',
    },
]

export default function FooterSection() {
    return (
        <footer className="bg-[#FEFEFF] py-12">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:justify-between">
                    <div className="order-last flex flex-wrap justify-center gap-8 text-sm md:order-first">
                        {links.map((item, index) => (
                            <Link 
                                key={index} 
                                href={item.href} 
                                className="text-muted-foreground hover:text-primary block duration-150">
                                <span>{item.title}</span>
                            </Link>
                        ))}
                    </div>
                    <span className="text-muted-foreground order-first text-center text-sm md:order-last">
                        © {new Date().getFullYear()} Metricore, All rights reserved
                    </span>
                </div>
            </div>
        </footer>
    )
}
