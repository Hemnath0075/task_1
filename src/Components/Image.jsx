import React from "react";

function Image() {
  const dashboards = [
    {
      dashboard_name: "Balance Sheet Dashboard",
      description:
        "Optimize financial visibility with our Balance Sheet Dashboard, providing a comprehensive overview of assets, liabilities, and equity.",
      image: "/Dashboards/Balance-Sheet 1.png",
    },
    {
      dashboard_name: "Balance Sheet Dashboard",
      description:
        "Optimize financial visibility with our Balance Sheet Dashboard, providing a comprehensive overview of assets, liabilities, and equity.",
      image: "/Dashboards/Balance-Sheet 1.png",
    },
    {
      dashboard_name: "Balance Sheet Dashboard",
      description:
        "Optimize financial visibility with our Balance Sheet Dashboard, providing a comprehensive overview of assets, liabilities, and equity.",
      image: "/Dashboards/Balance-Sheet 1.png",
    },
    {
      dashboard_name: "Balance Sheet Dashboard",
      description:
        "Optimize financial visibility with our Balance Sheet Dashboard, providing a comprehensive overview of assets, liabilities, and equity.",
      image: "/Dashboards/Balance-Sheet 1.png",
    },
    {
      dashboard_name: "Balance Sheet Dashboard",
      description:
        "Optimize financial visibility with our Balance Sheet Dashboard, providing a comprehensive overview of assets, liabilities, and equity.",
      image: "/Dashboards/Balance-Sheet 1.png",
    },
    {
      dashboard_name: "Balance Sheet Dashboard",
      description:
        "Optimize financial visibility with our Balance Sheet Dashboard, providing a comprehensive overview of assets, liabilities, and equity.",
      image: "/Dashboards/Balance-Sheet 1.png",
    },
    {
      dashboard_name: "Balance Sheet Dashboard",
      description:
        "Optimize financial visibility with our Balance Sheet Dashboard, providing a comprehensive overview of assets, liabilities, and equity.",
      image: "/Dashboards/Balance-Sheet 1.png",
    },
  ];
  return (
    <div className="w-[70vw] flex flex-row justify-around items-center">
      <div className="grid grid-cols-2 gap-12 w-full">
        {dashboards.map((item) => {
          return (
            <div className="flex flex-row w-full justify-center items-center">
              <div className="dashboard-cards box-shadow-div rounded-[15px] flex flex-col w-[400px] px-4 py-6 text-white gap-4">
                <div className="">
                  <img src={item.image} alt="" />
                </div>
                <div className="flex flex-col gap-4 ml-2">
                  <p className="text-xl">{item.dashboard_name}</p>
                  <div className="flex flex-row justify-between items-center gap-8">
                    <p className="text-sm basis-[60%] text-[#CACACA]">
                      {item.description}
                    </p>
                    <img
                      src={"/Dashboards/next.svg"}
                      alt=""
                      className="mr-8 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Image;
