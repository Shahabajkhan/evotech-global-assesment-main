import Categories from "./Categories";
import Header from "./Header";
import NewArrivals from "./NewArrivals";
import RecentStats from "./RecentStats";
import SalesProgress from "./SalesProgress";
import Sidebar from "./Sidebar";
import SunHeader from "./SunHeader";
import Tabs from "./Tabs";

const Option1Basic = () => {
  return (
    <div className="relative bg-ghostwhite-200 w-full h-[1805px] overflow-hidden text-left text-smi text-silver-100 font-poppins">
      <div className="absolute top-[0px] left-[0px] w-[1807px] h-[1805px]">
        <div className="absolute top-[403px] left-[400px] w-[1321.07px] h-[867px]">
          <NewArrivals />
          <SalesProgress />
          <Categories />
        </div>
        <Sidebar />
        <SunHeader />
        <Header />
      </div>
      <Tabs />
      <div className="absolute top-[0px] left-[0px] w-[1807px] h-[1805px] hidden">
        <div className="absolute top-[149px] left-[295px] w-[1175px] h-[1477px]">
          <div className="absolute top-[984px] left-[0px] rounded-xl bg-white w-[1175px] h-[493px] overflow-hidden">
            <div className="absolute w-[calc(100%_-_60px)] top-[100px] right-[30px] left-[30px] rounded-md bg-whitesmoke-100 h-[43px]" />
            <div className="absolute top-[181px] right-[30px] w-[92px] h-[274px] text-xs text-mediumturquoise">
              <img
                className="absolute top-[321px] right-[0px] w-8 h-8 object-cover hidden"
                alt=""
              />
              <div className="absolute top-[321px] right-[42px] w-8 h-8 hidden">
                <div className="absolute top-[0px] right-[0px] rounded-md bg-whitesmoke-100 w-8 h-8" />
                <img
                  className="absolute top-[10px] right-[10px] w-3 h-3 overflow-hidden object-cover"
                  alt=""
                />
              </div>
              <div className="absolute top-[240px] right-[0px] w-[92px] h-[34px]">
                <div className="absolute top-[0px] right-[0px] rounded-md bg-lightcyan-200 w-[92px] h-[34px]" />
                <div className="absolute top-[8px] right-[14px] font-semibold">
                  View Offer
                </div>
              </div>
              <div className="absolute top-[160px] right-[0px] w-[92px] h-[34px]">
                <div className="absolute top-[0px] right-[0px] rounded-md bg-lightcyan-200 w-[92px] h-[34px]" />
                <div className="absolute top-[8px] right-[14px] font-semibold">
                  View Offer
                </div>
              </div>
              <div className="absolute top-[80px] right-[0px] w-[92px] h-[34px]">
                <div className="absolute top-[0px] right-[0px] rounded-md bg-lightcyan-200 w-[92px] h-[34px]" />
                <div className="absolute top-[8px] right-[14px] font-semibold">
                  View Offer
                </div>
              </div>
              <div className="absolute top-[0px] right-[0px] w-[92px] h-[34px]">
                <div className="absolute top-[0px] right-[0px] rounded-md bg-lightcyan-200 w-[92px] h-[34px]" />
                <div className="absolute top-[8px] right-[14px] font-semibold">
                  View Offer
                </div>
              </div>
            </div>
            <div className="absolute top-[113px] right-[131px] w-40 h-[347px]">
              <div className="absolute top-[383px] right-[30px] w-[131px] h-11 hidden">
                <div className="absolute top-[24px] right-[88px] font-medium">
                  A Hero
                </div>
                <div className="absolute top-[0px] right-[0px] text-sm font-semibold text-darkslategray-100 inline-block w-[131px] h-6">
                  Kobe Leonard
                </div>
              </div>
              <div className="absolute top-[304px] left-[calc(50%_-_80px)] w-[77px] h-[43px]">
                <div className="absolute top-[23px] left-[calc(50%_-_36.5px)] font-medium">
                  Avarage
                </div>
                <img
                  className="absolute top-[0px] left-[calc(50%_-_38.5px)] w-[17px] h-[17px] object-cover"
                  alt=""
                />
                <img
                  className="absolute top-[0px] left-[calc(50%_-_23.5px)] w-[17px] h-[17px] object-cover"
                  alt=""
                />
                <img
                  className="absolute top-[0px] left-[calc(50%_-_8.5px)] w-[17px] h-[17px] object-cover"
                  alt=""
                />
                <img
                  className="absolute top-[0px] left-[calc(50%_+_6.5px)] w-[17px] h-[17px] object-cover"
                  alt=""
                />
                <img
                  className="absolute top-[0px] left-[calc(50%_+_21.5px)] w-[17px] h-[17px] object-cover"
                  alt=""
                />
              </div>
              <div className="absolute top-[224px] left-[calc(50%_-_80px)] w-[77px] h-[43px]">
                <div className="absolute top-[23px] left-[calc(50%_-_36.5px)] font-medium">
                  Best Rated
                </div>
                <img
                  className="absolute top-[0px] left-[calc(50%_-_38.5px)] w-[17px] h-[17px] object-cover"
                  alt=""
                />
                <img
                  className="absolute top-[0px] left-[calc(50%_-_23.5px)] w-[17px] h-[17px] object-cover"
                  alt=""
                />
                <img
                  className="absolute top-[0px] left-[calc(50%_-_8.5px)] w-[17px] h-[17px] object-cover"
                  alt=""
                />
                <img
                  className="absolute top-[0px] left-[calc(50%_+_6.5px)] w-[17px] h-[17px] object-cover"
                  alt=""
                />
                <img
                  className="absolute top-[0px] left-[calc(50%_+_21.5px)] w-[17px] h-[17px] object-cover"
                  alt=""
                />
              </div>
              <div className="absolute top-[144px] left-[calc(50%_-_80px)] w-[104px] h-[43px]">
                <div className="absolute top-[23px] left-[calc(50%_-_50px)] font-medium">
                  Above Avarage
                </div>
                <img
                  className="absolute top-[0px] left-[calc(50%_-_52px)] w-[17px] h-[17px] object-cover"
                  alt=""
                />
                <img
                  className="absolute top-[0px] left-[calc(50%_-_37px)] w-[17px] h-[17px] object-cover"
                  alt=""
                />
                <img
                  className="absolute top-[0px] left-[calc(50%_-_22px)] w-[17px] h-[17px] object-cover"
                  alt=""
                />
                <img
                  className="absolute top-[0px] left-[calc(50%_-_7px)] w-[17px] h-[17px] object-cover"
                  alt=""
                />
                <img
                  className="absolute top-[0px] left-[calc(50%_+_8px)] w-[17px] h-[17px] object-cover"
                  alt=""
                />
              </div>
              <div className="absolute top-[64px] left-[calc(50%_-_80px)] w-[77px] h-[43px]">
                <div className="absolute top-[23px] left-[calc(50%_-_36.5px)] font-medium">
                  Best Rated
                </div>
                <img
                  className="absolute top-[0px] left-[calc(50%_-_38.5px)] w-[17px] h-[17px] object-cover"
                  alt=""
                />
                <img
                  className="absolute top-[0px] left-[calc(50%_-_23.5px)] w-[17px] h-[17px] object-cover"
                  alt=""
                />
                <img
                  className="absolute top-[0px] left-[calc(50%_-_8.5px)] w-[17px] h-[17px] object-cover"
                  alt=""
                />
                <img
                  className="absolute top-[0px] left-[calc(50%_+_6.5px)] w-[17px] h-[17px] object-cover"
                  alt=""
                />
                <img
                  className="absolute top-[0px] left-[calc(50%_+_21.5px)] w-[17px] h-[17px] object-cover"
                  alt=""
                />
              </div>
              <div className="absolute top-[0px] left-[calc(50%_-_78px)] w-[158px] h-[18px] text-xs">
                <div className="absolute top-[0px] left-[calc(50%_-_79px)] tracking-[0.03em] font-semibold flex items-center w-[158px] h-[18px]">
                  RATING
                </div>
              </div>
            </div>
            <div className="absolute top-[113px] right-[321px] w-[158px] h-[347px]">
              <div className="absolute top-[383px] right-[30px] w-[131px] h-11 hidden">
                <div className="absolute top-[24px] right-[88px] font-medium">
                  A Hero
                </div>
                <div className="absolute top-[0px] right-[0px] text-sm font-semibold text-darkslategray-100 inline-block w-[131px] h-6">
                  Kobe Leonard
                </div>
              </div>
              <div className="absolute top-[303px] left-[calc(50%_-_79px)] w-[131px] h-11">
                <div className="absolute top-[24px] left-[calc(50%_-_65.5px)] font-medium">
                  Insurance
                </div>
                <div className="absolute top-[0px] left-[calc(50%_-_65.5px)] text-sm font-semibold text-darkslategray-100 inline-block w-[131px] h-6">{`The Hill `}</div>
              </div>
              <div className="absolute top-[223px] left-[calc(50%_-_79px)] w-[131px] h-11">
                <div className="absolute top-[24px] left-[calc(50%_-_65.5px)] font-medium">
                  Transportation
                </div>
                <div className="absolute top-[0px] left-[calc(50%_-_65.5px)] text-sm font-semibold text-darkslategray-100 inline-block w-[131px] h-6">
                  RoadGee
                </div>
              </div>
              <div className="absolute top-[143px] left-[calc(50%_-_79px)] w-[131px] h-11">
                <div className="absolute top-[24px] left-[calc(50%_-_65.5px)] font-medium">{`Houses & Hotels`}</div>
                <div className="absolute top-[0px] left-[calc(50%_-_65.5px)] text-sm font-semibold text-darkslategray-100 inline-block w-[131px] h-6">
                  Agoda
                </div>
              </div>
              <div className="absolute top-[63px] left-[calc(50%_-_79px)] w-[131px] h-11">
                <div className="absolute top-[24px] left-[calc(50%_-_65.5px)] font-medium">
                  Web, UI/UX Design
                </div>
                <div className="absolute top-[0px] left-[calc(50%_-_65.5px)] text-sm font-semibold text-darkslategray-100 inline-block w-[131px] h-6">
                  Intertico
                </div>
              </div>
              <div className="absolute top-[0px] left-[calc(50%_-_79px)] w-[158px] h-[18px] text-xs">
                <div className="absolute top-[0px] left-[calc(50%_-_79px)] tracking-[0.03em] font-semibold flex items-center w-[158px] h-[18px]">
                  COMPANY
                </div>
              </div>
            </div>
            <div className="absolute top-[113px] right-[479px] w-[158px] h-[347px]">
              <div className="absolute top-[383px] right-[30px] w-[131px] h-11 hidden">
                <div className="absolute top-[24px] right-[102px] font-medium">
                  Paid
                </div>
                <div className="absolute top-[0px] right-[0px] text-sm font-semibold text-darkslategray-100 inline-block w-[131px] h-6">
                  $130
                </div>
              </div>
              <div className="absolute top-[303px] left-[calc(50%_-_79px)] w-[131px] h-11">
                <div className="absolute top-[24px] left-[calc(50%_-_65.5px)] font-medium">
                  Pending
                </div>
                <div className="absolute top-[0px] left-[calc(50%_-_65.5px)] text-sm font-semibold text-darkslategray-100 inline-block w-[131px] h-6">
                  $14,000
                </div>
              </div>
              <div className="absolute top-[223px] left-[calc(50%_-_79px)] w-[131px] h-11">
                <div className="absolute top-[24px] left-[calc(50%_-_65.5px)] font-medium">
                  Paid
                </div>
                <div className="absolute top-[0px] left-[calc(50%_-_65.5px)] text-sm font-semibold text-darkslategray-100 inline-block w-[131px] h-6">
                  $6,700
                </div>
              </div>
              <div className="absolute top-[143px] left-[calc(50%_-_79px)] w-[131px] h-11">
                <div className="absolute top-[24px] left-[calc(50%_-_65.5px)] font-medium">
                  Rejected
                </div>
                <div className="absolute top-[0px] left-[calc(50%_-_65.5px)] text-sm font-semibold text-darkslategray-100 inline-block w-[131px] h-6">
                  $1,600
                </div>
              </div>
              <div className="absolute top-[63px] left-[calc(50%_-_79px)] w-[131px] h-11">
                <div className="absolute top-[24px] left-[calc(50%_-_65.5px)] font-medium">
                  Paid
                </div>
                <div className="absolute top-[0px] left-[calc(50%_-_65.5px)] text-sm font-semibold text-darkslategray-100 inline-block w-[131px] h-6">
                  $520
                </div>
              </div>
              <div className="absolute top-[0px] left-[calc(50%_-_79px)] w-[158px] h-[18px] text-xs">
                <div className="absolute top-[0px] left-[calc(50%_-_79px)] tracking-[0.03em] font-semibold flex items-center w-[158px] h-[18px]">
                  COMISSION
                </div>
              </div>
            </div>
            <div className="absolute top-[113px] right-[654px] w-[158px] h-[347px]">
              <div className="absolute top-[383px] right-[30px] w-[131px] h-11 hidden">
                <div className="absolute top-[24px] right-[102px] font-medium">
                  Paid
                </div>
                <div className="absolute top-[0px] right-[0px] text-sm font-semibold text-darkslategray-100 inline-block w-[131px] h-6">
                  $1,900
                </div>
              </div>
              <div className="absolute top-[303px] left-[calc(50%_-_79px)] w-[131px] h-11">
                <div className="absolute top-[24px] left-[calc(50%_-_65.5px)] font-medium">
                  Paid
                </div>
                <div className="absolute top-[0px] left-[calc(50%_-_65.5px)] text-sm font-semibold text-darkslategray-100 inline-block w-[131px] h-6">
                  $2,600,000
                </div>
              </div>
              <div className="absolute top-[223px] left-[calc(50%_-_79px)] w-[131px] h-11">
                <div className="absolute top-[24px] left-[calc(50%_-_65.5px)] font-medium">
                  Paid
                </div>
                <div className="absolute top-[0px] left-[calc(50%_-_65.5px)] text-sm font-semibold text-darkslategray-100 inline-block w-[131px] h-6">
                  $34,000,000
                </div>
              </div>
              <div className="absolute top-[143px] left-[calc(50%_-_79px)] w-[131px] h-11">
                <div className="absolute top-[24px] left-[calc(50%_-_65.5px)] font-medium">
                  Pending
                </div>
                <div className="absolute top-[0px] left-[calc(50%_-_65.5px)] text-sm font-semibold text-darkslategray-100 inline-block w-[131px] h-6">
                  $23,000,000
                </div>
              </div>
              <div className="absolute top-[63px] left-[calc(50%_-_79px)] w-[131px] h-11">
                <div className="absolute top-[24px] left-[calc(50%_-_65.5px)] font-medium">
                  In Proccess
                </div>
                <div className="absolute top-[0px] left-[calc(50%_-_65.5px)] text-sm font-semibold text-darkslategray-100 inline-block w-[131px] h-6">
                  $8,000,000
                </div>
              </div>
              <div className="absolute top-[0px] left-[calc(50%_-_79px)] w-[158px] h-[18px] text-xs">
                <div className="absolute top-[0px] left-[calc(50%_-_79px)] tracking-[0.03em] font-semibold flex items-center w-[158px] h-[18px]">
                  EARNINGS
                </div>
              </div>
            </div>
            <div className="absolute top-[113px] left-[30px] w-[282px] h-[350px]">
              <div className="absolute top-[380px] left-[1px] w-[281px] h-[50px] hidden">
                <div className="absolute top-[27px] left-[64px] font-medium">
                  HTML, AngularJS, Ruby
                </div>
                <div className="absolute top-[3px] left-[64px] text-sm font-semibold text-darkslategray-100 inline-block w-[217px] h-6">
                  KTR Mobile Application
                </div>
                <div className="absolute top-[0px] left-[0px] rounded-md w-[50px] h-[50px] overflow-hidden">
                  <img
                    className="absolute top-[0px] left-[-15px] w-[75px] h-[50px] object-cover"
                    alt=""
                  />
                </div>
              </div>
              <div className="absolute top-[300px] left-[1px] w-[281px] h-[50px]">
                <div className="absolute top-[27px] left-[64px] font-medium">
                  Python, PostgreSQL, ReactJS
                </div>
                <div className="absolute top-[3px] left-[64px] text-sm font-semibold text-darkslategray-100 inline-block w-[217px] h-6">
                  Natali Trump
                </div>
                <img
                  className="absolute top-[0px] left-[0px] w-[50px] h-[50px] object-cover"
                  alt=""
                />
              </div>
              <div className="absolute top-[215px] left-[1px] w-[281px] h-[52px]">
                <div className="absolute top-[32px] left-[64px] font-medium">
                  PHP, Laravel, VueJS
                </div>
                <div className="absolute top-[8px] left-[64px] text-sm font-semibold text-darkslategray-100 inline-block w-[217px] h-6">
                  Lebron Wayde
                </div>
                <div className="absolute top-[0px] left-[0px] rounded-md bg-whitesmoke-100 w-[50px] h-[50px]" />
                <img
                  className="absolute top-[10px] left-[5px] w-10 h-10 overflow-hidden object-cover"
                  alt=""
                />
              </div>
              <div className="absolute top-[140px] left-[0px] w-[282px] h-[50px]">
                <div className="absolute top-[27px] left-[65px] font-medium">
                  C#, ASP.NET, MS SQL
                </div>
                <div className="absolute top-[3px] left-[65px] text-sm font-semibold text-darkslategray-100 inline-block w-[217px] h-6">
                  Jessie Clarcson
                </div>
                <img
                  className="absolute top-[0px] left-[0px] w-[50px] h-[50px] object-cover"
                  alt=""
                />
              </div>
              <div className="absolute top-[60px] left-[0px] w-[282px] h-[50px]">
                <div className="absolute top-[27px] left-[65px] font-medium">
                  HTML, JS, ReactJS
                </div>
                <div className="absolute top-[3px] left-[65px] text-sm font-semibold text-darkslategray-100 inline-block w-[217px] h-6">
                  Brad Simmons
                </div>
                <img
                  className="absolute top-[0px] left-[0px] w-[50px] h-[50px] object-cover"
                  alt=""
                />
              </div>
              <div className="absolute top-[0px] left-[20px] w-[158px] h-[18px] text-xs text-darkslategray-100">
                <div className="absolute top-[0px] left-[0px] tracking-[0.03em] font-semibold flex items-center w-[158px] h-[18px]">
                  PRODUCTS
                </div>
              </div>
            </div>
            <div className="absolute top-[26px] right-[30px] w-[1116px] h-[50px] text-xs text-white">
              <div className="absolute top-[8px] right-[0px] w-20 h-[34px]">
                <div className="absolute top-[0px] right-[0px] rounded-md bg-crimson-200 w-20 h-[34px]" />
                <div className="absolute top-[8px] right-[19px] font-semibold">
                  Create
                </div>
              </div>
              <div className="absolute top-[8px] right-[90px] w-[108px] h-[34px]">
                <div className="absolute top-[0px] right-[0px] rounded-md bg-dodgerblue-200 w-[108px] h-[34px]" />
                <div className="absolute top-[8px] right-[19px] font-semibold">
                  New Report
                </div>
              </div>
              <div className="absolute top-[0px] left-[0px] text-lg leading-[21px] font-medium text-gray-100 inline-block w-[115px] h-[22px]">
                New Arrivals
              </div>
              <div className="absolute top-[29px] left-[0px] leading-[21px] font-medium text-silver-100">
                More than 400+ new members
              </div>
            </div>
          </div>
          <div className="absolute top-[530px] left-[402px] rounded-xl bg-white w-[773px] h-[423px] overflow-hidden">
            <div className="absolute top-[109px] right-[30px] w-[116px] h-[352px]">
              <div className="absolute top-[320px] right-[0px] w-[116px] h-8">
                <img
                  className="absolute top-[0px] right-[0px] w-8 h-8 object-cover"
                  alt=""
                />
                <img
                  className="absolute top-[0px] right-[42px] w-8 h-8 object-cover"
                  alt=""
                />
                <img
                  className="absolute top-[0px] right-[84px] w-8 h-8 object-cover"
                  alt=""
                />
              </div>
              <div className="absolute top-[240px] right-[0px] w-[116px] h-8">
                <img
                  className="absolute top-[0px] right-[0px] w-8 h-8 object-cover"
                  alt=""
                />
                <img
                  className="absolute top-[0px] right-[42px] w-8 h-8 object-cover"
                  alt=""
                />
                <img
                  className="absolute top-[0px] right-[84px] w-8 h-8 object-cover"
                  alt=""
                />
              </div>
              <div className="absolute top-[160px] right-[0px] w-[116px] h-8">
                <img
                  className="absolute top-[0px] right-[0px] w-8 h-8 object-cover"
                  alt=""
                />
                <img
                  className="absolute top-[0px] right-[42px] w-8 h-8 object-cover"
                  alt=""
                />
                <img
                  className="absolute top-[0px] right-[84px] w-8 h-8 object-cover"
                  alt=""
                />
              </div>
              <div className="absolute top-[80px] right-[0px] w-[116px] h-8">
                <img
                  className="absolute top-[0px] right-[0px] w-8 h-8 object-cover"
                  alt=""
                />
                <img
                  className="absolute top-[0px] right-[42px] w-8 h-8 object-cover"
                  alt=""
                />
                <img
                  className="absolute top-[0px] right-[84px] w-8 h-8 object-cover"
                  alt=""
                />
              </div>
              <div className="absolute top-[0px] right-[0px] w-[116px] h-8">
                <img
                  className="absolute top-[0px] right-[0px] w-8 h-8 object-cover"
                  alt=""
                />
                <img
                  className="absolute top-[0px] right-[42px] w-8 h-8 object-cover"
                  alt=""
                />
                <img
                  className="absolute top-[0px] right-[84px] w-8 h-8 object-cover"
                  alt=""
                />
              </div>
            </div>
            <div className="absolute top-[112px] right-[204px] w-[81px] h-[346px] text-2xs text-orange">
              <div className="absolute top-[320px] right-[0px] w-[81px] h-[26px]">
                <div className="absolute top-[0px] right-[0px] rounded-md bg-papayawhip w-[81px] h-[26px]" />
                <div className="absolute top-[5px] right-[7px] font-medium inline-block w-16 h-3.5">
                  In Progress
                </div>
              </div>
              <div className="absolute top-[240px] right-[0px] w-[67px] h-[26px] text-crimson-200">
                <div className="absolute top-[0px] right-[0px] rounded-md bg-mistyrose-200 w-[67px] h-[26px]" />
                <div className="absolute top-[5px] right-[3px] font-medium inline-block w-[55px] h-3.5">
                  Rejected
                </div>
              </div>
              <div className="absolute top-[160px] right-[0px] w-[65px] h-[26px] text-mediumturquoise">
                <div className="absolute top-[0px] right-[0px] rounded-md bg-lightcyan-200 w-[65px] h-[26px]" />
                <div className="absolute top-[5px] right-[1px] font-medium inline-block w-[55px] h-3.5">
                  Success
                </div>
              </div>
              <div className="absolute top-[80px] right-[0px] w-20 h-[26px]">
                <div className="absolute top-[0px] right-[0px] rounded-md bg-papayawhip w-20 h-[26px]" />
                <div className="absolute top-[5px] right-[7px] font-medium inline-block w-16 h-3.5">
                  In Progress
                </div>
              </div>
              <div className="absolute top-[0px] right-[0px] w-[74px] h-[26px] text-blueviolet-200">
                <div className="absolute top-[0px] right-[0px] rounded-md bg-lavender w-[74px] h-[26px]" />
                <div className="absolute top-[5px] right-[9px] font-medium inline-block w-[55px] h-3.5">
                  Approved
                </div>
              </div>
            </div>
            <div className="absolute top-[115px] right-[374px] w-[111px] h-[340px] hidden text-right">
              <div className="absolute top-[320px] right-[0px] font-medium">{`ReactJS, Ruby `}</div>
              <div className="absolute top-[240px] right-[0px] font-medium">
                AngularJS, C#
              </div>
              <div className="absolute top-[160px] right-[0px] font-medium">
                Laravel, Metronic
              </div>
              <div className="absolute top-[80px] right-[0px] font-medium">
                Python, MySQL
              </div>
              <div className="absolute top-[0px] right-[0px] font-medium">
                ReactJs, HTML
              </div>
            </div>
            <div className="absolute top-[114px] right-[344px] w-[131px] h-[354px] text-right">
              <div className="absolute top-[310px] right-[0px] w-[131px] h-11">
                <div className="absolute top-[24px] right-[0px] font-medium">
                  Paid
                </div>
                <div className="absolute top-[0px] right-[0px] text-sm font-semibold text-darkslategray-100 inline-block w-[131px] h-6">
                  $45,200,000
                </div>
              </div>
              <div className="absolute top-[230px] right-[0px] w-[131px] h-11">
                <div className="absolute top-[24px] right-[0px] font-medium">
                  Paid
                </div>
                <div className="absolute top-[0px] right-[0px] text-sm font-semibold text-darkslategray-100 inline-block w-[131px] h-6">
                  $57,000
                </div>
              </div>
              <div className="absolute top-[150px] right-[0px] w-[131px] h-11">
                <div className="absolute top-[24px] right-[0px] font-medium">
                  Paid
                </div>
                <div className="absolute top-[0px] right-[0px] text-sm font-semibold text-darkslategray-100 inline-block w-[131px] h-6">
                  $560,000
                </div>
              </div>
              <div className="absolute top-[70px] right-[0px] w-[131px] h-11">
                <div className="absolute top-[24px] right-[0px] font-medium">
                  Paid
                </div>
                <div className="absolute top-[0px] right-[0px] text-sm font-semibold text-darkslategray-100 inline-block w-[131px] h-6">
                  $4,600,000
                </div>
              </div>
              <div className="absolute top-[0px] right-[0px] w-[131px] h-11">
                <div className="absolute top-[24px] right-[0px] font-medium">
                  Paid
                </div>
                <div className="absolute top-[0px] right-[0px] text-sm font-semibold text-darkslategray-100 inline-block w-[131px] h-6">
                  $2,000,000
                </div>
              </div>
            </div>
            <div className="absolute top-[100px] left-[30px] w-[435px] h-[370px] text-darkslategray-100">
              <div className="absolute top-[320px] left-[0px] w-[282px] h-[50px]">
                <div className="absolute top-[28px] left-[65px]">
                  <span className="font-semibold">FTP:</span>
                  <span className="font-medium text-silver-100">
                    {" "}
                    bprow@bnc.cc
                  </span>
                </div>
                <div className="absolute top-[4px] left-[65px] text-sm font-semibold inline-block w-[217px] h-6">
                  KTR Mobile Application
                </div>
                <div className="absolute top-[0px] left-[0px] rounded-md bg-whitesmoke-100 w-[50px] h-[50px]" />
                <img
                  className="absolute top-[11px] left-[11px] w-[29px] h-[29px] overflow-hidden object-cover"
                  alt=""
                />
              </div>
              <div className="absolute top-[240px] left-[0px] w-[386px] h-[50px]">
                <div className="absolute top-[28px] left-[65px]">
                  <span className="font-semibold">FTP:</span>
                  <span className="font-medium text-silver-100">
                    {" "}
                    bprow@bnc.cc
                  </span>
                </div>
                <div className="absolute top-[4px] left-[65px] text-sm font-semibold inline-block w-[321px] h-6">
                  HR Management
                </div>
                <div className="absolute top-[0px] left-[0px] rounded-md bg-whitesmoke-100 w-[50px] h-[50px]" />
                <img
                  className="absolute top-[11px] left-[11px] w-[29px] h-[29px] overflow-hidden object-cover"
                  alt=""
                />
              </div>
              <div className="absolute top-[160px] left-[0px] w-[435px] h-[50px]">
                <div className="absolute top-[28px] left-[65px]">
                  <span className="font-semibold">FTP:</span>
                  <span className="font-medium text-silver-100">
                    {" "}
                    bprow@bnc.cc
                  </span>
                </div>
                <div className="absolute top-[4px] left-[65px] text-sm font-semibold inline-block w-[370px] h-6">
                  Cisco Management
                </div>
                <div className="absolute top-[0px] left-[0px] rounded-md bg-whitesmoke-100 w-[50px] h-[50px]" />
                <img
                  className="absolute top-[11px] left-[11px] w-[29px] h-[29px] overflow-hidden object-cover"
                  alt=""
                />
              </div>
              <div className="absolute top-[80px] left-[0px] w-[386px] h-[50px]">
                <div className="absolute top-[28px] left-[65px]">
                  <span className="font-semibold">FTP:</span>
                  <span className="font-medium text-silver-100">
                    {" "}
                    bprow@bnc.cc
                  </span>
                </div>
                <div className="absolute top-[4px] left-[65px] text-sm font-semibold inline-block w-[321px] h-6">
                  Telegram Application
                </div>
                <div className="absolute top-[0px] left-[0px] rounded-md bg-whitesmoke-100 w-[50px] h-[50px]" />
                <img
                  className="absolute top-[11px] left-[11px] w-7 h-7 overflow-hidden object-cover"
                  alt=""
                />
              </div>
              <div className="absolute top-[0px] left-[0px] w-[354px] h-[50px]">
                <div className="absolute top-[28px] left-[65px]">
                  <span className="font-semibold">FTP:</span>
                  <span className="font-medium text-silver-100">
                    {" "}
                    bprow@bnc.cc
                  </span>
                </div>
                <div className="absolute top-[4px] left-[65px] text-sm font-semibold inline-block w-[289px] h-6">
                  Sant Outstanding
                </div>
                <div className="absolute top-[0px] left-[0px] rounded-md bg-whitesmoke-100 w-[50px] h-[50px]" />
                <img
                  className="absolute top-[11px] left-[11px] w-7 h-7 overflow-hidden object-cover"
                  alt=""
                />
              </div>
            </div>
            <div className="absolute top-[26px] right-[30px] w-[714px] h-[50px] text-xs">
              <div className="absolute top-[8px] right-[0px] w-[170px] h-[34px]">
                <div className="absolute top-[0px] right-[0px] rounded-md bg-darkslategray-100 w-[53px] h-[34px]" />
                <div className="absolute top-[8px] right-[15px] font-semibold text-white">
                  Day
                </div>
                <div className="absolute top-[8px] right-[67px] font-semibold">
                  Week
                </div>
                <div className="absolute top-[8px] right-[131px] font-semibold">
                  Month
                </div>
              </div>
              <div className="absolute top-[0px] left-[0px] text-lg leading-[21px] font-medium text-gray-100 inline-block w-[115px] h-[22px]">
                New Arrivals
              </div>
              <div className="absolute top-[29px] left-[0px] leading-[21px] font-medium">
                More than 400+ new members
              </div>
            </div>
          </div>
          <div className="absolute top-[530px] left-[0px] rounded-xl bg-white w-[372px] h-[423px] overflow-hidden text-xs">
            <div className="absolute top-[352px] left-[30px] w-52 h-[41px]">
              <div className="absolute top-[21px] left-[54px] font-medium">
                PHP, SQLite, Artisan CLIмм
              </div>
              <div className="absolute top-[0px] left-[54px] text-smi font-medium text-black">
                Briviba SaaS
              </div>
              <img
                className="absolute top-[1px] left-[0px] w-10 h-10 object-cover"
                alt=""
              />
            </div>
            <div className="absolute top-[282px] left-[30px] w-52 h-[41px]">
              <div className="absolute top-[21px] left-[54px] font-medium">
                PHP, SQLite, Artisan CLIмм
              </div>
              <div className="absolute top-[0px] left-[54px] text-smi font-medium text-black">
                Briviba SaaS
              </div>
              <img
                className="absolute top-[1px] left-[0px] w-10 h-10 object-cover"
                alt=""
              />
            </div>
            <div className="absolute top-[212px] left-[30px] w-52 h-[41px]">
              <div className="absolute top-[21px] left-[54px] font-medium">
                PHP, SQLite, Artisan CLIмм
              </div>
              <div className="absolute top-[0px] left-[54px] text-smi font-medium text-black">
                Briviba SaaS
              </div>
              <img
                className="absolute top-[1px] left-[0px] w-10 h-10 object-cover"
                alt=""
              />
            </div>
            <div className="absolute top-[142px] left-[30px] w-52 h-[41px]">
              <div className="absolute top-[21px] left-[54px] font-medium">
                PHP, SQLite, Artisan CLIмм
              </div>
              <div className="absolute top-[0px] left-[54px] text-smi font-medium text-black">
                Briviba SaaS
              </div>
              <img
                className="absolute top-[1px] left-[0px] w-10 h-10 object-cover"
                alt=""
              />
            </div>
            <div className="absolute top-[72px] left-[30px] w-52 h-[41px]">
              <div className="absolute top-[21px] left-[54px] font-medium">
                PHP, SQLite, Artisan CLIмм
              </div>
              <div className="absolute top-[0px] left-[54px] text-smi font-medium text-black">
                Briviba SaaS
              </div>
              <img
                className="absolute top-[1px] left-[0px] w-10 h-10 object-cover"
                alt=""
              />
            </div>
            <div className="absolute top-[23px] right-[31px] w-[312px] h-[26px] text-mid text-gray-100">
              <div className="absolute top-[11px] right-[0px] w-[17px] h-1.5">
                <div className="absolute top-[0px] right-[0px] rounded-sm bg-silver-100 w-1.5 h-1.5" />
                <div className="absolute top-[0px] right-[11px] rounded-sm bg-silver-200 w-1.5 h-1.5" />
              </div>
              <div className="absolute top-[0px] left-[0px] font-semibold">
                Sales Progress
              </div>
            </div>
          </div>
          <div className="absolute top-[265px] left-[804px] rounded-xl bg-white w-[371px] h-[235px] overflow-hidden text-right text-sm">
            <img
              className="absolute w-[calc(100%_+_17px)] right-[-7.5px] bottom-[-39.5px] left-[-9.5px] max-w-full overflow-hidden h-40 object-cover"
              alt=""
            />
            <div className="absolute top-[61px] right-[30px] font-medium">
              Sales Change
            </div>
            <div className="absolute top-[22px] right-[29px] text-5xl font-semibold text-darkslategray-100">
              +259
            </div>
            <img
              className="absolute top-[30px] left-[30px] w-[50px] h-[50px] object-cover"
              alt=""
            />
          </div>
          <div className="absolute top-[0px] left-[804px] rounded-xl bg-white w-[371px] h-[235px] overflow-hidden text-right text-sm">
            <img
              className="absolute w-[calc(100%_+_18px)] right-[-7px] bottom-[-45.5px] left-[-11px] max-w-full overflow-hidden h-[159.5px] object-cover"
              alt=""
            />
            <div className="absolute top-[61px] right-[30px] font-medium">
              Weekly Income
            </div>
            <div className="absolute top-[22px] right-[29px] text-5xl font-semibold text-darkslategray-100">
              750$
            </div>
            <img
              className="absolute top-[30px] left-[30px] w-[50px] h-[50px] object-cover"
              alt=""
            />
          </div>
          <div className="absolute top-[0px] left-[402px] rounded-xl bg-white w-[372px] h-[500px] overflow-hidden text-xs text-slategray-100">
            <div className="absolute w-[calc(100%_-_64px)] top-[382px] right-[34px] left-[30px] h-[78px]">
              <div className="absolute w-[calc(100%_-_72px)] top-[0px] left-[72px] leading-[20px] inline-block h-[78px]">
                Outlines keep you honest. Indulging in poorly driving and keep
                structure keep you honest and great person
              </div>
              <div className="absolute top-[21px] left-[53px] rounded-lg bg-whitesmoke-600 w-[3px] h-10 hidden" />
              <div className="absolute top-[3px] left-[48px] rounded-[50%] box-border w-[13px] h-[13px] border-[3px] border-solid border-blueviolet-200" />
              <div className="absolute top-[0px] left-[0px] text-sm font-semibold text-darkslategray-100 inline-block w-[49px] h-6">
                23:07
              </div>
            </div>
            <div className="absolute top-[334px] left-[30px] w-72 h-[46px] text-smi text-darkslategray-100">
              <div className="absolute top-[0px] left-[71px] font-semibold whitespace-pre-wrap inline-block w-[217px] h-6">
                <span>{`New order placed  `}</span>
                <span className="text-blueviolet-200"> #XF-2356</span>
              </div>
              <div className="absolute top-[22px] left-[53px] rounded-lg bg-whitesmoke-600 w-[3px] h-6" />
              <div className="absolute top-[4px] left-[48px] rounded-[50%] box-border w-[13px] h-[13px] border-[3px] border-solid border-tomato" />
              <div className="absolute top-[1px] left-[0px] text-sm font-semibold inline-block w-[49px] h-6">
                21:03
              </div>
            </div>
            <div className="absolute w-[calc(100%_-_64px)] top-[257px] right-[34px] left-[30px] h-[76px]">
              <div className="absolute w-[calc(100%_-_72px)] top-[0px] left-[72px] leading-[20px] inline-block h-[51px]">
                Outlines keep you honest. Indulging in poorly driving and keep
                structure keep you honest great
              </div>
              <div className="absolute top-[21px] left-[53px] rounded-lg bg-whitesmoke-600 w-[3px] h-[55px]" />
              <div className="absolute top-[3px] left-[48px] rounded-[50%] box-border w-[13px] h-[13px] border-[3px] border-solid border-dodgerblue-200" />
              <div className="absolute top-[0px] left-[0px] text-sm font-semibold text-darkslategray-100 inline-block w-[49px] h-6">
                16:50
              </div>
            </div>
            <div className="absolute top-[210px] left-[30px] w-[289px] h-[45px] text-smi text-darkslategray-100">
              <div className="absolute top-[0px] left-[72px] font-semibold inline-block w-[217px] h-6">
                <span>{`Make deposit `}</span>
                <span className="text-blueviolet-200">USD 700</span>
                <span> to ESL</span>
              </div>
              <div className="absolute top-[21px] left-[53px] rounded-lg bg-whitesmoke-600 w-[3px] h-6" />
              <div className="absolute top-[3px] left-[48px] rounded-[50%] box-border w-[13px] h-[13px] border-[3px] border-solid border-crimson-200" />
              <div className="absolute top-[0px] left-[0px] text-sm font-semibold inline-block w-[49px] h-6">
                14:37
              </div>
            </div>
            <div className="absolute top-[147px] left-[30px] w-[289px] h-[61px] text-smi text-darkslategray-100">
              <img
                className="absolute top-[0px] left-[286px] w-9 h-9 object-cover hidden"
                alt=""
              />
              <img
                className="absolute top-[0px] left-[245px] w-9 h-9 object-cover"
                alt=""
              />
              <img
                className="absolute top-[0px] left-[204px] w-9 h-9 object-cover"
                alt=""
              />
              <div className="absolute top-[8px] left-[72px] font-semibold inline-block w-[217px] h-6">
                AEOL meeting with
              </div>
              <div className="absolute top-[29px] left-[53px] rounded-lg bg-whitesmoke-600 w-[3px] h-8" />
              <div className="absolute top-[11px] left-[48px] rounded-[50%] box-border w-[13px] h-[13px] border-[3px] border-solid border-mediumturquoise" />
              <div className="absolute top-[8px] left-[0px] text-sm font-semibold inline-block w-[49px] h-6">
                10:00
              </div>
            </div>
            <div className="absolute w-[calc(100%_-_64px)] top-[92px] right-[34px] left-[30px] h-[61px]">
              <div className="absolute w-[calc(100%_-_72px)] top-[0px] left-[72px] leading-[20px] inline-block h-[51px]">
                Outlines keep you honest. Indulging in poorly driving and keep
                structure
              </div>
              <div className="absolute top-[21px] left-[53px] rounded-lg bg-whitesmoke-600 w-[3px] h-10" />
              <div className="absolute top-[3px] left-[48px] rounded-[50%] box-border w-[13px] h-[13px] border-[3px] border-solid border-darkslateblue" />
              <div className="absolute top-[0px] left-[0px] text-sm font-semibold text-darkslategray-100 inline-block w-[49px] h-6">
                08:42
              </div>
            </div>
            <div className="absolute top-[23px] left-[30px] w-[302px] h-[55px]">
              <div className="absolute top-[27px] left-[0px] leading-[23px] font-medium inline-block w-[122px] h-7">
                890,344 Sales
              </div>
              <div className="absolute top-[0px] left-[0px] text-mid font-semibold text-darkslategray-100">
                Recent Activities
              </div>
              <div className="absolute top-[25px] right-[0px] w-[17px] h-1.5">
                <div className="absolute top-[0px] right-[0px] rounded-sm bg-silver-100 w-1.5 h-1.5" />
                <div className="absolute top-[0px] right-[11px] rounded-sm bg-silver-200 w-1.5 h-1.5" />
              </div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[0px] rounded-xl bg-white w-[372px] h-[500px] text-2xs text-white">
            <div className="absolute h-[99.79%] w-full top-[0.21%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-white" />
            <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-xl bg-crimson-200 h-[242px] overflow-hidden">
              <img
                className="absolute w-[calc(100%_+_13.5px)] top-[100.25px] right-[-6px] left-[-7.5px] max-w-full overflow-hidden h-[201.25px] object-cover"
                alt=""
              />
              <div className="absolute w-[calc(100%_+_13.5px)] top-[106.25px] right-[-6px] left-[-7.5px] h-[65.34px] flex items-center justify-center">
                <img
                  className="w-full max-w-full overflow-hidden h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.061)]"
                  alt=""
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
                />
              </div>
              <div className="absolute top-[27px] left-[29px] text-mid leading-[21px] font-semibold inline-block w-[119px] h-[22px]">
                Categories
              </div>
            </div>
            <div className="absolute top-[calc(50%_-_54px)] left-[calc(50%_-_155px)] w-[310px] h-[259px] text-sm text-cadetblue">
              <div className="absolute top-[calc(50%_+_9.5px)] left-[calc(50%_+_10px)] w-[145px] h-[120px]">
                <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl bg-lightcyan-200" />
                <div className="absolute top-[74px] left-[20px] leading-[21px] font-medium">
                  Bug Reports
                </div>
                <img
                  className="absolute top-[35px] left-[16px] w-[35px] h-[35.26px] object-cover"
                  alt=""
                />
              </div>
              <div className="absolute top-[calc(50%_+_9.5px)] left-[calc(50%_-_155px)] w-[145px] h-[120px] text-crimson-100">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-mistyrose-100" />
                <div className="absolute top-[74px] left-[20px] leading-[21px] font-medium opacity-[0.35]">
                  Item Orders
                </div>
                <img
                  className="absolute w-[23.45%] top-[calc(50%_-_27px)] right-[64.83%] left-[11.72%] max-w-full overflow-hidden h-[34px] object-cover"
                  alt=""
                />
              </div>
              <div className="absolute top-[calc(50%_-_129.5px)] left-[calc(50%_+_10px)] w-[145px] h-[120px] text-blueviolet-100">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-lavender" />
                <div className="absolute top-[72px] left-[20px] leading-[21px] font-medium opacity-[0.35]">
                  New Users
                </div>
                <img
                  className="absolute w-[24.14%] top-[calc(50%_-_28px)] right-[62.07%] left-[13.79%] max-w-full overflow-hidden h-[35px] object-cover"
                  alt=""
                />
              </div>
              <div className="absolute top-[calc(50%_-_129.5px)] left-[calc(50%_-_155px)] w-[145px] h-[120px] text-saddlebrown">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-papayawhip" />
                <div className="absolute w-[26.9%] top-[calc(50%_-_30px)] right-[62.76%] left-[10.34%] h-[39px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                  <div className="absolute h-[66.67%] w-[12.5%] top-[16.67%] right-[33.33%] bottom-[16.67%] left-[54.17%] rounded-sm bg-orange opacity-[0.3] mix-blend-normal" />
                  <div className="absolute h-[45.83%] w-[12.5%] top-[37.5%] right-[54.17%] bottom-[16.67%] left-[33.33%] rounded-sm bg-orange" />
                  <div className="absolute h-[37.5%] w-[12.5%] top-[45.83%] right-[12.5%] bottom-[16.67%] left-[75%] rounded-sm bg-orange" />
                  <div className="absolute h-[29.17%] w-[12.5%] top-[54.17%] right-[75%] bottom-[16.67%] left-[12.5%] rounded-sm bg-orange" />
                </div>
                <div className="absolute top-[72px] left-[20px] leading-[21px] font-medium opacity-[0.35]">
                  Weekly Sales
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[283px] left-[1454px] w-[46px] h-[170px] flex items-center justify-center">
          <img
            className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.87)]"
            alt=""
          />
        </div>
        <div className="absolute h-full w-[17.67%] top-[0%] right-[82.33%] bottom-[0%] left-[0%] bg-gray-200 overflow-hidden text-xs text-white">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-200" />
          <div className="absolute h-[2.93%] w-full top-[13.27%] right-[0%] bottom-[83.8%] left-[0%] bg-gray-300" />
          <div className="absolute h-[4.33%] w-full top-[0%] right-[0%] bottom-[95.67%] left-[0%] text-lg font-museo-sans">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-300" />
            <img
              className="absolute h-[36.92%] w-[9.06%] top-[30.77%] right-[9.43%] bottom-[32.31%] left-[81.51%] max-w-full overflow-hidden max-h-full object-cover hidden"
              alt=""
            />
            <div className="absolute h-[33.85%] w-[38.49%] top-[32.31%] left-[9.06%] tracking-[0.03em] inline-block">
              METRONIC
            </div>
          </div>
          <div className="absolute h-[8.67%] w-[9.36%] top-[7%] right-[82.71%] bottom-[84.33%] left-[7.92%]">
            <img
              className="absolute h-[19.23%] w-full top-[0%] right-[0%] bottom-[80.77%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
            />
            <img
              className="absolute h-[18.46%] w-[96.72%] top-[81.54%] right-[3.28%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
            />
          </div>
          <div className="absolute h-[31.8%] w-[30.94%] top-[11.33%] right-[60%] bottom-[56.87%] left-[9.06%] text-dimgray">
            <div className="absolute h-[3.77%] w-[62.2%] top-[0%] left-[0%] inline-block">
              CUSTOM
            </div>
            <div className="absolute h-[3.77%] w-[54.88%] top-[56.18%] left-[0%] inline-block">
              LAYOUT
            </div>
            <div className="absolute h-[3.77%] w-full top-[96.23%] left-[0%] inline-block">
              COMPONENTS
            </div>
          </div>
          <div className="absolute h-[40.8%] w-[27.92%] top-[17%] right-[52.45%] bottom-[42.2%] left-[19.62%] text-lightslategray-300">
            <div className="absolute h-[2.94%] w-[44.59%] top-[0%] left-[2.7%] inline-block">
              Users
            </div>
            <div className="absolute h-[2.94%] w-[75.68%] top-[6.54%] left-[1.35%] inline-block">
              Contacts
            </div>
            <div className="absolute h-[2.94%] w-[40.54%] top-[13.07%] left-[1.35%] inline-block">
              Chat
            </div>
            <div className="absolute h-[2.94%] w-6/12 top-[19.61%] left-[2.7%] inline-block">
              Pages
            </div>
            <div className="absolute h-[2.94%] w-[98.65%] top-[36.44%] left-[1.35%] inline-block">
              Subheaders
            </div>
            <div className="absolute h-[2.94%] w-[64.86%] top-[43.63%] left-[1.35%] inline-block">
              General
            </div>
            <div className="absolute h-[2.94%] w-[55.41%] top-[50.82%] left-[1.35%] inline-block">
              Builder
            </div>
            <div className="absolute h-[2.94%] w-[40.54%] top-[68.3%] left-[0%] inline-block">
              Base
            </div>
            <div className="absolute h-[2.94%] w-[64.86%] top-[75.49%] left-[1.35%] inline-block">
              Custom
            </div>
            <div className="absolute h-[2.94%] w-[75.68%] top-[82.68%] left-[2.7%] inline-block">
              Extended
            </div>
            <div className="absolute h-[2.94%] w-[43.24%] top-[89.87%] left-[8.11%] inline-block">
              Icons
            </div>
            <div className="absolute h-[2.94%] w-[60.81%] top-[97.06%] left-[8.11%] inline-block">
              Portlets
            </div>
          </div>
          <div className="absolute h-[8.4%] w-[30.57%] top-[7.13%] right-[47.55%] bottom-[84.47%] left-[21.89%] text-smi">
            <div className="absolute h-[15.87%] w-[90.12%] top-[0%] left-[0%] inline-block">
              Dashboard
            </div>
            <div className="absolute h-[15.87%] w-full top-[84.13%] left-[0%] inline-block">
              Applications
            </div>
          </div>
          <div className="absolute h-[5.33%] w-[1.89%] top-[17.6%] right-[83.4%] bottom-[77.07%] left-[14.72%]">
            <div className="absolute h-[1.04%] w-[116.6%] top-[-0.52%] right-[-8.3%] bottom-[99.48%] left-[-8.3%] box-border border-t-[1px] border-solid border-slategray-300" />
            <div className="absolute h-[1.04%] w-[116.6%] top-[49.48%] right-[-8.3%] bottom-[49.48%] left-[-8.3%] box-border border-t-[1px] border-solid border-slategray-300" />
            <div className="absolute h-[1.04%] w-[116.6%] top-[99.48%] right-[-8.3%] bottom-[-0.52%] left-[-8.3%] box-border border-t-[1px] border-solid border-slategray-300" />
          </div>
          <img
            className="absolute h-[33.13%] w-[9.06%] top-[24.8%] right-[83.4%] bottom-[42.07%] left-[7.55%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
          />
          <img
            className="absolute h-[42.76%] w-[3.52%] top-[14.64%] right-[10.19%] bottom-[42.6%] left-[86.29%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
          />
        </div>
        <div className="absolute h-[3.6%] w-[82.33%] top-[4.33%] right-[0%] bottom-[92.07%] left-[17.67%] bg-white overflow-hidden text-darkslategray-200">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white shadow-[0px_5px_40px_rgba(0,_0,_0,_0.05)]" />
          <div className="absolute h-[59.26%] w-[23.48%] top-[20.37%] right-[74.09%] bottom-[20.37%] left-[2.43%]">
            <div className="absolute h-[62.5%] w-[25.52%] top-[18.75%] left-[0%] font-medium inline-block">
              Dashboard
            </div>
            <div className="absolute h-[62.5%] w-[29.31%] top-[18.75%] left-[40.34%] font-medium text-lightslategray-200 inline-block">
              #XRS-45670
            </div>
            <div className="absolute h-full w-[27.24%] top-[0%] right-[0%] bottom-[0%] left-[72.76%] text-orange">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-papayawhip" />
              <div className="absolute h-[62.5%] w-[74.68%] top-[18.75%] left-[12.66%] font-medium inline-block">
                Add New
              </div>
            </div>
            <div className="absolute h-[71.35%] w-[0.29%] top-[14.33%] right-[64.34%] bottom-[14.33%] left-[35.37%] box-border border-r-[1px] border-solid border-whitesmoke-400" />
          </div>
          <div className="absolute h-[59.26%] w-[28.42%] top-[20.37%] right-[2.02%] bottom-[20.37%] left-[69.55%] text-lightslategray-200">
            <div className="absolute h-[87.5%] w-[16.81%] top-[6.25%] right-[83.19%] bottom-[6.25%] left-[0%]">
              <div className="absolute h-[71.43%] w-[69.49%] top-[14.29%] left-[15.25%] font-medium inline-block">
                Today
              </div>
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] text-dodgerblue-200">
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
            />
          </div>
        </div>
        <div className="absolute h-[4.33%] w-[82.33%] top-[0%] right-[0%] bottom-[95.67%] left-[17.67%] bg-white overflow-hidden text-2xs text-lightslategray-200">
          <div className="absolute top-[64px] left-[0px] bg-whitesmoke-300 w-[1235px] h-px" />
          <div className="absolute h-[73.85%] w-[28.99%] top-[21.54%] right-[2.43%] bottom-[4.62%] left-[68.58%]">
            <div className="absolute h-3/6 w-[66.2%] top-[10.42%] right-[33.8%] bottom-[39.58%] left-[0%]">
              <img
                className="absolute h-full w-[10.13%] top-[0%] right-[89.87%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
              />
              <img
                className="absolute h-full w-[10.13%] top-[0%] right-[71.31%] bottom-[0%] left-[18.57%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
              />
              <div className="absolute h-full w-[10.13%] top-[0%] right-[52.74%] bottom-[0%] left-[37.13%]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                <div className="absolute h-[66.67%] w-[12.5%] top-[16.67%] right-[33.33%] bottom-[16.67%] left-[54.17%] rounded-sm bg-dodgerblue-200 opacity-[0.3] mix-blend-normal" />
                <div className="absolute h-[45.83%] w-[12.5%] top-[37.5%] right-[54.17%] bottom-[16.67%] left-[33.33%] rounded-sm bg-dodgerblue-200" />
                <div className="absolute h-[37.5%] w-[12.5%] top-[45.83%] right-[12.5%] bottom-[16.67%] left-[75%] rounded-sm bg-dodgerblue-200" />
                <div className="absolute h-[29.17%] w-[12.5%] top-[54.17%] right-[75%] bottom-[16.67%] left-[12.5%] rounded-sm bg-dodgerblue-200" />
              </div>
              <img
                className="absolute h-full w-[10.13%] top-[0%] right-[34.18%] bottom-[0%] left-[55.7%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
              />
              <img
                className="absolute h-full w-[10.13%] top-[0%] right-[15.61%] bottom-[0%] left-[74.26%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
              />
              <img
                className="absolute h-[70.77%] w-[7.17%] top-[16.7%] right-[0%] bottom-[12.53%] left-[92.83%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
              />
            </div>
            <div className="absolute h-[83.33%] w-[13.69%] top-[16.67%] left-[71.79%] font-medium inline-block">
              <span>Hi,</span>
              <span className="text-smi text-slategray-200"> Sean</span>
            </div>
            <div className="absolute h-[72.92%] w-[10.06%] top-[0%] right-[0%] bottom-[27.08%] left-[89.94%] text-mid text-mediumseagreen-200">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-lightcyan-100" />
              <div className="absolute h-[74.29%] w-[28.57%] top-[11.43%] left-[36.11%] inline-block">
                S
              </div>
            </div>
          </div>
          <div className="absolute h-[55.38%] w-[17.73%] top-[20%] right-[74.49%] bottom-[24.62%] left-[7.77%] text-center text-smi text-royalblue-100">
            <div className="absolute h-full w-[31.51%] top-[0%] right-[68.49%] bottom-[0%] left-[0%] text-dodgerblue-200">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-whitesmoke-100" />
              <div className="absolute h-[55.56%] w-[59.42%] top-[22.22%] left-[20.29%] font-medium flex items-center justify-center">
                Pages
              </div>
            </div>
            <div className="absolute h-[55.56%] w-[26.03%] top-[22.22%] right-[32.88%] bottom-[22.22%] left-[41.1%]">
              <div className="absolute h-[180%] w-[121.05%] top-[-40%] right-[-10.53%] bottom-[-40%] left-[-10.53%] hidden">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-10xs bg-ghostwhite-100" />
                <div className="absolute h-[55.56%] w-[82.61%] top-[22.22%] left-[8.7%] font-medium flex items-center justify-center">
                  Features
                </div>
              </div>
              <div className="absolute h-full w-full top-[0%] left-[0%] font-medium text-slategray-200 flex items-center justify-center">
                Features
              </div>
            </div>
            <div className="absolute h-[55.56%] w-[15.53%] top-[22.22%] right-[0%] bottom-[22.22%] left-[84.47%]">
              <div className="absolute h-[180%] w-[202.94%] top-[-40%] right-[-52.94%] bottom-[-40%] left-[-50%] hidden">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-10xs bg-ghostwhite-100" />
                <div className="absolute h-[55.56%] w-[49.28%] top-[22.22%] left-[24.64%] font-medium flex items-center justify-center">
                  Apps
                </div>
              </div>
              <div className="absolute h-full w-full top-[0%] left-[0%] font-medium text-slategray-200 flex items-center justify-center">
                Apps
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute h-[2%] w-[2%] top-[1.13%] right-[81.33%] bottom-[96.87%] left-[16.67%] max-w-full overflow-hidden max-h-full object-cover hidden"
          alt=""
        />
        <img
          className="absolute h-[2%] w-[2%] top-[1.13%] right-[78.33%] bottom-[96.87%] left-[19.67%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
        />
      </div>
      <RecentStats />
    </div>
  );
};

export default Option1Basic;
