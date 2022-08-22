/* eslint-disable @next/next/no-img-element */
// we'll want to use the native image component when we have actual images coming from the server or from the filesystem
import Image from 'next/image';

type PostType = {
  title: string;
  date: string;
  image: string;
};

const Post: React.FC<PostType> = ({ title, date, image }) => {
  return (
    <div className="bg-[#f4cea5] shadow-md my-6 mx-8 text-left flex flex-col">
      <img src={image} alt="placeholder" />
      <p className="p-3 text-sm text-stone-600">{date}</p>
      <h3 className="px-3 pb-2 mb-3 font-bold text-stone-700">{title}</h3>
    </div>
  );
};

export default Post;