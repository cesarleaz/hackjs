import Hero from '~/components/hero'
import ListOfChallenges from '~/components/list-of-challenges'
import CTABar from '~/components/cta-bar'

export default function HomePage() {
    return (
        <>
            <Hero />
            <CTABar />
            <ListOfChallenges />
        </>
    )
}
