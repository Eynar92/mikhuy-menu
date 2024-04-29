import Image from 'next/image';

export const Logo = () => {
  return (
    <div className="flex justify-center mt-5">
        <div className="relative size-40">
            <Image
                fill
                alt='Logotipo Mikhuy'
                src='/logo.svg'
            />
        </div>
    </div>
  )
}
