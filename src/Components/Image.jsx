import React from "react";

function Picture() {
  const dashboards = [
    {
      dashboard_name: "Balance Sheet Dashboard",
      description:
        "Optimize financial visibility with our Balance Sheet Dashboard, providing a comprehensive overview of assets, liabilities, and equity.",
      image: "/Dashboards/Balance-Sheet 1.png",
    },
    {
      dashboard_name: "MX Locker",
      description:
        "Optimize financial visibility with our Balance Sheet Dashboard, providing a comprehensive overview of assets, liabilities, and equity.",
      image: "/Dashboards/MX-locker 1.png",
    },
    {
      dashboard_name: "CMI Dashboard",
      description:
        "Optimize financial visibility with our Balance Sheet Dashboard, providing a comprehensive overview of assets, liabilities, and equity.",
      image: "/Dashboards/CMI-Dashboard 2.png",
    },
    {
      dashboard_name: "DFTB",
      description:
        "Optimize financial visibility with our Balance Sheet Dashboard, providing a comprehensive overview of assets, liabilities, and equity.",
      image: "/Dashboards/DFTB 1.png",
    },
    {
      dashboard_name: "Placester",
      description:
        "Optimize financial visibility with our Balance Sheet Dashboard, providing a comprehensive overview of assets, liabilities, and equity.",
      image: "/Dashboards/Placester 1.png",
    },
    {
      dashboard_name: "Inventory Sourcing Dashboard",
      description:
        "Optimize financial visibility with our Balance Sheet Dashboard, providing a comprehensive overview of assets, liabilities, and equity.",
      image: "/Dashboards/Sourcing 1.png",
    },
    {
      dashboard_name: "Proximo",
      description:
        "Optimize financial visibility with our Balance Sheet Dashboard, providing a comprehensive overview of assets, liabilities, and equity.",
      image: "/Dashboards/Proximo 1.png",
    },
    {
      dashboard_name: "HR Dashboard 2",
      description:
        "Optimize financial visibility with our Balance Sheet Dashboard, providing a comprehensive overview of assets, liabilities, and equity.",
      image: "/Dashboards/HR-02 1.png",
    },
    {
      dashboard_name: "Manufacturing Management Information",
      description:
        "Optimize financial visibility with our Balance Sheet Dashboard, providing a comprehensive overview of assets, liabilities, and equity.",
      image: "/Dashboards/HUL 1.png",
    },
    {
      dashboard_name: "E Commerce Sales Overview",
      description:
        "Optimize financial visibility with our Balance Sheet Dashboard, providing a comprehensive overview of assets, liabilities, and equity.",
      image: "/Dashboards/Ecommerce 1.png",
    },
    {
      dashboard_name: "Loyalty",
      description:
        "Optimize financial visibility with our Balance Sheet Dashboard, providing a comprehensive overview of assets, liabilities, and equity.",
      image: "/Dashboards/Loyalty 1.png",
    },
    {
      dashboard_name: "CMI",
      description:
        "Optimize financial visibility with our Balance Sheet Dashboard, providing a comprehensive overview of assets, liabilities, and equity.",
      image: "/Dashboards/CMI 1.png",
    },
    {
      dashboard_name: "Value Realization Tracker",
      description:
        "Optimize financial visibility with our Balance Sheet Dashboard, providing a comprehensive overview of assets, liabilities, and equity.",
      image: "/Dashboards/J&J 1.png",
    },
    {
      dashboard_name: "HR Dashboard",
      description:
        "Optimize financial visibility with our Balance Sheet Dashboard, providing a comprehensive overview of assets, liabilities, and equity.",
      image: "/Dashboards/HR 1.png",
    } 
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

export default Picture;
