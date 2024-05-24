import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image'
import profilePic from './MCL-LOGO.jpg'

export default function AcmeLogo() {
  return (
    <div className={`${lusitana.className} block flex-row items-center leading-none text-white`}>
      <Image src={profilePic} alt="MCL PM" placeholder="blur" />
      <p className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
      </p>
    </div>
  );
}
