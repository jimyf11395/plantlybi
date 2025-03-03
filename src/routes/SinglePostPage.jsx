import { Link } from "react-router-dom";
import Image from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl lg:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h1>
          <div className=" flex items-center gap-2 text-gray-500 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">John Doe</Link>
            <span>on</span>
            <Link>Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            id ullam asperiores pariatur quibusdam harum iure. Excepturi,
            delectus nulla consequuntur fuga ab voluptates! Quae error delectus
            saepe, velit laudantium adipisci!
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" w="600" className="rounded-2xl" />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In cum
            exercitationem voluptas veritatis nulla! Corporis porro corrupti
            adipisci libero non debitis beatae, et omnis nulla esse minima,
            consequuntur reiciendis consectetur.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. In cum exercitationem voluptas
            veritatis nulla! Corporis porro corrupti adipisci libero non debitis
            beatae, et omnis nulla esse minima, consequuntur reiciendis
            consectetur.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            In cum exercitationem voluptas veritatis nulla! Corporis porro
            corrupti adipisci libero non debitis beatae, et omnis nulla esse
            minima, consequuntur reiciendis consectetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In cum
            exercitationem voluptas veritatis nulla! Corporis porro corrupti
            adipisci libero non debitis beatae, et omnis nulla esse minima,
            consequuntur reiciendis consectetur.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. In cum exercitationem voluptas
            veritatis nulla! Corporis porro corrupti adipisci libero non debitis
            beatae, et omnis nulla esse minima, consequuntur reiciendis
            consectetur.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            In cum exercitationem voluptas veritatis nulla! Corporis porro
            corrupti adipisci libero non debitis beatae, et omnis nulla esse
            minima, consequuntur reiciendis consectetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In cum
            exercitationem voluptas veritatis nulla! Corporis porro corrupti
            adipisci libero non debitis beatae, et omnis nulla esse minima,
            consequuntur reiciendis consectetur.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. In cum exercitationem voluptas
            veritatis nulla! Corporis porro corrupti adipisci libero non debitis
            beatae, et omnis nulla esse minima, consequuntur reiciendis
            consectetur.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            In cum exercitationem voluptas veritatis nulla! Corporis porro
            corrupti adipisci libero non debitis beatae, et omnis nulla esse
            minima, consequuntur reiciendis consectetur.
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1>Author</h1>
          <div className="">
            <Image
              src="userImg.jpeg"
              className="w-12 h012 rounded-full object-cover"
              w="48"
              h="48"
            />
            <Link>John Doe</Link>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
              debitis fuga excepturi, fugit.
            </p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuActions />
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
