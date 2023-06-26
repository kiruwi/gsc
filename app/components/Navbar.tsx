import { NavLinks } from '@/constants'
import { Session } from 'inspector'
import Image from 'next/image'
import Link from 'next/link'
import Authproviders from './Authproviders'

const Navbar = () => {
  return (
    <nav className="flexBetween navbar h-navbarr bg-dark-green">
        <div className="flex-1 flexStart gap-12">
            <Link href= "/" >
                <Image
                src="/gsc_hauling.svg"
                width={125}
                height={53}
                alt="Flexibble"
                />
            
            </Link>
            <ul className=" xl:flex hidden text-small gap-7 ml-60 text-light-white">
                {NavLinks.map((link) => (
                    <Link href={link.href} key={link.key}>
                    {link.text}
                    </Link>
                ))}
            </ul>
        </div>
        <div className="flexCenter gap-4 text-light-white">
            {Session ? (
                <>
                UserPhoto
                <Link href="/create-project">
                 Share Work
                </Link>
                </>
            ) : (
                <Authproviders />
            )}
        </div>
    </nav>
  )
}

export default Navbar