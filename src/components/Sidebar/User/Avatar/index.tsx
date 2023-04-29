import Image from "next/image";

export function Avatar({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="flex items-center w-8 h-8 rounded-md">
      <Image
        src={imageSrc}
        alt="teste"
        width={100}
        height={100}
        quality={10}
        style={{
          width: "22px",
          height: "22px",
          borderRadius: "5px",
        }}
      ></Image>
    </div>
  );
}
