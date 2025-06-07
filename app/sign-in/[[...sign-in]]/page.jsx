import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '100vh' }}>
        <div style={{ flex: 1 }}>
            <Image src={'/login.webp'} layout="responsive" objectFit="cover" width={300} height={200} />
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <SignIn />
        </div>
    </div>
  )
}
