import {
  SiChakraui,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiJest,
  SiMui,
  SiReact,
  SiRedux,
  SiNestjs,
} from "react-icons/si";

import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full mx-8">
        <div className="font-bold text-purple-400 text-2xl my-1 w-full flex justify-center">
          {"</>"}
        </div>
        <div className="w-full flex justify-center text-6xl font-bold">
          Henrique Rizzo
        </div>
        <div className="w-full flex justify-center font-medium text-2xl my-2.5 text-purple-400 text-center">
          Full-stack developer
        </div>
        <div className="w-full flex justify-center text-xl my-2 text-center">
          <Link href="https://nextjs.org/" target="_blank">
            <SiNextdotjs className="text-white mx-1" />
          </Link>
          <Link href="https://nodejs.org/en" target="_blank">
            <SiNodedotjs className="text-green-500 mx-1" />
          </Link>
          <Link href="https://react.dev/" target="_blank">
            <SiReact className="text-cyan-500 mx-1" />
          </Link>
          <Link href="https://chakra-ui.com/" target="_blank">
            <SiChakraui className="text-teal-400 mx-1" />
          </Link>
          <Link href="https://tailwindcss.com/" target="_blank">
            <SiTailwindcss className="text-cyan-400 mx-1" />
          </Link>
          <Link href="https://mui.com/" target="_blank">
            <SiMui className="text-blue-600 mx-1" />
          </Link>
          <Link href="https://redux.js.org/" target="_blank">
            <SiRedux className="text-purple-500 mx-1" />
          </Link>
          <Link href="https://www.typescriptlang.org/" target="_blank">
            <SiTypescript className="text-blue-400 mx-1" />
          </Link>
          <Link href="https://expressjs.com/pt-br/" target="_blank">
            <SiExpress className="text-white mx-1" />
          </Link>
          <Link href="https://nestjs.com/" target="_blank">
            <SiNestjs className="text-red-600 mx-1" />
          </Link>
          <Link href="https://jestjs.io/pt-BR/" target="_blank">
            <SiJest className="text-rose-700 mx-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
