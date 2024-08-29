import AddPost from "./components/feed/AddPost";
import Feed from "./components/feed/Feed";
import LeftSidebar from "./components/layout/LeftSidebar";
import RightSidebar from "./components/layout/RightSidebar";

export default function Home() {
  return (
    <div className="flex h-[calc(100vh-4rem)] overflow-hidden">
      {/* Left Sidebar */}
      <div className="w-[20%]">
        <LeftSidebar />
      </div>
      {/* Feed */}
      <div className="w-[50%]">
        <div className="flex flex-col gap-6 p-4">
          <AddPost />
          <Feed />
        </div>
      </div>
      {/* Right Sidebar */}
      <div className="w-[30%]">
        <RightSidebar />
      </div>
    </div>
  );
}
