import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";

export default function AboutMe() {
  return (
    <div>
      <div className="bg-gray-100 flex justify-center p-3">
        <div className={"flex flex-col md:flex-row items-center my-8"}>
          <img src={"/my-img.jpeg"} className={"w-40 rounded-full"} />
          <div className={"flex flex-col items-center md:items-start md:ml-8"}>
            <h1 className={"text-3xl text-gray-700 font-bold mt-8"}>
              Hey folks, I'm Matteo!
            </h1>
            <h2 className={"text-gray-500 text-lg"}>
              I design and build apps that work.
            </h2>
            <MatteoSocialButtons />
          </div>
        </div>
      </div>
    </div>
  );
}

const GitHubButton = () => {
  return (
    <a href="https://github.com/matteomad1011" target="_blank">
      <AiFillGithub size={32} />
    </a>
  );
};

const MatteoSocialButtons = () => {
  return (
    <div className={"mt-2"}>
      <GitHubButton />
    </div>
  );
};
