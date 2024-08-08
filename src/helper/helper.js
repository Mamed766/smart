const getTypeBgColor = (type) => {
  switch (type) {
    case "GADGETS":
      return "bg-[#AB07AB] ";
    case "TECHNOLOGY":
      return "bg-[#3C3FDE]";
    case "GAMING":
      return "bg-red-500";
    case "PHONES":
      return "bg-[#39B2B2]";
    default:
      return "bg-gray-500";
  }
};

export default getTypeBgColor;
