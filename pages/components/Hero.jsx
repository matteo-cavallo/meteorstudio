import { AiOutlineInstagram } from "react-icons/ai";

export default function Hero() {
  return (
    <div className={""}>
      <div className={"flex flex-col bg-darkPurple items-center py-24"}>
        <img src="/meteor.gif" className={"w-40 mb-8"} />
        <h1 className="text-3xl font-bold text-white">METEOR STUDIO</h1>
        <h2 className="text-md text-lightPurple">SOFTWARE DEVELOPERS</h2>
        <SocialButtons />
      </div>
    </div>
  );
}

const SocialButtons = () => {
  return (
    <div className="mt-2">
      <InstaButton />
    </div>
  );
};

const InstaButton = () => {
  return (
    <a href="https://www.instagram.com/meteorstudio.eu/" target="_blank">
      <AiOutlineInstagram color={"white"} size={32} />
    </a>
  );
};
