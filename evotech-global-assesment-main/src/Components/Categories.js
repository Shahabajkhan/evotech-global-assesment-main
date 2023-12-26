import React from 'react'

const Categories = () => {
  return (
    <div className="absolute top-[1px] left-[0px] rounded-xl bg-white w-[628.13px] h-[342px] text-2xs text-white">
      <div className="absolute h-[99.79%] w-full top-[0.21%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-white" />
      <div className="absolute w-[calc(100%_-_0.13px)] top-[0px] right-[0.13px] left-[0px] rounded-xl bg-crimson-200 h-[242px] overflow-hidden">

        <div className="absolute w-[calc(100%_+_13.5px)] top-[106.25px] right-[-6px] left-[-7.5px] h-[65.34px] flex items-center justify-center">
          <img
            className="w-full max-w-full overflow-hidden h-full object-fit absolute left-[0px] top-[0px] [transform:scale(1.061)]"
            alt=""
            src="/vector-6@2x.png"
          />
        </div>
        <div className="absolute h-[calc(100%_-_212px)] top-[22px] right-[30px] bottom-[190px] w-[85px]">
          <div className="absolute h-full top-[0px] right-[0px] bottom-[0px] rounded-md bg-white w-[85px] opacity-[0.12]" />
          <div className="absolute top-[6px] right-[35px] font-semibold flex items-center w-9">
            Export
          </div>
          <img
            className="absolute top-[13px] right-[15.5px] w-[6.5px] h-[3px] object-cover"
            alt=""
            src="/arrow@2x.png"
          />
        </div>
        <div className="absolute top-[27px] left-[29px] text-mid leading-[21px] font-semibold inline-block w-[119px] h-[22px]">
          Categories
        </div>
      </div>
    </div>
  );
}

export default Categories