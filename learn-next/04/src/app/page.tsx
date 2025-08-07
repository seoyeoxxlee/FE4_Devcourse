import Image from 'next/image';
import sample from '@/assets/images/sample.jpg';

export default async function page () {
  return (
    <>
      <Image src={sample} alt={"sample"} priority />

      <div className="relative w-40 h-60">
        <Image 
          src="https://cdn.pixabay.com/photo/2024/12/12/09/50/animals-9262355_640.jpg"
          alt="고양이"
          fill
          sizes="400px"
          priority
          />
        </div>
    </>
  );
}