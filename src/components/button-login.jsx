import GithubSVG from '~/icons/github.svg?react'
import { magic } from '~/magic'

export default function ButtonLogin({ text = 'Iniciar sesión' }) {
  const handleLogin = async () => {
    await magic.oauth.loginWithRedirect({
      provider: 'github',
      redirectURI: `${window.location.origin}/callback`
    })
  }

  return (
    <button
      onClick={handleLogin}
      className='flex items-center gap-2 text-gray-900 bg-white hover:bg-yellow-300 font-bold rounded-lg text-sm px-5 py-2.5 ms-2'
    >
      <GithubSVG width='1rem' height='1rem' />
      {text}
    </button>
  )
}
