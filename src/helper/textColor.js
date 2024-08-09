const getTypeTextColor = (type) => {
  switch (type) {
    case "GADGETS":
      return "text-[#AB07AB]";
    case "TECHNOLOGY":
      return "text-[#3C3FDE]";
    case "PHONES":
      return "text-[#39B2B2]";
    case "Facebook":
      return "text-blue-700";
    case "Twitter":
      return "text-blue-400";
    case "Pinterest":
      return "text-red-500";
    case "Instagram":
      return "text-pink-500";
    case "Telegram":
      return "text-blue-500";
    case "Whatsapp":
      return "text-green-500";
    default:
      return "bg-gray-500";
  }
};

export default getTypeTextColor;
