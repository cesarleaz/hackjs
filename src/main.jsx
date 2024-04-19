import './index.css'

import { createRoot } from 'react-dom/client'
import App from './app'
import { SWRConfig} from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

createRoot(document.getElementById('root')).render(
  <SWRConfig value={{ fetcher }}>
    <App />
  </SWRConfig>
)
