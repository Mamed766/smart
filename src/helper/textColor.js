const getTypeTextColor = (type) => {
  switch (type) {
    case "GADGETS":
      return "text-[#AB07AB]";
    case "TECHNOLOGY":
      return "text-[#3C3FDE]";
    case "PHONES":
      return "text-[#39B2B2]";
    default:
      return "bg-gray-500";
  }
};

export default getTypeTextColor;
