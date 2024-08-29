import Avatar from "../common/Avatar";

const AddPost = () => {
  return (
    <div className="w-full">
      <div className="flex items-start gap-2">
        <Avatar
          src="./next.svg"
          alt="User Alt"
          size={48}
          username="test-user"
        />
        {/* post area */}
        <div className="flex-1">
          <form action="" className="flex flex-col gap-2">
            <textarea
              placeholder="今、何してる？"
              name=""
              id=""
              rows={3}
              className="border rounded-md px-2 py-2 flex-1 resize-none focus:outline-none"
            ></textarea>
            <div className="flex justify-between items-center">
              {/* <PostIconArea /> */}
              <div>post icon area</div>
              <div>
                <button className="bg-slate-600 text-white px-4 py-2 rounded-md text-sm hover:bg-slate-700 duration-150">
                  ポストする
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
