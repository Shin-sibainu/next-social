import Image from "next/image";
import Link from "next/link";
import Avatar from "../common/Avatar";

const Header = () => {
  return (
    <div className="h-16 flex items-center py-3 px-2 md:px-8 justify-between border">
      <h1 className="font-bold md:text-2xl">Next Social</h1>

      <div>
        {/* <Link href={`profile/${"test-user"}`}>
          <Image
          src="/next.svg"
          alt="aa"
          width={40}
          height={40}
          className="rounded-full border w-12 h-12"
          />
          </Link> */}
        <Avatar
          src="/next.svg"
          alt="User Avatar"
          size={48}
          username="test-user"
        />
      </div>
    </div>
  );
};

export default Header;
