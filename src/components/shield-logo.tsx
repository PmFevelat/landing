import { cn } from '@/lib/utils'

export const ShieldLogo = ({ className }: { className?: string }) => {
    return (
        <svg 
            className={cn('size-7', className)} 
            viewBox="0 0 28 28" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_9_3092)">
                <path 
                    d="M14 0C14.2516 0 14.5031 0.0546875 14.7328 0.158594L25.0305 4.52813C26.2336 5.03672 27.1305 6.22344 27.125 7.65625C27.0977 13.0812 24.8664 23.007 15.4438 27.5188C14.5305 27.9563 13.4696 27.9563 12.5563 27.5188C3.13362 23.007 0.902369 13.0812 0.875025 7.65625C0.869556 6.22344 1.76643 5.03672 2.96956 4.52813L13.2727 0.158594C13.4969 0.0546875 13.7485 0 14 0ZM14 3.65313V24.325C21.5469 20.6719 23.5758 12.5836 23.625 7.73281L14 3.65313Z" 
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id="clip0_9_3092">
                    <path d="M0 0H28V28H0V0Z" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    )
} 