import Image from "next/image";
import Link from "next/link";

interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
  username: string;
}

const Avatar = ({ src, alt, size = 48, username }: AvatarProps) => {
  return (
    <Link href={`/profile/${username}`}>
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className={`rounded-full border w-${size / 4} h-${size / 4}`}
      />
    </Link>
  );
};

export default Avatar;
