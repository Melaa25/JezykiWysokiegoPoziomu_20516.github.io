import Image from 'next/image';

export default function Logo(){
    return(
        <div>
            <Image src="/assets/logo.png" alt="Logo" width={150} height={150} priority />
        </div>
    );
}