import { Link } from 'wouter'
import LogoSVG from '~/icons/logo.svg?react'

export default function HeaderLogo() {
    return (
        <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
        >
            <LogoSVG className="h-8" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
                HackJS
            </span>
        </Link>
    )
}
