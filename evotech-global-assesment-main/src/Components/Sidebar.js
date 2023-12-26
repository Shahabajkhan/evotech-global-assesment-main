import React from 'react'

const Sidebar = () => {
  return (
    <div className="absolute h-full w-[17.67%] top-[0%] right-[82.33%] bottom-[0%] left-[0%] bg-gray-200 overflow-hidden text-xs text-dimgray">
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-200" />
      <div className="absolute h-[2.93%] w-full top-[6.37%] right-[0.63%] bottom-[90.7%] left-[-0.63%] bg-gray-300" />
      <img
        className="absolute h-[4.33%] w-full top-[0%] right-[0%] bottom-[95.67%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/top-part@2x.png"
      />
      <div className="absolute h-[8.67%] w-[9.36%] top-[7%] right-[82.71%] bottom-[84.33%] left-[7.92%]">
        <img
          className="absolute h-[19.23%] w-full top-[0%] right-[0%] bottom-[80.77%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/layers@2x.png"
        />
        <img
          className="absolute h-[18.46%] w-[96.72%] top-[81.54%] right-[3.28%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/layout-4-blocks@2x.png"
        />
      </div>
      <div className="absolute h-[1.2%] w-[19.25%] top-[11.33%] right-[71.7%] bottom-[87.47%] left-[9.06%]">
        <div className="absolute h-full w-full top-[0%] left-[0%] inline-block">
          CUSTOM
        </div>
      </div>
      <div className="absolute h-[9.2%] w-[21.13%] top-[17%] right-[58.87%] bottom-[73.8%] left-[20%] text-lightslategray-300">
        <div className="absolute h-[13.04%] w-[58.93%] top-[0%] left-[1.79%] inline-block">
          Users
        </div>
        <div className="absolute h-[13.04%] w-full top-[28.99%] left-[0%] inline-block">
          Contacts
        </div>
        <div className="absolute h-[13.04%] w-[53.57%] top-[57.97%] left-[0%] inline-block">
          Chat
        </div>
        <div className="absolute h-[13.04%] w-[66.07%] top-[86.96%] left-[1.79%] inline-block">
          Pages
        </div>
      </div>
      <div className="absolute h-[14.7%] w-[68.6%] top-[0.83%] right-[22%] bottom-[84.47%] left-[9.4%] text-smi text-white">
        <div className="absolute h-[9.07%] w-[40.16%] top-[42.87%] left-[18.21%] inline-block">
          Dashboard
        </div>
        <div className="absolute h-[14.32%] w-full top-[0%] left-[0%] text-[30px] font-extrabold inline-block">
          DASHBOARD
        </div>
        <div className="absolute h-[9.07%] w-[44.56%] top-[90.93%] left-[18.21%] inline-block">
          Applications
        </div>
      </div>
      <div className="absolute h-[5.33%] w-[1.89%] top-[17.6%] right-[83.4%] bottom-[77.07%] left-[14.72%]">
        <div className="absolute h-[1.04%] w-[116.6%] top-[-0.52%] right-[-8.3%] bottom-[99.48%] left-[-8.3%] box-border border-t-[1px] border-solid border-slategray-300" />
        <div className="absolute h-[1.04%] w-[116.6%] top-[49.48%] right-[-8.3%] bottom-[49.48%] left-[-8.3%] box-border border-t-[1px] border-solid border-slategray-300" />
        <div className="absolute h-[1.04%] w-[116.6%] top-[99.48%] right-[-8.3%] bottom-[-0.52%] left-[-8.3%] box-border border-t-[1px] border-solid border-slategray-300" />
      </div>
      <div className="absolute h-[21.4%] w-[9.06%] top-[24.8%] right-[83.4%] bottom-[53.8%] left-[7.55%]">
        <div className="absolute h-[7.48%] w-full top-[92.52%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
        </div>
        <img
          className="absolute h-[7.48%] w-full top-[0%] right-[0%] bottom-[92.52%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/barcode-read@2x.png"
        />
      </div>
      <img
        className="absolute h-[11.16%] w-[3.52%] top-[14.64%] right-[10.19%] bottom-[74.2%] left-[86.29%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/arrows@2x.png"
      />
    </div>
  );
}

export default Sidebar