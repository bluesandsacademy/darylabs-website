import { useRouter } from "next/navigation";
import { LuClock3 } from "react-icons/lu";
import { IoMdCalendar } from "react-icons/io";

const ExperimentCard = ({ lab }) => {
  const router = useRouter();

  const handleClick = () => {
    const query = new URLSearchParams({
      simulationUrl: lab.url,
      title: lab.title,
    }).toString();
    router.push(`/dashboard/experiments/launch?${query}`);
  };

  function truncateDesc(str) {
    const words = str.split(/\s+/);
    return words.slice(0, 20).join(" ") + "...";
  }

  return (
    <div className="flex flex-col gap-2 rounded overflow-hidden w-80 bg-white">
      <div className="flex items-center justify-center w-full bg-gray-400 text-white rounded-sm">
        <img src="/images/pictures/lab-img.jpg" alt="lab-image" />
      </div>
      <div className="flex flex-col gap-2 px-2">
        <p className="text-xs md:text-sm font-semibold">{lab.title}</p>
        <p className="text-xs">
          {lab.description && lab.description.length < 20
            ? lab.description
            : lab.description
            ? truncateDesc(lab.description)
            : ""}
        </p>
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-xs text-gray-600 flex items-center gap-1">
              <LuClock3 className="text-blue-600" /> 90 Mins
            </p>
            <p className="text-xs text-gray-600 flex items-center gap-1">
              <IoMdCalendar className="text-blue-600" />
            </p>
          </div>
        </div>
        <button
          className="bg-[#006fcc] text-white w-full p-2 rounded-md text-sm"
          onClick={handleClick}
        >
          Go to lab
        </button>
      </div>
    </div>
  );
};

export default ExperimentCard;
