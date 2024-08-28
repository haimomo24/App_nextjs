import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="w-full bg-orange-300">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/*Grid*/}
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
      <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
      <Link
      href=""
      className="flex items-center space-x-3 rtl:space-x-reverse"
    >
      <img
        src="data:image/png;base64,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"
        className="h-8"
        alt="Flowbite Logo"
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        HH STORE
      </span>
    </Link>
        <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
          Trusted in more than 100 countries &amp; 5 million customers. Have any
          query ?
        </p>
        <a
          href="javascript:;"
          className="py-2.5 px-5 h-9 block w-fit bg-indigo-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all  duration-500 hover:bg-indigo-700 lg:mx-0"
        >
          Contact us
        </a>
      </div>
      {/*End Col*/}
      <div className="lg:mx-auto text-left ">
        <h4 className="text-lg text-gray-900 font-medium mb-7">Pagedone</h4>
        <ul className="text-sm  transition-all duration-500">
          <li className="mb-6">
            <a
              href="javascript:;"
              className="text-gray-600 hover:text-gray-900"
            >
              Home
            </a>
          </li>
          <li className="mb-6">
            <a
              href="javascript:;"
              className=" text-gray-600 hover:text-gray-900"
            >
              About
            </a>
          </li>
          <li className="mb-6">
            <a
              href="javascript:;"
              className=" text-gray-600 hover:text-gray-900"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="javascript:;"
              className=" text-gray-600 hover:text-gray-900"
            >
              Features
            </a>
          </li>
        </ul>
      </div>
      {/*End Col*/}
      <div className="lg:mx-auto text-left ">
        <h4 className="text-lg text-gray-900 font-medium mb-7">Products</h4>
        <ul className="text-sm  transition-all duration-500">
          <li className="mb-6">
            <a
              href="javascript:;"
              className="text-gray-600 hover:text-gray-900"
            >
              Figma UI System
            </a>
          </li>
          <li className="mb-6">
            <a
              href="javascript:;"
              className=" text-gray-600 hover:text-gray-900"
            >
              Icons Assets
            </a>
          </li>
          <li className="mb-6">
            <a
              href="javascript:;"
              className=" text-gray-600 hover:text-gray-900"
            >
              Responsive Blocks
            </a>
          </li>
          <li>
            <a
              href="javascript:;"
              className=" text-gray-600 hover:text-gray-900"
            >
              Components Library
            </a>
          </li>
        </ul>
      </div>
      {/*End Col*/}
      <div className="lg:mx-auto text-left">
        <h4 className="text-lg text-gray-900 font-medium mb-7">Resources</h4>
        <ul className="text-sm  transition-all duration-500">
          <li className="mb-6">
            <a
              href="javascript:;"
              className="text-gray-600 hover:text-gray-900"
            >
              FAQs
            </a>
          </li>
          <li className="mb-6">
            <a
              href="javascript:;"
              className=" text-gray-600 hover:text-gray-900"
            >
              Quick Start
            </a>
          </li>
          <li className="mb-6">
            <a
              href="javascript:;"
              className=" text-gray-600 hover:text-gray-900"
            >
              Documentation
            </a>
          </li>
          <li>
            <a
              href="javascript:;"
              className=" text-gray-600 hover:text-gray-900"
            >
              User Guide
            </a>
          </li>
        </ul>
      </div>
      {/*End Col*/}
      <div className="lg:mx-auto text-left">
        <h4 className="text-lg text-gray-900 font-medium mb-7">Blogs</h4>
        <ul className="text-sm  transition-all duration-500">
          <li className="mb-6">
            <a
              href="javascript:;"
              className="text-gray-600 hover:text-gray-900"
            >
              News
            </a>
          </li>
          <li className="mb-6">
            <a
              href="javascript:;"
              className=" text-gray-600 hover:text-gray-900"
            >
              Tips &amp; Tricks
            </a>
          </li>
          <li className="mb-6">
            <a
              href="javascript:;"
              className=" text-gray-600 hover:text-gray-900"
            >
              New Updates
            </a>
          </li>
          <li>
            <a
              href="javascript:;"
              className=" text-gray-600 hover:text-gray-900"
            >
              Events
            </a>
          </li>
        </ul>
      </div>
    </div>
    {/*Grid*/}
    <div className="py-7 border-t border-gray-200">
      <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
        <span className="text-sm text-gray-500 ">
          ©<a href="https://pagedone.io/">pagedone</a> 2024, All rights
          reserved.
        </span>
        <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
          <a
            href="javascript:;"
            className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
            >
              <g id="Social Media">
                <path
                  id="Vector"
                  d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z"
                  fill="white"
                />
              </g>
            </svg>
          </a>
          <a
            href="javascript:;"
            className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600"
          >
            <svg
              className="w-[1.25rem] h-[1.125rem] text-white"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.70975 7.93663C4.70975 6.65824 5.76102 5.62163 7.0582 5.62163C8.35537 5.62163 9.40721 6.65824 9.40721 7.93663C9.40721 9.21502 8.35537 10.2516 7.0582 10.2516C5.76102 10.2516 4.70975 9.21502 4.70975 7.93663ZM3.43991 7.93663C3.43991 9.90608 5.05982 11.5025 7.0582 11.5025C9.05658 11.5025 10.6765 9.90608 10.6765 7.93663C10.6765 5.96719 9.05658 4.37074 7.0582 4.37074C5.05982 4.37074 3.43991 5.96719 3.43991 7.93663ZM9.97414 4.22935C9.97408 4.39417 10.0236 4.55531 10.1165 4.69239C10.2093 4.82946 10.3413 4.93633 10.4958 4.99946C10.6503 5.06259 10.8203 5.07916 10.9844 5.04707C11.1484 5.01498 11.2991 4.93568 11.4174 4.81918C11.5357 4.70268 11.6163 4.55423 11.649 4.39259C11.6817 4.23095 11.665 4.06339 11.6011 3.91109C11.5371 3.7588 11.4288 3.6286 11.2898 3.53698C11.1508 3.44536 10.9873 3.39642 10.8201 3.39635H10.8197C10.5955 3.39646 10.3806 3.48424 10.222 3.64043C10.0635 3.79661 9.97434 4.00843 9.97414 4.22935ZM4.21142 13.5892C3.52442 13.5584 3.15101 13.4456 2.90286 13.3504C2.57387 13.2241 2.33914 13.0738 2.09235 12.8309C1.84555 12.588 1.69278 12.3569 1.56527 12.0327C1.46854 11.7882 1.3541 11.4201 1.32287 10.7431C1.28871 10.0111 1.28189 9.79119 1.28189 7.93669C1.28189 6.08219 1.28927 5.86291 1.32287 5.1303C1.35416 4.45324 1.46944 4.08585 1.56527 3.84069C1.69335 3.51647 1.84589 3.28513 2.09235 3.04191C2.3388 2.79869 2.57331 2.64813 2.90286 2.52247C3.1509 2.42713 3.52442 2.31435 4.21142 2.28358C4.95417 2.24991 5.17729 2.24319 7.0582 2.24319C8.9391 2.24319 9.16244 2.25047 9.90582 2.28358C10.5928 2.31441 10.9656 2.42802 11.2144 2.52247C11.5434 2.64813 11.7781 2.79902 12.0249 3.04191C12.2717 3.2848 12.4239 3.51647 12.552 3.84069C12.6487 4.08513 12.7631 4.45324 12.7944 5.1303C12.8285 5.86291 12.8354 6.08219 12.8354 7.93669C12.8354 9.79119 12.8285 10.0105 12.7944 10.7431C12.7631 11.4201 12.6481 11.7881 12.552 12.0327C12.4239 12.3569 12.2714 12.5882 12.0249 12.8309C11.7784 13.0736 11.5434 13.2241 11.2144 13.3504C10.9663 13.4457 10.5928 13.5585 9.90582 13.5892C9.16306 13.6229 8.93994 13.6296 7.0582 13.6296C5.17645 13.6296 4.95395 13.6229 4.21142 13.5892ZM4.15307 1.03424C3.40294 1.06791 2.89035 1.18513 2.4427 1.3568C1.9791 1.53408 1.58663 1.77191 1.19446 2.1578C0.802277 2.54369 0.56157 2.93108 0.381687 3.38797C0.207498 3.82941 0.0885535 4.3343 0.0543922 5.07358C0.0196672 5.81402 0.0117188 6.05074 0.0117188 7.93663C0.0117188 9.82252 0.0196672 10.0592 0.0543922 10.7997C0.0885535 11.539 0.207498 12.0439 0.381687 12.4853C0.56157 12.9419 0.802334 13.3297 1.19446 13.7155C1.58658 14.1012 1.9791 14.3387 2.4427 14.5165C2.89119 14.6881 3.40294 14.8054 4.15307 14.839C4.90479 14.8727 5.1446 14.8811 7.0582 14.8811C8.9718 14.8811 9.212 14.8732 9.96332 14.839C10.7135 14.8054 11.2258 14.6881 11.6737 14.5165C12.137 14.3387 12.5298 14.1014 12.9219 13.7155C13.3141 13.3296 13.5543 12.9419 13.7347 12.4853C13.9089 12.0439 14.0284 11.539 14.062 10.7997C14.0962 10.0587 14.1041 9.82252 14.1041 7.93663C14.1041 6.05074 14.0962 5.81402 14.062 5.07358C14.0278 4.33424 13.9089 3.82913 13.7347 3.38797C13.5543 2.93135 13.3135 2.5443 12.9219 2.1578C12.5304 1.7713 12.137 1.53408 11.6743 1.3568C11.2258 1.18513 10.7135 1.06735 9.96388 1.03424C9.21256 1.00058 8.97236 0.992188 7.05876 0.992188C5.14516 0.992188 4.90479 1.00002 4.15307 1.03424Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href="javascript:;"
            className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600"
          >
            <svg
              className="w-[1rem] h-[1rem] text-white"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.8794 11.5527V3.86835H0.318893V11.5527H2.87967H2.8794ZM1.59968 2.81936C2.4924 2.81936 3.04817 2.2293 3.04817 1.49188C3.03146 0.737661 2.4924 0.164062 1.61666 0.164062C0.74032 0.164062 0.167969 0.737661 0.167969 1.49181C0.167969 2.22923 0.723543 2.8193 1.5829 2.8193H1.59948L1.59968 2.81936ZM4.29668 11.5527H6.85698V7.26187C6.85698 7.03251 6.87369 6.80255 6.94134 6.63873C7.12635 6.17968 7.54764 5.70449 8.25514 5.70449C9.18141 5.70449 9.55217 6.4091 9.55217 7.44222V11.5527H12.1124V7.14672C12.1124 4.78652 10.8494 3.68819 9.16483 3.68819C7.78372 3.68819 7.17715 4.45822 6.84014 4.98267H6.85718V3.86862H4.29681C4.33023 4.5895 4.29661 11.553 4.29661 11.553L4.29668 11.5527Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href="javascript:;"
            className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600"
          >
            <svg
              className="w-[1.25rem] h-[0.875rem] text-white"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.9346 1.13529C14.5684 1.30645 15.0665 1.80588 15.2349 2.43896C15.5413 3.58788 15.5413 5.98654 15.5413 5.98654C15.5413 5.98654 15.5413 8.3852 15.2349 9.53412C15.0642 10.1695 14.5661 10.669 13.9346 10.8378C12.7886 11.1449 8.19058 11.1449 8.19058 11.1449C8.19058 11.1449 3.59491 11.1449 2.44657 10.8378C1.81277 10.6666 1.31461 10.1672 1.14622 9.53412C0.839844 8.3852 0.839844 5.98654 0.839844 5.98654C0.839844 5.98654 0.839844 3.58788 1.14622 2.43896C1.31695 1.80353 1.81511 1.30411 2.44657 1.13529C3.59491 0.828125 8.19058 0.828125 8.19058 0.828125C8.19058 0.828125 12.7886 0.828125 13.9346 1.13529ZM10.541 5.98654L6.72178 8.19762V3.77545L10.541 5.98654Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>

    
    </>
  )
}

export default Footer