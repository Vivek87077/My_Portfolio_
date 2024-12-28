import { BiLogoPostgresql } from "react-icons/bi"
import { DiRedis } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { RiReactjsLine } from "react-icons/ri"
import { SiExpress, SiMongodb } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"

const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-5">
        <div>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="p-4">
          <TbBrandNextjs  className="text-7xl" />
        </div>  
        <div className="p-0">
          <SiMongodb className="text-7xl text-cyan-500" />
        </div>
        <div className="p-1">
          <DiRedis  className="text-7xl text-red-700" />
        </div>
        <div className="p-3">
          <FaNodeJs  className="text-7xl text-green-500" />
        </div>
        <div className="p-1">
          <SiExpress className="text-7xl text-gray-700" /> {/* Substitute icon for Express.js */}
        </div>
      </div>  
    </div>  
  );
};

export default Technologies;