import React from 'react'

const SunHeader = () => {
  return (
    <div className="absolute h-[3.6%] w-[82.33%] top-[4.33%] right-[0%] bottom-[92.07%] left-[17.67%] bg-white overflow-hidden text-darkslategray-200">
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white shadow-[0px_5px_40px_rgba(0,_0,_0,_0.05)]" />
      <div className="absolute h-[59.26%] w-[18%] top-[16.59%] right-[79.57%] bottom-[24.15%] left-[2.43%]">
        <div className="absolute h-[62.5%] w-[33.29%] top-[25.12%] left-[0%] font-medium inline-block">
          Dashboard
        </div>
        <div className="absolute h-full w-[35.54%] top-[0%] right-[0%] bottom-[0%] left-[64.46%] text-orange">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-papayawhip" />
          <div className="absolute h-[62.5%] w-[74.68%] top-[18.75%] left-[12.66%] font-medium inline-block">
            Add New
          </div>
        </div>
        <div className="absolute h-[71.35%] w-[0.37%] top-[20.7%] right-[53.48%] bottom-[7.96%] left-[46.15%] box-border border-r-[1px] border-solid border-whitesmoke-400" />
      </div>
      <div className="absolute h-[59.26%] w-[28.42%] top-[20.37%] right-[2.02%] bottom-[20.37%] left-[69.55%] text-lightslategray-200">
        <div className="absolute h-[87.5%] w-[16.81%] top-[6.25%] right-[83.19%] bottom-[6.25%] left-[0%]">
          <div className="absolute h-[71.43%] w-[69.49%] top-[14.29%] left-[15.25%] font-medium inline-block">
            Today
          </div>
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] text-dodgerblue-100">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-whitesmoke-100" />
            <div className="absolute h-[71.43%] w-[69.49%] top-[14.29%] left-[15.25%] font-medium inline-block">
              Today
            </div>
          </div>
        </div>
        <div className="absolute h-[62.5%] w-[11.97%] top-[18.75%] right-[63.82%] bottom-[18.75%] left-[24.22%] text-royalblue-200">
          <div className="absolute h-[160%] w-[142.86%] top-[-30%] right-[-21.43%] bottom-[-30%] left-[-21.43%] hidden">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-10xs bg-dodgerblue-300" />
            <div className="absolute h-[62.5%] w-[70%] top-[18.75%] left-[15%] font-medium inline-block">{`Month `}</div>
          </div>
          <div className="absolute h-full w-full top-[0%] left-[0%] font-medium text-lightslategray-200 inline-block">{`Month `}</div>
        </div>
        <div className="absolute h-[62.5%] w-[8.55%] top-[18.75%] right-[45.3%] bottom-[18.75%] left-[46.15%]">
          <div className="absolute h-full w-full top-[0%] left-[0%] font-medium inline-block">
            Year
          </div>
          <div className="absolute h-[160%] w-[163.33%] top-[-30%] right-[-33.33%] bottom-[-30%] left-[-30%] hidden text-royalblue-100">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-10xs bg-dodgerblue-300" />
            <div className="absolute h-[62.5%] w-[61.22%] top-[18.75%] left-[18.37%] font-medium inline-block">
              Year
            </div>
          </div>
        </div>
        <div className="absolute h-full w-[22.22%] top-[0%] right-[11.97%] bottom-[0%] left-[65.81%] text-lightslategray-100">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-whitesmoke-100" />
          <div className="absolute h-[62.5%] w-[62.82%] top-[18.75%] left-[17.95%] font-medium inline-block">
            Actions
          </div>
        </div>
        <div className="absolute h-full w-[28.21%] top-[0%] right-[11.97%] bottom-[0%] left-[59.83%] hidden text-white">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-10xs bg-royalblue-200" />
          <div className="absolute h-[62.5%] w-[49.49%] top-[18.75%] left-[14.14%] font-medium inline-block">
            Actions
          </div>
          <img
            className="absolute h-3/4 w-[24.24%] top-[15.62%] right-[6.06%] bottom-[9.38%] left-[69.7%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
          />
        </div>
        <img
          className="absolute h-[93.75%] w-[8.55%] top-[3.12%] right-[0%] bottom-[3.12%] left-[91.45%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/file-plus-icon@2x.png"
        />
      </div>
    </div>
  );
}

export default SunHeader