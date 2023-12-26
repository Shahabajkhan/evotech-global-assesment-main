import React from 'react'

const Tabs = () => {
  return (
    <div className="absolute top-[172px] left-[400px] w-[1343px] h-[197px] overflow-hidden text-center text-xl">
      <div className="absolute top-[0px] left-[0px] rounded-xl bg-white box-border w-[210px] h-[197px] overflow-hidden text-lg border-[1px] border-solid border-whitesmoke-200">
        <div className="absolute top-[18px] left-[52px] w-[108px] h-[141px]">
          <div className="absolute top-[96px] left-[0px] leading-[19px] font-semibold inline-block w-[108px] h-[45px]">
            <p className="m-0">SaaS</p>
            <p className="m-0">Application</p>
          </div>
          <img
            className="absolute w-[77.96%] top-[calc(50%_-_70.5px)] right-[12.4%] left-[9.63%] max-w-full overflow-hidden h-[81px] object-cover"
            alt=""
            src="/library@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[0px] left-[270px] rounded-xl bg-white box-border w-[210px] h-[197px] overflow-hidden border-[1px] border-solid border-whitesmoke-200">
        <div className="absolute top-[15px] left-[calc(50%_-_57px)] w-[113px] h-[134px]">
          <div className="absolute top-[96px] left-[calc(50%_-_56.5px)] leading-[19px] font-semibold">
            <p className="m-0">Main</p>
            <p className="m-0">Categories</p>
          </div>
          <img
            className="absolute w-[62.2%] top-[calc(50%_-_67px)] right-[18.07%] left-[19.73%] max-w-full overflow-hidden h-[81px] object-cover"
            alt=""
            src="/layout4blocks@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[0px] left-[571px] rounded-xl bg-mediumseagreen-100 w-[210px] h-[197px] overflow-hidden text-white">
        <div className="absolute top-[24px] left-[55.17px] w-[106.83px] h-[149px]">
          <div className="absolute top-[93px] left-[17.83px] leading-[19px] font-semibold inline-block w-[89px] h-14">
            <p className="m-0">Video</p>
            <p className="m-0">Tutorials</p>
          </div>
          <img
            className="absolute h-[47.65%] w-[92.46%] top-[0%] right-[7.54%] bottom-[52.35%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/movielane2@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[0px] left-[847px] rounded-xl bg-white box-border w-[210px] h-[197px] overflow-hidden border-[1px] border-solid border-whitesmoke-200">
        <div className="absolute top-[21px] left-[54px] w-[121px] h-[145px]">
          <div className="absolute top-[96px] left-[0px] leading-[19px] font-semibold inline-block w-[121px] h-[49px]">
            <p className="m-0">Sales</p>
            <p className="m-0">Statistics</p>
          </div>
          <div className="absolute h-[59.31%] w-[69.42%] top-[0%] right-[23.14%] bottom-[40.69%] left-[7.44%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
            <div className="absolute h-[66.67%] w-[12.5%] top-[16.67%] right-[33.33%] bottom-[16.67%] left-[54.17%] rounded-sm bg-silver-100 opacity-[0.3] mix-blend-normal" />
            <div className="absolute h-[45.83%] w-[12.5%] top-[37.5%] right-[54.17%] bottom-[16.67%] left-[33.33%] rounded-sm bg-silver-100" />
            <div className="absolute h-[37.5%] w-[12.5%] top-[45.83%] right-[12.5%] bottom-[16.67%] left-[75%] rounded-sm bg-silver-100" />
            <div className="absolute h-[29.17%] w-[12.5%] top-[54.17%] right-[75%] bottom-[16.67%] left-[12.5%] rounded-sm bg-silver-100" />
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[1111px] rounded-xl bg-white box-border w-[210px] h-[197px] overflow-hidden border-[1px] border-solid border-whitesmoke-200">
        <div className="absolute top-[34px] left-[58px] w-[95.02px] h-[129px]">
          <div className="absolute top-[91px] left-[0px] leading-[19px] font-semibold">
            <p className="m-0">ARC</p>
            <p className="m-0">Security</p>
          </div>
          <img
            className="absolute h-[58.14%] w-[99.96%] top-[0%] right-[0%] bottom-[41.86%] left-[0.04%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/shieldcheck@2x.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Tabs