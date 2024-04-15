import { Suspense } from 'react'
import Space from './space'
import Header from './header'
import Spinner from './spinner'
import Footer from './footer'

export default function Layout({ children }) {
    return (
        <>
            <Space />
            <div class="max-w-screen-lg mx-auto flex flex-col w-full h-full">
                <Header />
                <Suspense fallback={<Spinner />}>
                {children}
                </Suspense>
                <Footer />
            </div>
        </>
    )
}
