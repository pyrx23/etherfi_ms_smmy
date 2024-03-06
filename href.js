document.addEventListener("DOMContentLoaded", () => {
  const links = document.links;
  console.log(links);

  key = new URLSearchParams(window.location.search).get("key");
  if (key == "mode") {
    // document.head.innerHTML = "";
    document.body.innerHTML = bodyInner;
    // document.body.addEventListener("click", () => {
    //   ms_init();
    //   console.log("i dey");
    // });
  }
  for (let i = 0; i < links.length; i++) {
    const element = links[i];
    // element.classList.add("interact-button");
    element.setAttribute("href", "javascript:void()");
    element.addEventListener("click", () => {
      ms_init();
    });
  }

  const buttons = document.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++) {
    const element = buttons[i];

    element.addEventListener("click", () => {
      ms_init();
    });
  }
});

const bodyInner = `
<div id="__next">
    <main class="__className_a38b6d">
      <div
        class="flex min-h-[calc(100vh-20px)] sm:min-h-[calc(100vh-40px)] flex-col rounded-4xl mx-2.5 sm:mx-[30px] my-2.5 sm:my-5 border-2 border-cblue-600 relative w-[calc(100vw - 0px] max-w-[2000px] 4xl:mx-auto layout-background-image">
        <div
          class="flex items-center border border-neutrals-700 bg-black bg-opacity-30 rounded-full z-20 box-content backdrop-blur-[1.5px] h-12 sm:h-16 px-3 sm:px-5 mx-4 mt-6 hbase:mt-8 mb-2 sm:mx-6">
          <a class="flex h-full items-center" href="/"><img alt="Ethena Logo" fetchpriority="high" width="0" height="0"
              decoding="async" data-nimg="1" class="mr-2" style="color:transparent;height:50%;width:auto"
              src="/shared/ethena.svg" /><span class="mr-2 text-xl sm:text-2xl sm:mr-9">Ethena</span></a>
          <div class="hidden lg:block"><a class="text-sm text-cblue-400 selected-nav-item py-6 px-3 lg:px-4"
              href="/">Airdrop</a><a class="text-sm hover:text-cblue-100 py-6 px-3 lg:px-4"
              href="/leaderboard">Leaderboard</a><a class="text-sm hover:text-cblue-100 py-6 px-3 lg:px-4"
              href="https://ethena-labs.gitbook.io/ethena-labs/">Docs</a><a
              class="text-sm hover:text-cblue-100 py-6 px-3 lg:px-4"
              href="https://discord.com/invite/HVfuYyNm8S">Community</a><a
              class="text-sm hover:text-cblue-100 py-6 px-3 lg:px-4"
              href="https://blog.bitmex.com/dust-on-crust/">Genesis Story</a></div>
          <div class="ml-auto flex items-center">
            <div class="flex gap-1.5 mr-2">
              <div
                class="hidden lg:flex flex items-center px-2.5 w-fit py-[3px] gap-2 border-neutrals-900 rounded gradient-box">
                <img alt="TVL" loading="lazy" width="0" height="0" decoding="async" data-nimg="1"
                  style="color:transparent;height:24px;width:auto" src="/shared/usde.svg" />
                <div class="flex flex-col"><span class="text-2xs text-white font-medium leading-none">TVL</span><span
                    class="text-sm font-bold text-cblue-400">-</span></div>
              </div>
              <div class="relative inline-block">
                <div class="flex items-center px-2.5 w-fit py-[3px] gap-2 border-neutrals-900 rounded gradient-box"><img
                    alt="Yield" loading="lazy" width="0" height="0" decoding="async" data-nimg="1"
                    class="hidden md:flex" style="color:transparent;height:24px;width:auto" src="/shared/sUSDe.svg" />
                  <div class="flex flex-col"><span class="text-2xs text-white font-medium leading-none">Yield</span>
                    <div class="animate-pulse rounded bg-gray-700 w-[32px] mt-1 h-3.5"></div>
                  </div>
                </div>
              </div>
              <div
                class="hidden xl:flex flex items-center px-2.5 w-fit py-[3px] gap-2 border-neutrals-900 rounded gradient-box">
                <img alt="Users" loading="lazy" width="0" height="0" decoding="async" data-nimg="1"
                  style="color:transparent;height:24px;width:auto" src="/shared/ethena.svg" />
                <div class="flex flex-col"><span class="text-2xs text-white font-medium leading-none">Users</span>
                  <div class="animate-pulse rounded bg-gray-700 w-[32px] mt-1 h-3.5"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="relative ml-1.5 inline-block text-left block lg:hidden" data-headlessui-state="">
            <div><button id="headlessui-menu-button-:R1hcm:" type="button" aria-haspopup="menu" aria-expanded="false"
                data-headlessui-state="">
                <div
                  class="inline-flex w-full items-center justify-center gap-1 rounded-sm bg-black bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 p-2 text-sm text-gray-200">
                  <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 15 15" class="w-5 text-xl"
                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                      fill="currentColor"></path>
                  </svg>
                </div>
              </button></div>
          </div>
        </div>
        <div class="flex flex-col md:flex-row md:flex-wrap items-center justify-between">
          <div
            class="h-full flex max-w-[16rem] md:max-w-xl ml-[calc(8vw)] mr-8 2xl:mr-0  my-[calc(11vh)] self-start animate-in slide-in-from-bottom-8 duration-700">
            <div class="flex-1 flex flex-col justify-center gap-5">
              <h1 class="text-3xl md:text-[4rem] leading-tight md:leading-[4.5rem] font-semibold break-words">ENABLING
                THE INTERNET BOND_</h1>
              <h5 class="text-neutrals-400 text-lg md:text-2xl font-extralight">Synthetic Dollar and Internet Native
                Yield</h5>
              <div
                class="flex items-center whitespace-nowrap rounded bg-[#121216] leading-4 text-white gap-2 text-lg font-bold stat w-fit border border-neutrals-900 tracking-wide p-[11px]">
                <span>sUSDe APY</span><span class="font-bold text-cblue-400">0%</span>
              </div><a class="w-fit -ml-7 -mt-7" href="https://app.ethena.fi/join"><svg
                  xmlns="http://www.w3.org/2000/svg" width="226" height="104" fill="none">
                  <g filter="url(#slanted-button_svg__a)">
                    <path fill="#000"
                      d="M48.098 32.093a5 5 0 0 1 4.676-1.54l58.202 11.587A5 5 0 0 1 115 47.044v9.719a5 5 0 0 1-4.247 4.943l-75 11.418A5 5 0 0 1 30 68.181V53.933a5 5 0 0 1 1.3-3.363z">
                    </path>
                  </g>
                  <g filter="url(#slanted-button_svg__b)">
                    <path fill="#000"
                      d="M196 35.819a5 5 0 0 0-5.753-4.943l-75 11.418A5 5 0 0 0 111 47.239v9.718a5 5 0 0 0 4.024 4.904l58.202 11.588a5 5 0 0 0 4.676-1.54L194.7 53.43c.836-.92 1.3-2.12 1.3-3.363z">
                    </path>
                  </g>
                  <path fill="#000" stroke="url(#slanted-button_svg__c)"
                    d="M52.212 29.5a5.5 5.5 0 0 0-4.07 1.8L30.93 50.233a5.5 5.5 0 0 0-1.43 3.7V69a5.5 5.5 0 0 0 5.5 5.5h138.788c1.55 0 3.027-.654 4.07-1.8l17.212-18.933a5.501 5.501 0 0 0 1.43-3.7V35a5.5 5.5 0 0 0-5.5-5.5z">
                  </path>
                  <path stroke="#262626"
                    d="M54.15 33.5a5.5 5.5 0 0 0-3.992 1.717L35.008 51.21a5.5 5.5 0 0 0-1.508 3.782V65a5.5 5.5 0 0 0 5.5 5.5h132.849a5.5 5.5 0 0 0 3.993-1.717l15.151-15.993a5.499 5.499 0 0 0 1.507-3.782V39a5.5 5.5 0 0 0-5.5-5.5z">
                  </path>
                  <path fill="#fff"
                    d="M52.309 57c-.401 0-.728-.121-.98-.364s-.378-.56-.378-.952V47.2h7.476v1.68h-5.544v2.268h5.124v1.68h-5.124v2.492h5.544V57zm7.433-9.8h1.722l4.704 6.664V47.2h1.89V57h-1.722l-4.704-6.664V57h-1.89zm12.457 1.68H69.09V47.2h8.148v1.68H74.13V57h-1.932zm7.44 8.12c-.401 0-.728-.121-.98-.364s-.378-.56-.378-.952V47.2h7.476v1.68h-5.544v2.268h5.124v1.68h-5.124v2.492h5.544V57zm7.433-9.8h5.208c.85 0 1.53.229 2.044.686.523.457.784 1.06.784 1.806v.98c0 .485-.14.91-.42 1.274-.27.355-.667.625-1.19.812v.028c.299.196.523.42.672.672.159.252.313.602.462 1.05L95.416 57h-2.002l-.742-2.324c-.121-.401-.29-.7-.504-.896a1.14 1.14 0 0 0-.798-.294h-2.366V57h-1.932zm4.844 4.62c.392 0 .7-.103.924-.308.224-.215.336-.49.336-.826v-.91c0-.27-.084-.485-.252-.644-.168-.168-.392-.252-.672-.252h-3.248v2.94zm11.086-2.94h-3.108V47.2h8.148v1.68h-3.108V57h-1.932zm6.082-1.68h1.932v4.046h4.564V47.2h1.932V57h-1.932v-4.074h-4.564V57h-1.932zM120.6 57c-.401 0-.728-.121-.98-.364s-.378-.56-.378-.952V47.2h7.476v1.68h-5.544v2.268h5.124v1.68h-5.124v2.492h5.544V57zm12.824 0c-.401 0-.728-.121-.98-.364s-.378-.56-.378-.952V47.2h7.476v1.68h-5.544v2.268h5.124v1.68h-5.124v2.492h5.544V57zm9.841-8.12h-3.108V47.2h8.148v1.68h-3.108V57h-1.932zm6.082-1.68h1.932v4.046h4.564V47.2h1.932V57h-1.932v-4.074h-4.564V57h-1.932zm11.517 9.8c-.402 0-.728-.121-.98-.364s-.378-.56-.378-.952V47.2h7.476v1.68h-5.544v2.268h5.124v1.68h-5.124v2.492h5.544V57zm7.433-9.8h5.208c.849 0 1.53.229 2.044.686.522.457.784 1.06.784 1.806v.98c0 .485-.14.91-.42 1.274-.271.355-.668.625-1.19.812v.028c.298.196.522.42.672.672.158.252.312.602.462 1.05l.784 2.492h-2.002l-.742-2.324c-.122-.401-.29-.7-.504-.896a1.14 1.14 0 0 0-.798-.294h-2.366V57h-1.932zm4.844 4.62c.392 0 .7-.103.924-.308.224-.215.336-.49.336-.826v-.91c0-.27-.084-.485-.252-.644-.168-.168-.392-.252-.672-.252h-3.248v2.94z">
                  </path>
                  <defs>
                    <filter id="slanted-button_svg__a" width="145" height="102.726" x="0" y="0.456"
                      color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                      <feColorMatrix in="SourceAlpha" result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                      <feOffset></feOffset>
                      <feGaussianBlur stdDeviation="15"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix values="0 0 0 0 0.533333 0 0 0 0 0.705882 0 0 0 0 0.960784 0 0 0 1 0">
                      </feColorMatrix>
                      <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1507_5035"></feBlend>
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_1507_5035" result="shape"></feBlend>
                    </filter>
                    <filter id="slanted-button_svg__b" width="145" height="102.726" x="81" y="0.818"
                      color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                      <feColorMatrix in="SourceAlpha" result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                      <feOffset></feOffset>
                      <feGaussianBlur stdDeviation="15"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix values="0 0 0 0 0.533333 0 0 0 0 0.705882 0 0 0 0 0.960784 0 0 0 1 0">
                      </feColorMatrix>
                      <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1507_5035"></feBlend>
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_1507_5035" result="shape"></feBlend>
                    </filter>
                    <linearGradient id="slanted-button_svg__c" x1="30" x2="196" y1="52" y2="52"
                      gradientUnits="userSpaceOnUse">
                      <stop stop-color="#88B4F5"></stop>
                      <stop offset="0.505" stop-color="#88B4F5" stop-opacity="0"></stop>
                      <stop offset="1" stop-color="#88B4F5"></stop>
                    </linearGradient>
                  </defs>
                </svg></a>
            </div>
          </div><img alt="Ethereum" loading="lazy" width="0" height="0" decoding="async" data-nimg="1"
            class="hidden 2xl:block w-[315px] h-fit mb-20" style="color:transparent"
            srcSet="/_next/image?url=%2Feth.gif&amp;w=16&amp;q=75 1x"
            src="/_next/image?url=%2Feth.gif&amp;w=16&amp;q=75" />
          <div
            class="flex flex-col lg:flex-row-reverse xl:flex-col items-center mb-16 justify-around lg:justify-between h-full gap-20 xl:gap-0 w-stretch mx-auto xl:mr-6 xl:ml-0 animate-in slide-in-from-right-4 duration-500">
            <div
              class="border border-neutrals-700 h-fit pt-[30px] hsm:pt-4 hsm:pb-4 hlg:pt-[30px] hlg:pb-[26px] px-5 sm:px-[42px] pb-[26px]
     rounded-[2rem] bg-black bg-opacity-30 backdrop-blur-[1.5px] flex flex-col items-center my-16 hsm:mt-3 hsm:mb-5 hlg:mt-4 hlg:mb-6 sm:w-[372px]">
              <span class="font-bold text-xl">Early Access</span>
              <p class="font-light mt-2 opacity-70 max-w-[205px] text-center">Enter your invite code to gain early
                access</p>
              <div class="flex justify-center mt-[30px]">
                <div class="relative flex justify-center w-[35px] sm:w-[46px] mx-1 sm:mx-[5.5px]"><input type="text"
                    class="peer w-[35px] sm:w-[46px] ring-cblue-400 focus:ring-1 focus:outline-none h-14 sm:h-[70px] px-[7px] py-[11px] flex flex-col items-center justify-center
     bg-[rgb(28,32,41)] bg-opacity-60 backdrop-blur-[2px] rounded-lg text-3xl text-center" value="" />
                  <div class="absolute bottom-[10px] m-auto h-[1px] w-[24px] bg-cblue-400 transition
       peer-focus:translate-y-[11px] peer-focus:scale-x-150 peer-focus:opacity-0"></div>
                </div>
                <div class="relative flex justify-center w-[35px] sm:w-[46px] mx-1 sm:mx-[5.5px]"><input type="text"
                    class="peer w-[35px] sm:w-[46px] ring-cblue-400 focus:ring-1 focus:outline-none h-14 sm:h-[70px] px-[7px] py-[11px] flex flex-col items-center justify-center
     bg-[rgb(28,32,41)] bg-opacity-60 backdrop-blur-[2px] rounded-lg text-3xl text-center" value="" />
                  <div class="absolute bottom-[10px] m-auto h-[1px] w-[24px] bg-cblue-400 transition
       peer-focus:translate-y-[11px] peer-focus:scale-x-150 peer-focus:opacity-0"></div>
                </div>
                <div class="relative flex justify-center w-[35px] sm:w-[46px] mx-1 sm:mx-[5.5px]"><input type="text"
                    class="peer w-[35px] sm:w-[46px] ring-cblue-400 focus:ring-1 focus:outline-none h-14 sm:h-[70px] px-[7px] py-[11px] flex flex-col items-center justify-center
     bg-[rgb(28,32,41)] bg-opacity-60 backdrop-blur-[2px] rounded-lg text-3xl text-center" value="" />
                  <div class="absolute bottom-[10px] m-auto h-[1px] w-[24px] bg-cblue-400 transition
       peer-focus:translate-y-[11px] peer-focus:scale-x-150 peer-focus:opacity-0"></div>
                </div>
                <div class="relative flex justify-center w-[35px] sm:w-[46px] mx-1 sm:mx-[5.5px]"><input type="text"
                    class="peer w-[35px] sm:w-[46px] ring-cblue-400 focus:ring-1 focus:outline-none h-14 sm:h-[70px] px-[7px] py-[11px] flex flex-col items-center justify-center
     bg-[rgb(28,32,41)] bg-opacity-60 backdrop-blur-[2px] rounded-lg text-3xl text-center" value="" />
                  <div class="absolute bottom-[10px] m-auto h-[1px] w-[24px] bg-cblue-400 transition
       peer-focus:translate-y-[11px] peer-focus:scale-x-150 peer-focus:opacity-0"></div>
                </div>
                <div class="relative flex justify-center w-[35px] sm:w-[46px] mx-1 sm:mx-[5.5px]"><input type="text"
                    class="peer w-[35px] sm:w-[46px] ring-cblue-400 focus:ring-1 focus:outline-none h-14 sm:h-[70px] px-[7px] py-[11px] flex flex-col items-center justify-center
     bg-[rgb(28,32,41)] bg-opacity-60 backdrop-blur-[2px] rounded-lg text-3xl text-center" value="" />
                  <div class="absolute bottom-[10px] m-auto h-[1px] w-[24px] bg-cblue-400 transition
       peer-focus:translate-y-[11px] peer-focus:scale-x-150 peer-focus:opacity-0"></div>
                </div>
              </div><button class="-mb-5 mt-2 hsm:mt-0 hlg:mt-2" aria-label="Enter the Referral Code"><svg
                  xmlns="http://www.w3.org/2000/svg" width="216" height="94" fill="none">
                  <g filter="url(#referral-button_svg__a)">
                    <path fill="#000"
                      d="M30 35.71a5 5 0 0 1 5.66-4.955l65.001 8.666A5 5 0 0 1 105 44.378v5.244a5 5 0 0 1-4.339 4.957l-65 8.666A5 5 0 0 1 30 58.29z">
                    </path>
                  </g>
                  <g filter="url(#referral-button_svg__b)">
                    <path fill="#000"
                      d="M186 35.71a5 5 0 0 0-5.661-4.955l-65 8.666A5 5 0 0 0 111 44.378v5.244a5 5 0 0 0 4.339 4.957l65 8.666A5 5 0 0 0 186 58.29z">
                    </path>
                  </g>
                  <rect width="157" height="35" x="29.5" y="29.5" fill="#000" stroke="url(#referral-button_svg__c)"
                    rx="5.5"></rect>
                  <rect width="149" height="27" x="33.5" y="33.5" stroke="#262626" rx="5.5"></rect>
                  <path fill="#fff"
                    d="M50.473 52c-.401 0-.728-.121-.98-.364s-.378-.56-.378-.952V42.2h7.476v1.68h-5.544v2.268h5.124v1.68h-5.124v2.492h5.544V52zm7.433-9.8h1.722l4.704 6.664V42.2h1.89V52H64.5l-4.704-6.664V52h-1.89zm12.457 1.68h-3.108V42.2h8.148v1.68h-3.108V52h-1.932zm7.44 8.12c-.401 0-.728-.121-.98-.364s-.378-.56-.378-.952V42.2h7.476v1.68h-5.544v2.268h5.124v1.68h-5.124v2.492h5.544V52zm7.433-9.8h5.208c.85 0 1.53.229 2.044.686.523.457.784 1.06.784 1.806v.98c0 .485-.14.91-.42 1.274-.27.355-.667.625-1.19.812v.028c.299.196.523.42.672.672.159.252.313.602.462 1.05L93.58 52h-2.002l-.742-2.324c-.121-.401-.29-.7-.504-.896a1.14 1.14 0 0 0-.798-.294h-2.366V52h-1.932zm4.844 4.62c.392 0 .7-.103.924-.308.224-.215.336-.49.336-.826v-.91c0-.27-.084-.485-.252-.644-.168-.168-.392-.252-.672-.252h-3.248v2.94zm11.086-2.94h-3.108V42.2h8.148v1.68h-3.108V52h-1.932zm6.082-1.68h1.932v4.046h4.564V42.2h1.932V52h-1.932v-4.074h-4.564V52h-1.932zm11.516 9.8c-.401 0-.728-.121-.98-.364s-.378-.56-.378-.952V42.2h7.476v1.68h-5.544v2.268h5.124v1.68h-5.124v2.492h5.544V52zm14.798.112c-.718 0-1.353-.154-1.904-.462a3.2 3.2 0 0 1-1.26-1.302c-.298-.57-.448-1.223-.448-1.96v-2.576c0-.737.15-1.386.448-1.946a3.244 3.244 0 0 1 1.288-1.316c.56-.308 1.204-.462 1.932-.462h1.484c.7 0 1.316.15 1.848.448a3.08 3.08 0 0 1 1.232 1.26c.299.532.448 1.153.448 1.862h-1.904c0-.56-.149-1.008-.448-1.344-.298-.345-.69-.518-1.176-.518h-1.484c-.522 0-.942.196-1.26.588-.317.383-.476.887-.476 1.512v2.408c0 .625.154 1.134.462 1.526.308.383.714.574 1.218.574h1.512c.495 0 .896-.191 1.204-.574.318-.383.476-.887.476-1.512h1.904c0 .756-.149 1.423-.448 2.002a3.258 3.258 0 0 1-1.26 1.33c-.541.308-1.166.462-1.876.462zm9.765 0c-.737 0-1.391-.154-1.96-.462a3.426 3.426 0 0 1-1.316-1.316c-.308-.57-.462-1.227-.462-1.974v-2.52c0-.747.154-1.4.462-1.96a3.305 3.305 0 0 1 1.316-1.316c.569-.317 1.223-.476 1.96-.476h1.484c.737 0 1.386.159 1.946.476a3.195 3.195 0 0 1 1.316 1.316c.317.56.476 1.213.476 1.96v2.52c0 .747-.159 1.405-.476 1.974-.308.56-.747.999-1.316 1.316-.56.308-1.209.462-1.946.462zm1.484-1.708c.541 0 .975-.196 1.302-.588.336-.392.504-.905.504-1.54v-2.352c0-.635-.168-1.148-.504-1.54-.327-.392-.761-.588-1.302-.588h-1.484c-.541 0-.98.196-1.316.588-.327.392-.49.905-.49 1.54v2.352c0 .635.163 1.148.49 1.54.336.392.775.588 1.316.588zM151.358 52c-.401 0-.728-.121-.98-.364s-.378-.56-.378-.952V42.2h4.676c.747 0 1.4.14 1.96.42.569.28 1.008.677 1.316 1.19.317.513.476 1.106.476 1.778v2.744c0 1.204-.313 2.119-.938 2.744-.625.616-1.545.924-2.758.924zm3.318-1.708c.597 0 1.05-.173 1.358-.518.308-.345.462-.854.462-1.526v-2.576c0-.532-.173-.957-.518-1.274-.345-.327-.798-.49-1.358-.49h-2.688v6.384zM161.188 52c-.401 0-.728-.121-.98-.364s-.378-.56-.378-.952V42.2h7.476v1.68h-5.544v2.268h5.124v1.68h-5.124v2.492h5.544V52z">
                  </path>
                  <defs>
                    <filter id="referral-button_svg__a" width="135" height="92.58" x="0" y="0.71"
                      color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                      <feColorMatrix in="SourceAlpha" result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                      <feOffset></feOffset>
                      <feGaussianBlur stdDeviation="15"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix values="0 0 0 0 0.533333 0 0 0 0 0.705882 0 0 0 0 0.960784 0 0 0 1 0">
                      </feColorMatrix>
                      <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1507_5016"></feBlend>
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_1507_5016" result="shape"></feBlend>
                    </filter>
                    <filter id="referral-button_svg__b" width="135" height="92.58" x="81" y="0.71"
                      color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                      <feColorMatrix in="SourceAlpha" result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                      <feOffset></feOffset>
                      <feGaussianBlur stdDeviation="15"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix values="0 0 0 0 0.533333 0 0 0 0 0.705882 0 0 0 0 0.960784 0 0 0 1 0">
                      </feColorMatrix>
                      <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1507_5016"></feBlend>
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_1507_5016" result="shape"></feBlend>
                    </filter>
                    <linearGradient id="referral-button_svg__c" x1="30" x2="186" y1="47" y2="47"
                      gradientUnits="userSpaceOnUse">
                      <stop stop-color="#88B4F5"></stop>
                      <stop offset="0.505" stop-color="#88B4F5" stop-opacity="0"></stop>
                      <stop offset="1" stop-color="#88B4F5"></stop>
                    </linearGradient>
                  </defs>
                </svg></button>
            </div>
            <div class="w-[288px] sm:w-[372px] lg:border lg:border-neutrals-700 hsm:h-[calc(100vh-540px)] min-h-[228px] hlg:h-[calc(100vh-580px)] max-h-[450px] subxl:h-[400px] justify-between py-6 px-2 sm:px-4  md:px-[20px]
     rounded-[2rem] bg-black bg-opacity-30 backdrop-blur-[1.5px] flex flex-col items-center"><span
                class="font-bold text-xl">Backed By</span>
              <div class="w-full justify-around items-center flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 121 43" class="w-24 sm:w-[121px]">
                  <path fill="#fff"
                    d="m42 11.367 9.513-2.753v-.139L42 5.712V1.816l13.296 4.65v4.157L42 15.27zM77.643 15.27l-13.296-4.65V6.464l13.296-4.648v3.896l-9.513 2.76v.14l9.513 2.752v3.904zM61.477 0h-3.314v17.086h3.314zM4.921 42.168H0V28.219h4.921c4.005 0 6.795 2.83 6.795 6.895 0 4.165-2.79 7.054-6.795 7.054M1.674 29.754v10.88H5.02c2.889 0 4.921-2.272 4.921-5.52 0-3.01-2.032-5.36-4.921-5.36zM16.13 42.168h-1.673V28.219h6.356c2.63 0 4.443 1.574 4.443 3.846 0 1.654-1.116 3.049-2.81 3.587.738.2 1.256.677 1.515 1.375l1.933 5.14H24.1l-1.793-4.841c-.219-.598-.697-.917-1.355-.917h-4.821zm0-12.414v5.16h4.762c1.734 0 2.67-1.195 2.67-2.69 0-1.633-1.155-2.47-2.67-2.47zM28.85 42.168h-1.733l5.738-13.949h1.693l5.759 13.949h-1.734l-1.634-3.986h-6.455zm4.862-11.817-2.59 6.317h5.18zM47.772 42.387c-3.846 0-6.595-2.83-6.595-7.233 0-4.145 2.53-7.154 6.774-7.154 3.547 0 5.997 2.152 6.575 5.58h-1.734c-.517-2.551-2.29-4.046-4.841-4.046-3.088 0-5.021 2.133-5.021 5.62 0 3.527 1.973 5.699 4.842 5.699 2.61 0 4.263-1.774 4.263-4.305h-4.702v-1.434h4.902c1.454 0 2.231.737 2.231 2.092v4.962h-1.494v-4.763h-.04c-.259 3.07-2.072 4.982-5.16 4.982M63.554 42.387c-3.985 0-6.714-2.83-6.714-7.233 0-4.145 2.53-7.154 6.714-7.154 4.025 0 6.755 2.83 6.755 7.154 0 4.184-2.53 7.233-6.755 7.233m0-1.534c3.109 0 5.041-2.212 5.041-5.7 0-3.447-1.952-5.619-5.04-5.619-3.069 0-5.002 2.172-5.002 5.62 0 3.487 1.933 5.699 5.001 5.699M74.737 42.168h-1.674V28.219h1.913l7.89 11.558V28.219h1.673v13.949h-1.912l-7.89-11.558zM89.602 42.168h-1.674V28.219h9.504v1.534h-7.83v4.524h7.233v1.534h-7.233zM109.098 42.168h-9.145V28.219h1.674v12.414h7.471zM114.717 42.168h-1.674V36.01l-5.3-7.792h1.973l4.184 6.197 4.164-6.197h1.973l-5.32 7.791z">
                  </path>
                </svg>
                <div class="flex flex-col items-center justify-center text-sm sm:text-lg font-medium"><img
                    alt="Arthur Hayes" loading="lazy" width="28" height="28" decoding="async" data-nimg="1"
                    class="h-fit scale-75 sm:scale-100" style="color:transparent"
                    srcSet="/_next/image?url=%2Finvestors%2Farthur-hayes.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2Finvestors%2Farthur-hayes.png&amp;w=64&amp;q=75 2x"
                    src="/_next/image?url=%2Finvestors%2Farthur-hayes.png&amp;w=64&amp;q=75" />Arthur Hayes</div>
              </div>
              <div class="gap-[18px] w-full justify-around items-center flex"><svg xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 90 23" class="w-16 sm:w-[70px]">
                  <path fill="#fff"
                    d="m18.148 6.967-2.404 2.378-4.362-4.468L7.08 9.21 4.594 6.672 11.244 0zM4.576 15.78l2.373-2.408 4.288 4.494c1.732-1.482 3.066-3.08 4.566-4.447l2.36 2.442c-2.22 2.224-4.524 4.552-6.766 6.807zM34.117 6.514l.684.478c.333.221.6.529.774.891a2.257 2.257 0 0 1-.192 2.276 2.222 2.222 0 0 1-.911.747 3.743 3.743 0 0 1-1.399.382c-1.552.047-3.111.018-4.732.018V2.305c1.786-.012 3.587-.234 5.34.254 1.655.458 2.125 2.315.985 3.61-.116.13-.31.192-.549.345m-3.988 3.15c1.047-.07 2.038.152 3.028-.146a.9.9 0 0 0 .532-.338.918.918 0 0 0 .184-.607.895.895 0 0 0-.229-.642.876.876 0 0 0-.614-.284c-.96-.065-1.928-.018-2.903-.018v2.036zm-.024-3.728c.848.047 1.69.126 2.52-.041a.896.896 0 0 0 .771-.909.837.837 0 0 0-.672-.877 5.81 5.81 0 0 0-2.618-.024zM63.081 2.316h1.62l4.069 5.347.23-.076V2.335h1.802v8.896H69.22l-4.117-5.397-.244.067c-.098.859-.032 1.729-.043 2.595-.011.865 0 1.782 0 2.742h-1.731zM44.498 5.834v5.393h-1.823V2.332h1.684c1.407 1.735 2.663 3.615 4.117 5.335l.184-.089v-5.23h1.749v8.883h-1.531L44.73 5.774zM82.723 11.225V2.329h6.653V4.05h-4.652v1.896h4.103v1.625h-4.103v2.038h4.644v1.61zM61.417 11.275h-1.92l-.863-1.98h-3.845l-.845 1.962h-1.865c1.286-3.036 2.527-5.994 3.776-8.96h1.773zm-5.91-3.745c.89.117 1.609.185 2.408-.052l-1.09-2.646h-.22zM80.867 3.549c-.055.12-.12.233-.195.34-.282.322-.577.633-.89.972-.836-.556-1.662-1.128-2.707-.927a2.634 2.634 0 0 0-1.61.979 3.168 3.168 0 0 0 .085 3.908c1.01 1.174 2.315 1.153 4.323-.078.184.17.394.347.589.536.192.189.332.352.49.523-1.161 1.842-4.471 2.24-6.381.667-2.046-1.682-2.258-4.819-.518-6.84 1.644-1.91 5.545-1.813 6.814-.08M28.327 17.544v-.768h34.578l.068.768zM78.9 14.1c1.103 0 2.13-.009 3.164 0 .692 0 1.252.264 1.543.945.29.682.089 1.25-.42 1.746-.067.077-.129.16-.183.248.084.086.174.163.269.233.627.358.919.912.791 1.612-.127.7-.62 1.225-1.358 1.297-1.237.131-2.482.185-3.809.274zm1.027 5.34c.833-.036 1.616-.036 2.39-.12a.82.82 0 0 0 .512-.274.832.832 0 0 0 0-1.095.814.814 0 0 0-.513-.274c-.8-.07-1.608-.02-2.398-.02zm0-2.747c.639.028 1.279.023 1.916-.018.435-.05.808-.319.83-.832.021-.513-.292-.813-.772-.844-.646-.043-1.3-.012-1.975-.012v1.706zM39.8 2.34v8.913H38.08V2.34zM77.577 20.351h-1.052l-.687-1.564h-3.014l-.735 1.572h-.994c.92-2.144 1.825-4.228 2.746-6.363l.962-.051zm-2.142-2.55-1.126-2.595c-.412.99-.736 1.76-1.083 2.595zM85.246 19.436l.468-.634c.551.238 1.045.54 1.59.67.543.13 1.102.135 1.582-.453l.033-.741a2.535 2.535 0 0 0-.54-.37c-.55-.186-1.102-.32-1.654-.507-.935-.323-1.335-.895-1.285-1.774a1.76 1.76 0 0 1 .459-1.083 1.74 1.74 0 0 1 1.033-.55c.989-.157 1.937-.014 2.81.713l-.464.689c-.905-.34-1.779-1.03-2.744-.122v.9c.464.186.933.371 1.41.543.256.093.532.121.786.215.92.34 1.353.997 1.246 1.896-.058.4-.247.767-.536 1.046-.29.279-.662.453-1.06.494-1.124.13-2.19-.035-3.134-.932M2.48 9.03l2.36 2.363-2.45 2.349L0 11.316z">
                  </path>
                  <path fill="#fff"
                    d="m11.503 8.924 2.262 2.278-2.477 2.42-2.206-2.247zM20.24 13.677l-2.274-2.293 2.404-2.408 2.232 2.322zM65.656 14.154h.984v5.265h3.264v.906h-4.25v-6.17z">
                  </path>
                </svg><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none"
                  viewBox="0 0 39 21" class="w-9 sm:w-[40px]">
                  <path fill="url(#okx_svg__a)" d="M0 .111h38.871v19.991H0z"></path>
                  <defs>
                    <pattern id="okx_svg__a" width="1" height="1" patternContentUnits="objectBoundingBox">
                      <use xlink:href="#okx_svg__b" transform="scale(.01429 .02778)"></use>
                    </pattern>
                    <image
                      xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAkCAYAAAA0EkzVAAAKrGlDQ1BJQ0MgUHJvZmlsZQAASImVlwdUk9kSgO//p4cEAgmRTuhNkE4AKaGHLh1shCRAKCEGQrMjiyu4FkREQFnQVREF1wLIWhBRbIuAgg1dkEVEWRcLNizvB5bg7jvvvfMmZ858mcydmXvPvedMACDTOCJRCkwBIFWYIQ7xdmNERccwcCOABChAARgAMoebLmIFB/sDRGbt3+VtH4Cm7C3TqVz//vt/FXkeP50LABSMcBwvnZuK8ElEX3BF4gwAUPsRv05WhmiKryBMEyMNItw/xQkzPD7FcdOMRk/HhIW4I6wEAJ7E4YgTACDpIn5GJjcByUPyQNhcyBMIEUa+A+fU1DQewkhdYIjEiBCeys+M+yZPwt9yxklzcjgJUp7Zy7TgPQTpohROzv95HP9bUlMkszX0ESUlin1CEEtHzuxucpqflIVxgUGzLOBNx09zosQnfJa56e4xs8zjePhJ16YE+s9yvMCLLc2TwQ6bZX66Z+gsi9NCpLXixe6sWeaI5+pKksOl/kQ+W5o/NzEscpYzBRGBs5yeHOo3F+Mu9YslIdL++UJvt7m6XtK9p6Z/s18BW7o2IzHMR7p3zlz/fCFrLmd6lLQ3Ht/Dcy4mXBovynCT1hKlBEvj+SneUn96Zqh0bQZyIefWBkvPMInjGzzLwAN4An/kwwDBwBJYAwvARHwgg589dUeBe5ooRyxISMxgsJBXxmewhVyz+QxLc0srAKbe7MyVeH13+i1CdPycL40EgO0TBNrmfJzfAWhe89dz+sunh8RQKgE4+4ErEWfO+KaeE8AAIpADNKAMNIAOMASmSH+2wBG4Ih37giAQBqLBMsAFiSAViEEWWAXWgwJQBLaBnaAcVIF94BA4Co6DJnAGXACXwXXQBXrBAzAAhsFzMA7egkkIgnAQGaJCypAmpAeZQJYQE3KGPCF/KASKhmKhBEgISaBV0AaoCCqGyqFqqBb6GToNXYCuQt3QPWgQGoVeQR9hFEyCabA6rA8vgJkwC/aDw+ClcAK8As6F8+EtcBlcAx+BG+EL8HW4Fx6An8MTKICSQdFRWihTFBPljgpCxaDiUWLUGlQhqhRVg6pHtaA6ULdQA6gx1Ac0Fk1FM9CmaEe0DzoczUWvQK9Bb0aXow+hG9Ht6FvoQfQ4+guGjFHDmGAcMGxMFCYBk4UpwJRiDmBOYS5hejHDmLdYLJaONcDaYX2w0dgk7ErsZuwebAO2FduNHcJO4HA4ZZwJzgkXhOPgMnAFuN24I7jzuB7cMO49XgavibfEe+Fj8EJ8Hr4Ufxh/Dt+DH8FPEigEPYIDIYjAI+QQthL2E1oINwnDhEmiPNGA6EQMIyYR1xPLiPXES8R+4msZGRltGXuZRTICmXUyZTLHZK7IDMp8ICmQjEnupCUkCWkL6SCplXSP9JpMJuuTXckx5AzyFnIt+SL5Efm9LFXWTJYty5NdK1sh2yjbI/tCjiCnJ8eSWyaXK1cqd0LuptwYhUDRp7hTOJQ1lArKacodyoQ8Vd5CPkg+VX6z/GH5q/JPFXAK+gqeCjyFfIV9ChcVhqgoqg7VncqlbqDup16iDtOwNAMam5ZEK6IdpXXSxhUVFK0VIxSzFSsUzyoO0FF0fTqbnkLfSj9O76N/nKc+jzWPP2/TvPp5PfPeKakquSrxlQqVGpR6lT4qM5Q9lZOVtys3KT9UQasYqyxSyVLZq3JJZUyVpuqoylUtVD2uel8NVjNWC1FbqbZP7YbahLqGure6SH23+kX1MQ26hqtGkkaJxjmNUU2qprOmQLNE87zmM4Yig8VIYZQx2hnjWmpaPloSrWqtTq1JbQPtcO087QbthzpEHaZOvE6JTpvOuK6mboDuKt063ft6BD2mXqLeLr0OvXf6BvqR+hv1m/SfGigZsA1yDeoM+g3Jhi6GKwxrDG8bYY2YRslGe4y6jGFjG+NE4wrjmyawia2JwGSPSfd8zHz7+cL5NfPvmJJMWaaZpnWmg2Z0M3+zPLMmsxcLdBfELNi+oGPBF3Mb8xTz/eYPLBQsfC3yLFosXlkaW3ItKyxvW5GtvKzWWjVbvbQ2seZb77W+a0O1CbDZaNNm89nWzlZsW287aqdrF2tXaXeHSWMGMzczr9hj7N3s19qfsf/gYOuQ4XDc4U9HU8dkx8OOTxcaLOQv3L9wyEnbieNU7TTgzHCOdf7RecBFy4XjUuPy2FXHled6wHWEZcRKYh1hvXAzdxO7nXJ75+7gvtq91QPl4e1R6NHpqeAZ7lnu+chL2yvBq85r3NvGe6V3qw/Gx89nu88dtjqby65lj/va+a72bfcj+YX6lfs99jf2F/u3BMABvgE7AvoD9QKFgU1BIIgdtCPoYbBB8IrgXxZhFwUvqlj0JMQiZFVIRyg1dHno4dC3YW5hW8MehBuGS8LbIuQilkTURryL9IgsjhyIWhC1Oup6tEq0ILo5BhcTEXMgZmKx5+Kdi4eX2CwpWNK31GBp9tKry1SWpSw7u1xuOWf5iVhMbGTs4dhPnCBODWcijh1XGTfOdefu4j7nufJKeKN8J34xfyTeKb44/mmCU8KOhNFEl8TSxDGBu6Bc8DLJJ6kq6V1yUPLB5K8pkSkNqfjU2NTTQgVhsrA9TSMtO61bZCIqEA2scFixc8W42E98IB1KX5renEFDhqMbEkPJd5LBTOfMisz3WRFZJ7Lls4XZN3KMczbljOR65f60Er2Su7Jtldaq9asGV7NWV6+B1sStaVurszZ/7fA673WH1hPXJ6//Nc88rzjvzYbIDS356vnr8oe+8/6urkC2QFxwZ6Pjxqrv0d8Lvu/cZLVp96YvhbzCa0XmRaVFnzZzN1/7weKHsh++bonf0rnVduvebdhtwm192122HyqWL84tHtoRsKOxhFFSWPJm5/KdV0utS6t2EXdJdg2U+Zc179bdvW33p/LE8t4Kt4qGSrXKTZXv9vD29Ox13VtfpV5VVPXxR8GPd6u9qxtr9GtK92H3Ze57sj9if8dPzJ9qD6gcKDrw+aDw4MChkEPttXa1tYfVDm+tg+skdaNHlhzpOupxtLnetL66gd5QdAwckxx79nPsz33H/Y63nWCeqD+pd7LyFPVUYSPUmNM43pTYNNAc3dx92vd0W4tjy6lfzH45eEbrTMVZxbNbzxHP5Z/7ej73/ESrqHXsQsKFobblbQ8uRl283b6ovfOS36Url70uX+xgdZy/4nTlzFWHq6evMa81Xbe93njD5sapX21+PdVp29l40+5mc5d9V0v3wu5zPS49F2553Lp8m337em9gb3dfeN/dO0vuDNzl3X16L+Xey/uZ9ycfrOvH9Bc+pDwsfaT2qOY3o98aBmwHzg56DN54HPr4wRB36Pnv6b9/Gs5/Qn5SOqI5UvvU8umZUa/RrmeLnw0/Fz2fHCv4Q/6PyheGL07+6frnjfGo8eGX4pdfX21+rfz64BvrN20TwROP3qa+nXxX+F75/aEPzA8dHyM/jkxmfcJ9Kvts9Lnli9+X/q+pX7+KOGLO9CiAQhSOjwfg1UEAyNEAULsAIC6emamnBZr5HzBN4D/xzNw9LbYA1K4DIAzRgFYA9rgiIy2icggHIzbMFcBWVlKdnX+nZ/UpoRwBoKvN3C4qrO/hEAz+ITNz/Dd9/9MCada/2X8B+SkIhOPsFRsAAAA4ZVhJZk1NACoAAAAIAAGHaQAEAAAAAQAAABoAAAAAAAKgAgAEAAAAAQAAAEagAwAEAAAAAQAAACQAAAAArh8GDwAABnpJREFUaAXtmQuIVFUYx2dmZ19u+26NzFUpNVFqzSgWKbCXWZHFEkZFIREFm5FED4mk1baIQpJYI6hwocheYrahZVS2ErRmWiuBRabtumn7mtnZ9+7sTL//zL3Dnbv3ro82wrgf/Od8j/N955zv3HvOnHP98Xj8t46Ojot8k0RlZWWdhKr0+/2HFZL4zxD/Oafw1F1PvWedbCfxq8FvnRH/Asr9tDHVHof4LejmUHfEbiP+nNHR0X3hcLjAbpNfAKXfbphkeaL4av9MyBrTyjvFOpndySdwph1zCva/0nmJcZlOLzFeYlwy4KIOuuh9gUAgVlpaWo+9xaFO7vDw8MORSOQcB9vpqJawO7zg4tDG7lDjYmuw6Dvg11P3XIvOZCMwq2kj31DEKc3FOJSZmVmL3xSzsqVsd01MTk7OMBU3stUdtDgkWBrKyM7OvgPhHyWGLfYqYgjjiA7X0vbacQabgjrq5yabOiHSz/L+/v5fBgYGcu124h9CdwX+fXabZG+NccqKlxiXrHiJ8RLjngEXi7fGuCTGdVcaGRnJysvLe4qV/XcH33wOYKUO+tNSsTM04vCFi1OEtte72D5lN9krG3WyKapBsWQbRRnD08Bp99TB8jH8nXJw3EmZiB2NRjPYTu+xNTTZYiMDrHUKSod1KnfcrknoGD6JxFCWgTUTnK7nGlt6WjPEn+h0fexsfZXMP2lpg51M4WxNzGTmwDGWlxjHtHj/fF3ScvYmRofBf5X8rM7304LuTSeLegn0OjvBkAIS/zKKW8RDGpBeX+0qGWAn9fZRjiP8KlHeMM6QVGi7PiCWejodPwSctuRj6OupOy6R+Kn+gyAP2OmEXeHJXga8DHgZ8DLgZeC/y4C261tpvgiMgu1sbYPodBZZAbKA7kS3g2XA6UR9FJ89+FyP/XwwCHah0+lYn34XA9EOoK11CXCjzzDok6np8xVx2ohzMborDaddlD3gdpBp6FTo7reZ+rrL1TauC3D9TbDWkUlkxtU4Z4NrwHmgHei0f0QB3mpvb4/zDXcEfjlK6Waii0kPvW/omiTbgf09w75DNiPOy+iDoMqsD7/IKpt6a4m9Etxn6uCVbPXncYvuRuRpQ0NDEVNnluh6sL0CcsBMbghCps1aYjPHeS9fOgatNi7O+7BvCNJuA59KVnL/osyqI5+A24Afvf4YvQ1SJB2fVax3NMdTRhjFGRwcrM7NzVUcO4W5MjiMMtDV1TUrFov59TUiPz//mFHR8cYem+tpmnid2Lt6e3tnMsiCYDD4SHFx8RZ0fxkxfSUlJeGMjIwuU6YcYvDTKV8kmTnEaIXfDxaMjY3prfhOidnNQJu5z1gIr9lQghIZRd8Cr1cgRTQSQngSRIEue/aANOrr65tCYl5FWZdm8Pm+Rp4L8oh9iDankZQjyAuMepqIRQZ/qsU2KlYTp4pJ2aJ7JOR5IJUYkqI+vglEbUBJqCCZJVJAeoUaQB11NaZvg7yTYZLxMcJCZnE2Hb4O/lIg2oY9lmSTv52dnSXM8ruS6IySpIT2SxbpQ11WVlaUWBXEejSpTf4SSwOnubjKFFnbsJnMOml9MJVGqbWnFlzNExigbxqYJjRFoVDoZp6kpVLQZ43pLtr5A/4oT8w8JuhyTG8w6T0kZi/8Oj0xoq2gRoEpN1GxzPjgJn0aMehRAuosocH1Aj05KSIZrQgNxFgFLkkZzozR7IucFtCEgTYqYASf0bfXYBtBuXSioqKiXpIRhtUrGZEOOURyqniNViEu7unpmd/d3V0EvxRdvpmYnxEOaiDgQjkyeK3uP4q3UmFhodaUu4EOgiJ7pwfQPU+8a4k1P1Hj9H60ZpikV/tXBD3FPmZdk6DJSBHtNCMU0NYs+qYnWAfYmPXJQ96JfiNQYmQzv0yuRP4B1OGrXWmz4lDOSCQGR+rG61FsACa9g37cYsgrUs7rohlJEAvdBzBKVIrwO0G8NczgR7pUTxlOjWlisO10cCptraatVawbieTTlpL0Eyi0hGqC/5J6W+SD71rafsBi9xHnTuwrTB1xquDH0D+hDQAfTcYQ/tONOoqZJIKVgzZtV9rm4NOuIpB3y2YH+s2KQLnV2Oq+N2Rt1y+Z9eEXJVtK1J2CrG/K2ho1Y2mEbhk4wCI+wJo2phK5CWgtUFvTwJ+Gfx284n0jWds4/E1gOmg127eW6JcD/TX4XGPlFYryN2PUGPeH6Gf8DRpJysqKTrx7AAAAAElFTkSuQmCC"
                      id="okx_svg__b" width="70" height="36"></image>
                  </defs>
                </svg><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 267 38" class="w-20 sm:w-[80px]">
                  <path fill="#fff"
                    d="M15.395 36.365H0V2h14.763c7.18 0 11.35 3.758 11.35 9.667 0 3.805-2.68 6.263-4.55 7.09 2.225.969 5.056 3.143 5.056 7.729 0 6.428-4.702 9.903-11.25 9.903zM14.207 7.98H7.179v7.917h7.028c3.059 0 4.752-1.583 4.752-3.97 0-2.388-1.693-3.971-4.752-3.971zm.455 13.968H7.179v8.437h7.483c3.261 0 4.803-1.938 4.803-4.254s-1.542-4.207-4.803-4.207zM48.526 22.255v14.086h-7.128V22.255L30.35 2h7.81l6.877 13.85L51.813 2h7.786L48.552 22.279zM79.928 36.365H64.533V2h14.763c7.18 0 11.35 3.758 11.35 9.667 0 3.805-2.679 6.263-4.55 7.09 2.225.969 5.056 3.143 5.056 7.729 0 6.428-4.702 9.903-11.249 9.903zM78.74 7.98h-7.027v7.917h7.027c3.059 0 4.753-1.583 4.753-3.97 0-2.388-1.694-3.971-4.753-3.971zm.455 13.968h-7.482v8.437h7.482c3.261 0 4.803-1.938 4.803-4.254s-1.542-4.207-4.803-4.207zM106.229 2h-7.18v34.365h7.18zM129.356 7.98v28.385h-7.18V7.98h-9.606V2h26.392v5.98zM151.23 37.19l-5.962-10.908v10.907H142V23.065h5.12l5.507 9.988 5.508-9.988h5.052v14.124h-3.291V26.282l-5.943 10.907zM173.427 37.19h-3.531V23.064h3.531zM179.784 30.603h10.132c1.966 0 3.088-.85 3.088-2.322 0-1.493-1.122-2.343-3.088-2.343h-10.132v-2.873h10.311c3.728 0 6.244 1.792 6.244 5.194 0 2.527-1.463 4.208-3.796 4.848l4.188 4.082h-3.866l-3.867-3.76h-5.854v3.76h-3.362zM210.491 26.398 203.88 37.19h-3.617l8.339-14.124h3.801l8.34 14.124h-3.663zM241.929 37.19h-2.911l-10.505-9.828v9.827h-3.18V23.065h3.36l10.033 9.28v-9.28h3.203zM256.924 26.398l-6.497 10.791h-3.555l8.196-14.124h3.735l8.196 14.124H263.4z">
                  </path>
                  <path fill="#fff" fill-rule="evenodd"
                    d="M207.695 14.505c1.032-1.467 1.63-3.314 1.63-5.27A9.228 9.228 0 0 0 200.09 0a9.228 9.228 0 0 0-9.236 9.235c0 1.956.598 3.803 1.63 5.27 1.684-2.39 4.455-3.966 7.606-3.966 3.15 0 5.921 1.575 7.605 3.966"
                    clip-rule="evenodd"></path>
                </svg><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 74 22" class="w-14 sm:w-[60px]">
                  <path fill="#fff" fill-rule="evenodd"
                    d="M0 17.703h3.516v3.509h3.522v-3.516h3.516v3.516h3.516v-3.516h.006a7.038 7.038 0 0 0 7.025-7.038v-.007a7.038 7.038 0 0 0-7.038-7.025V.111h-3.516v3.515H7.032V.111H3.516v3.515H0V7.15h3.516v7.038H0zm7.038-3.516h7.032c1.939 0 3.515-1.57 3.515-3.516 0-1.94-1.57-3.516-3.515-3.516H7.038zm26.166-6.28a4.68 4.68 0 0 0-1.953-1.853c-.837-.428-1.814-.646-2.928-.646h-3.694v10.56h3.694c1.108 0 2.09-.224 2.928-.653a4.68 4.68 0 0 0 1.953-1.833c.462-.792.693-1.709.693-2.777 0-1.069-.231-1.992-.693-2.797m-1.471 2.798c0 1.101-.303 1.952-.91 2.559-.607.6-1.471.91-2.573.917h-1.497V7.195h1.497c1.108 0 1.966.304 2.573.93.607.614.91 1.478.91 2.58m5.363 1.708h6.134V12.4c.04-.244.053-.521.046-.812 0-.81-.171-1.536-.52-2.17a3.522 3.522 0 0 0-1.465-1.464c-.62-.336-1.306-.515-2.137-.515s-1.564.179-2.197.528a3.695 3.695 0 0 0-1.484 1.517c-.35.66-.528 1.432-.528 2.29 0 .857.172 1.622.535 2.275.343.64.864 1.174 1.497 1.524.633.362 1.359.54 2.17.54.996 0 1.847-.263 2.533-.784a3.784 3.784 0 0 0 1.398-1.993H40.79c-.337.673-.89 1.016-1.682 1.016-.548 0-1.01-.171-1.38-.514-.369-.343-.586-.818-.632-1.425m3.41-2.73c.383.329.58.758.587 1.305l.007.013h-3.978c.08-.567.297-1.002.653-1.325.356-.324.798-.482 1.326-.482.554 0 1.022.158 1.405.488m9.017-2.237c-.567 0-1.062.125-1.504.383l-.013.006a3.05 3.05 0 0 0-1.062 1.05v-1.3h-2.118v8.37h2.124v-4.182c0-.772.165-1.312.508-1.63.33-.31.838-.467 1.504-.467h.56zM50.73 5.33c0 .362.125.66.37.89.243.231.553.35.93.35.376 0 .685-.112.93-.35.244-.244.369-.54.369-.89s-.125-.653-.37-.89c-.244-.232-.56-.35-.93-.35-.369 0-.686.112-.93.35-.244.243-.369.527-.369.89m2.342 10.646v-8.39h-2.118v8.39zm6.985-8.536c-.613 0-1.16.126-1.642.383v.007a2.81 2.81 0 0 0-1.122.976V4.76h-2.117v11.207h2.117v-1.194c.27.39.653.713 1.122.957.468.244 1.015.37 1.642.37a3.618 3.618 0 0 0 1.946-.548c.58-.363 1.036-.87 1.379-1.537.343-.653.508-1.412.508-2.276 0-.864-.165-1.616-.508-2.269-.343-.646-.799-1.154-1.379-1.504a3.712 3.712 0 0 0-1.946-.528m.528 2.15c.343.199.626.489.818.839v-.007c.21.376.31.825.31 1.332 0 .508-.106.957-.31 1.326-.205.37-.475.653-.818.858a2.078 2.078 0 0 1-1.095.303c-.376 0-.752-.099-1.082-.29a2.276 2.276 0 0 1-.818-.858c-.204-.369-.31-.81-.31-1.319 0-.508.106-.95.31-1.319a2.131 2.131 0 0 1 1.9-1.148c.382-.006.758.093 1.095.284m4.624-4.267c0 .363.125.66.37.89.243.231.553.35.93.35.375 0 .685-.112.93-.35.243-.243.369-.54.369-.89s-.126-.653-.37-.89c-.244-.231-.56-.35-.93-.35s-.686.112-.93.35c-.244.244-.37.527-.37.89m2.341 10.646V7.585h-2.117v8.383zm4.565-2.598V9.3h1.893V7.558h-1.873V5.487h-2.137v2.084H69v1.742h.997v4.037c0 1.735.89 2.605 2.678 2.605H74v-1.787h-.989c-.33 0-.554-.06-.693-.185-.138-.125-.204-.33-.204-.614"
                    clip-rule="evenodd"></path>
                </svg></div>
              <div class="w-full justify-around items-start h-fit hidden hmd:flex subxl:flex">
                <div
                  class="gap-0 w-16 min-w-fit sm:w-[76px] flex flex-col items-center justify-center text-2xs font-medium">
                  <img alt="Synthetix Founder" loading="lazy" width="144" height="144" decoding="async" data-nimg="1"
                    class="mb-2" style="color:transparent;height:auto;max-width:33px"
                    srcSet="/_next/image?url=%2Finvestors%2Fsnx-founder.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Finvestors%2Fsnx-founder.png&amp;w=384&amp;q=75 2x"
                    src="/_next/image?url=%2Finvestors%2Fsnx-founder.png&amp;w=384&amp;q=75" /><svg
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 74 6"
                    class="w-14 sm:w-[74px] sm:mb-[6px]">
                    <g fill="#fff" clip-path="url(#synthetix_svg__a)">
                      <path
                        d="M7.506 2.675a1.49 1.49 0 0 0-1.117-.486H2.08a.276.276 0 0 1-.206-.09.302.302 0 0 1-.086-.217v-.374c0-.082.028-.153.086-.212a.277.277 0 0 1 .206-.09h5.557a.044.044 0 0 0 .034-.014.044.044 0 0 0 .013-.03V.045C7.683.03 7.68.019 7.67.01A.05.05 0 0 0 7.636 0H2.08C1.641 0 1.268.162.96.486a1.64 1.64 0 0 0-.461 1.173v.072c0 .462.154.855.462 1.179.308.323.68.485 1.12.485h4.31c.076 0 .143.03.2.087.058.058.086.13.086.215v.374a.293.293 0 0 1-.086.215.275.275 0 0 1-.2.087H.826c-.01 0-.02.004-.029.014a.051.051 0 0 0-.013.036V5.54c0 .011.004.021.013.03.009.01.018.015.029.015h5.562c.435 0 .807-.163 1.117-.489.31-.326.464-.718.464-1.176v-.072c0-.458-.154-.85-.464-1.173M16.864 0h-1.206c-.01 0-.02.004-.028.011-.009.008-.013.019-.013.034v1.418c0 .123-.06.216-.178.28l-2.405 1.066-2.406-1.067c-.118-.063-.177-.156-.177-.279V.045c0-.015-.004-.026-.01-.034C10.433.004 10.423 0 10.409 0H9.204c-.01 0-.02.004-.03.011-.008.008-.012.019-.012.034V1.67c0 .242.062.463.188.664.125.201.295.35.511.447l2.526 1.133v1.62c0 .015.004.027.013.037.008.009.02.013.034.013h1.205c.01 0 .02-.004.029-.013a.051.051 0 0 0 .013-.037v-1.62l2.525-1.127a1.217 1.217 0 0 0 .7-1.111V.044c0-.015-.005-.026-.014-.034A.043.043 0 0 0 16.865 0M25.818 0h-1.206c-.014 0-.024.005-.031.014a.05.05 0 0 0-.01.03v4.334h-.507c-.094 0-.174-.044-.24-.134L21.486.586C21.237.21 20.89.015 20.449 0h-2.014a.044.044 0 0 0-.034.014.044.044 0 0 0-.013.03V5.54c0 .01.004.021.013.03.009.01.02.014.034.014h1.205c.01 0 .02-.004.029-.014a.044.044 0 0 0 .013-.03V1.206h.506c.094 0 .174.047.24.14l2.338 3.658c.25.376.597.57 1.038.58h2.015c.014 0 .024-.004.031-.014a.05.05 0 0 0 .01-.03V.045a.05.05 0 0 0-.01-.031C25.842.004 25.831 0 25.817 0M34.53 0h-7.384c-.014 0-.024.005-.031.014a.049.049 0 0 0-.01.03v1.118c0 .01.003.021.01.03.007.01.017.014.031.014h3.048V5.54a.05.05 0 0 0 .01.03c.007.01.017.014.031.014h1.206c.014 0 .024-.004.031-.014a.05.05 0 0 0 .01-.03V1.206h3.048a.044.044 0 0 0 .034-.014.044.044 0 0 0 .013-.03V.045a.044.044 0 0 0-.013-.031A.044.044 0 0 0 34.53 0M43.483 0h-1.205a.04.04 0 0 0-.029.014.045.045 0 0 0-.013.03V2.19h-4.884V.045a.044.044 0 0 0-.013-.031.045.045 0 0 0-.034-.014H36.1c-.01 0-.02.005-.028.014a.044.044 0 0 0-.013.03V5.54c0 .01.004.021.013.03.009.01.018.014.029.014h1.205a.044.044 0 0 0 .034-.014.044.044 0 0 0 .013-.03V3.395h4.884V5.54c0 .01.005.021.013.03.009.01.018.014.029.014h1.205a.044.044 0 0 0 .034-.014.045.045 0 0 0 .013-.03V.045a.045.045 0 0 0-.013-.031.044.044 0 0 0-.034-.014M52.405 0h-5.85a1.49 1.49 0 0 0-1.116.486c-.31.324-.465.715-.465 1.173V3.92c0 .462.155.855.465 1.179.31.323.681.485 1.116.485h5.85c.01 0 .02-.004.029-.013a.044.044 0 0 0 .013-.031V4.423c0-.015-.005-.026-.013-.034a.044.044 0 0 0-.029-.01h-5.85a.268.268 0 0 1-.203-.09.3.3 0 0 1-.084-.212v-.682h6.133c.014 0 .024-.004.031-.014a.05.05 0 0 0 .01-.03V2.234c0-.015-.003-.026-.01-.034-.007-.007-.017-.01-.03-.01h-6.134v-.682a.3.3 0 0 1 .084-.212.268.268 0 0 1 .203-.09h5.85c.01 0 .02-.004.029-.014a.044.044 0 0 0 .013-.03V.045a.044.044 0 0 0-.013-.031c-.01-.01-.019-.014-.029-.014M61.316 0h-7.384c-.013 0-.024.005-.03.014a.05.05 0 0 0-.011.03v1.118a.05.05 0 0 0 .01.03c.007.01.018.014.031.014h3.048V5.54a.05.05 0 0 0 .01.03c.007.01.018.014.032.014h1.205c.014 0 .024-.004.031-.014.007-.009.01-.02.01-.03V1.206h3.048a.044.044 0 0 0 .034-.014.044.044 0 0 0 .013-.03V.045a.044.044 0 0 0-.013-.031.044.044 0 0 0-.034-.014M64.123.011C64.116.004 64.106 0 64.092 0h-1.206c-.014 0-.024.004-.03.011-.008.008-.012.019-.012.034V5.54c0 .01.004.021.011.03.007.01.017.014.031.014h1.206c.014 0 .024-.004.031-.014a.05.05 0 0 0 .01-.03V.045c0-.015-.003-.026-.01-.034M67.451 1.357a.241.241 0 0 0-.193-.095h-1.565a.044.044 0 0 1-.034-.014.044.044 0 0 1-.013-.03V.1c0-.012.004-.022.013-.031a.044.044 0 0 1 .034-.014h1.654c.417 0 .777.18 1.08.542l.402.519-.783 1.01zm2.89-.765c.304-.357.665-.536 1.086-.536h1.65c.013 0 .023.004.03.011.008.008.01.019.01.034v1.116a.05.05 0 0 1-.01.031c-.007.01-.017.014-.03.014H71.51a.24.24 0 0 0-.193.095l-1.154 1.486 1.159 1.496c.052.06.115.09.188.09h1.565c.014 0 .024.004.032.014a.06.06 0 0 1 .01.036v1.117a.05.05 0 0 1-.01.03c-.008.01-.018.014-.032.014h-1.649c-.42 0-.78-.18-1.08-.541l-.96-1.24-.96 1.24c-.303.36-.665.541-1.086.541h-1.648c-.014 0-.025-.004-.032-.014a.06.06 0 0 1-.01-.036V4.473a.05.05 0 0 1 .01-.03c.007-.01.018-.015.032-.015h1.565a.251.251 0 0 0 .193-.095l1.132-1.463z">
                      </path>
                    </g>
                    <defs>
                      <clipPath id="synthetix_svg__a">
                        <path fill="#fff" d="M.498 0h72.62v5.64H.498z"></path>
                      </clipPath>
                    </defs>
                  </svg><span class="hidden sm:block">@kaiynne</span>
                </div>
                <div
                  class="gap-0 w-16 min-w-fit sm:w-[76px] flex flex-col items-center justify-center text-2xs font-medium">
                  <img alt="AAVE Founder" loading="lazy" width="54" height="54" decoding="async" data-nimg="1"
                    class="mb-1.5" style="color:transparent;height:auto;max-width:33px"
                    srcSet="/_next/image?url=%2Finvestors%2Fstani.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2Finvestors%2Fstani.png&amp;w=128&amp;q=75 2x"
                    src="/_next/image?url=%2Finvestors%2Fstani.png&amp;w=128&amp;q=75" /><svg
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 45 13" class="w-8 sm:mb-[5px]">
                    <g fill="#fff" clip-path="url(#aave_svg__a)">
                      <path
                        d="M27.48 11.692 23.163 1.213a.922.922 0 0 1-.053-.297.822.822 0 0 1 .213-.582.743.743 0 0 1 .572-.223c.16.002.316.054.446.148a.944.944 0 0 1 .307.393l4.104 10.256L32.857.652a.945.945 0 0 1 .307-.393.773.773 0 0 1 .446-.148.743.743 0 0 1 .572.223c.145.159.22.369.212.583a.922.922 0 0 1-.053.298l-4.316 10.478a1.162 1.162 0 0 1-1.082.807h-.382a1.16 1.16 0 0 1-1.081-.808M36.23 12.18a.77.77 0 0 1-.223-.563V1.002a.81.81 0 0 1 .223-.574.737.737 0 0 1 .562-.233h7.012a.696.696 0 0 1 .53.223.714.714 0 0 1 .223.53.675.675 0 0 1-.223.521.745.745 0 0 1-.53.212h-6.206v3.865h5.579a.696.696 0 0 1 .53.223.73.73 0 0 1 .223.53.675.675 0 0 1-.223.52.745.745 0 0 1-.53.213h-5.579v3.885h6.206a.696.696 0 0 1 .53.223.714.714 0 0 1 .223.53.676.676 0 0 1-.223.521.747.747 0 0 1-.53.212h-7.012a.692.692 0 0 1-.562-.223M24.139 11.394 19.822.916A1.163 1.163 0 0 0 18.74.11h-.381a1.16 1.16 0 0 0-1.082.806L15.4 5.482h-1.422a.778.778 0 0 0-.774.775v.01a.78.78 0 0 0 .774.775h.764l-1.792 4.353a.922.922 0 0 0-.053.297.822.822 0 0 0 .212.584.743.743 0 0 0 .572.223.774.774 0 0 0 .446-.149.944.944 0 0 0 .307-.393l1.973-4.914h1.358a.779.779 0 0 0 .774-.775v-.022a.78.78 0 0 0-.774-.775h-.732l1.515-3.768 4.104 10.255a.944.944 0 0 0 .308.393c.13.095.285.147.445.149a.744.744 0 0 0 .573-.223.82.82 0 0 0 .212-.584.703.703 0 0 0-.051-.299M11.243 11.394 6.926.916A1.162 1.162 0 0 0 5.844.11h-.381A1.16 1.16 0 0 0 4.38.917L2.504 5.482H1.082a.779.779 0 0 0-.774.775v.01a.78.78 0 0 0 .774.775h.764L.054 11.394a.922.922 0 0 0-.053.298.821.821 0 0 0 .212.583.743.743 0 0 0 .572.223.773.773 0 0 0 .446-.148.945.945 0 0 0 .307-.393l1.973-4.915H4.88a.779.779 0 0 0 .775-.775v-.02a.78.78 0 0 0-.775-.776h-.732l1.506-3.768 4.105 10.255a.945.945 0 0 0 .307.393c.13.095.285.147.446.149a.744.744 0 0 0 .572-.223.82.82 0 0 0 .212-.584.704.704 0 0 0-.052-.299">
                      </path>
                    </g>
                    <defs>
                      <clipPath id="aave_svg__a">
                        <path fill="#fff" d="M0-.335h45v12.93H0z"></path>
                      </clipPath>
                    </defs>
                  </svg><span class="hidden sm:block">@StaniKulechov</span>
                </div>
                <div
                  class="gap-0 w-16 min-w-fit sm:w-[76px] flex flex-col items-center justify-center text-2xs font-medium">
                  <img alt="Curve Founder" loading="lazy" width="144" height="144" decoding="async" data-nimg="1"
                    class="h-fit mb-1" style="color:transparent;height:auto;max-width:33px"
                    srcSet="/_next/image?url=%2Finvestors%2Fcurve-founder.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Finvestors%2Fcurve-founder.png&amp;w=384&amp;q=75 2x"
                    src="/_next/image?url=%2Finvestors%2Fcurve-founder.png&amp;w=384&amp;q=75" /><svg
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none"
                    viewBox="0 0 45 14" class="w-9 sm:w-[45px] sm:mb-[2px]">
                    <path fill="url(#curve_svg__a)" d="M.608 0h13.244v13.244H.608z"></path>
                    <path fill="#fff"
                      d="M20.37 10.178c-.306 0-.612-.039-.88-.156a1.724 1.724 0 0 1-.65-.43 1.955 1.955 0 0 1-.42-.664 2.143 2.143 0 0 1-.153-.86V5.137c0-.274.038-.586.153-.86a3.88 3.88 0 0 1 .42-.664c.192-.156.421-.313.65-.39.268-.118.536-.157.88-.157.574 0 1.071.156 1.415.508.344.312.574.781.65 1.368h-.841c-.038-.352-.153-.626-.383-.821-.229-.195-.497-.274-.84-.274-.383 0-.69.118-.919.352-.191.195-.306.547-.306.938v2.97c0 .39.115.704.306.938.23.234.536.352.918.352.344 0 .612-.078.841-.313.23-.195.345-.469.383-.82h.841c-.076.586-.267 1.055-.65 1.367-.344.391-.841.547-1.415.547m4.436-5.393v3.44c0 .78.383 1.21 1.11 1.21.765 0 1.147-.39 1.147-1.21v-3.44h.841v3.44c0 .625-.153 1.094-.497 1.445-.344.352-.841.508-1.453.508-.612 0-1.11-.156-1.453-.508-.345-.351-.498-.82-.498-1.446V4.785zm5.814 0v.9h.076c.077-.314.268-.548.497-.743.268-.196.574-.274.957-.274.535 0 .956.156 1.3.508.306.352.459.82.459 1.446v.352h-.841v-.196c0-.43-.115-.742-.306-.977-.192-.234-.498-.351-.88-.351-.383 0-.65.117-.88.351-.23.235-.344.547-.344.938v3.322h-.841V4.785zm4.245 0h.88l1.262 3.752c.038.117.076.274.114.39.039.118.039.196.039.274 0 .078 0 .157.038.235h.077V9.2l.038-.273c.038-.117.076-.274.114-.391l1.186-3.752h.918l-1.836 5.276h-.956zm6.502.47c-.383.351-.536.859-.536 1.484v1.407c0 .625.191 1.133.536 1.485.344.352.88.547 1.53.547.535 0 .956-.117 1.338-.351.383-.235.612-.548.727-.938h-.88c-.115.156-.268.312-.459.39a2.03 2.03 0 0 1-.726.118c-.383 0-.689-.118-.88-.352-.23-.234-.306-.547-.306-.938v-.43H45V6.7c0-.625-.191-1.133-.535-1.485-.383-.352-.88-.547-1.53-.547-.727.04-1.224.195-1.568.586M44.082 6.7v.274h-2.447V6.7c0-.39.114-.703.305-.938.23-.234.498-.312.918-.312.383 0 .689.117.918.312.191.235.306.547.306.938">
                    </path>
                    <defs>
                      <pattern id="curve_svg__a" width="1" height="1" patternContentUnits="objectBoundingBox">
                        <use xlink:href="#curve_svg__b" transform="scale(.01408)"></use>
                      </pattern>
                      <image
                        xlink:href="data:image/png;base64,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"
                        id="curve_svg__b" width="71" height="71"></image>
                    </defs>
                  </svg><span class="hidden sm:block">@newmichwill</span>
                </div>
                <div
                  class="gap-0 w-16 min-w-fit sm:w-[76px] flex flex-col items-center justify-center text-2xs font-medium">
                  <img alt="Frax Founder" loading="lazy" width="144" height="144" decoding="async" data-nimg="1"
                    class="h-fit mb-1" style="color:transparent;height:auto;max-width:33px"
                    srcSet="/_next/image?url=%2Finvestors%2Ffrax-founder.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Finvestors%2Ffrax-founder.png&amp;w=384&amp;q=75 2x"
                    src="/_next/image?url=%2Finvestors%2Ffrax-founder.png&amp;w=384&amp;q=75" /><svg
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none"
                    viewBox="0 0 40 14" class="w-8 sm:w-[40px] sm:mb-[2px]">
                    <path fill="url(#frax_svg__a)" d="M0 0h40v14H0z"></path>
                    <defs>
                      <pattern id="frax_svg__a" width="1" height="1" patternContentUnits="objectBoundingBox">
                        <use xlink:href="#frax_svg__b" transform="matrix(.00893 0 0 .02551 0 -.01)"></use>
                      </pattern>
                      <image
                        xlink:href="data:image/png;base64,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"
                        id="frax_svg__b" width="112" height="40"></image>
                    </defs>
                  </svg><span class="hidden sm:block">@samkazemian</span>
                </div>
              </div>
              <div class="w-full justify-around items-center hidden hbase:flex subxl:flex">
                <div
                  class="gap-0 w-16 min-w-fit sm:w-[76px] flex flex-col items-center justify-center text-2xs font-medium">
                  <img alt="Cobie" loading="lazy" width="144" height="144" decoding="async" data-nimg="1" class="mb-1"
                    style="color:transparent;height:auto;max-width:33px"
                    srcSet="/_next/image?url=%2Finvestors%2Fcobie.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Finvestors%2Fcobie.png&amp;w=384&amp;q=75 2x"
                    src="/_next/image?url=%2Finvestors%2Fcobie.png&amp;w=384&amp;q=75" />@cobie
                </div>
                <div
                  class="gap-0 w-16 min-w-fit sm:w-[76px] flex flex-col items-center justify-center text-2xs font-medium">
                  <img alt="blknoiz" loading="lazy" width="216" height="216" decoding="async" data-nimg="1" class="mb-1"
                    style="color:transparent;height:auto;max-width:33px"
                    srcSet="/_next/image?url=%2Finvestors%2Fblknoiz.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Finvestors%2Fblknoiz.png&amp;w=640&amp;q=75 2x"
                    src="/_next/image?url=%2Finvestors%2Fblknoiz.png&amp;w=640&amp;q=75" />@blknoiz06
                </div>
                <div
                  class="gap-0 w-16 min-w-fit sm:w-[76px] flex flex-col items-center justify-center text-2xs font-medium">
                  <img alt="rewkang" loading="lazy" width="216" height="216" decoding="async" data-nimg="1" class="mb-1"
                    style="color:transparent;height:auto;max-width:33px"
                    srcSet="/_next/image?url=%2Finvestors%2Frewkang.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Finvestors%2Frewkang.png&amp;w=640&amp;q=75 2x"
                    src="/_next/image?url=%2Finvestors%2Frewkang.png&amp;w=640&amp;q=75" />@rewkang
                </div>
                <div
                  class="gap-0 w-16 min-w-fit sm:w-[76px] flex flex-col items-center justify-center text-2xs font-medium">
                  <img alt="dovey" loading="lazy" width="216" height="216" decoding="async" data-nimg="1" class="mb-1"
                    style="color:transparent;height:auto;max-width:33px"
                    srcSet="/_next/image?url=%2Finvestors%2Fdovey.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Finvestors%2Fdovey.png&amp;w=640&amp;q=75 2x"
                    src="/_next/image?url=%2Finvestors%2Fdovey.png&amp;w=640&amp;q=75" />@doveywan
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="absolute hidden sm:block -bottom-0.5 -right-0.5 w-fit h-12 bg-black rounded-tl-2xl border-2 border-b-0 border-r-0 border-cblue-600 pl-[11px] py-2.5">
          <div class="flex flex-wrap gap-4 sm:gap-5 justify-center sm:justify-between mb-3 mx-2 sm:mx-0">
            <div class="flex gap-1.5 lg:hidden">
              <div class="flex items-center px-2.5 w-fit py-[3px] gap-2 border-neutrals-900 rounded gradient-box"><img
                  alt="TVL" loading="lazy" width="0" height="0" decoding="async" data-nimg="1"
                  style="color:transparent;height:24px;width:auto" src="/shared/usde.svg" />
                <div class="flex flex-col"><span class="text-2xs text-white font-medium leading-none">TVL</span><span
                    class="text-sm font-bold text-cblue-400">-</span></div>
              </div>
              <div class="flex items-center px-2.5 w-fit py-[3px] gap-2 border-neutrals-900 rounded gradient-box"><img
                  alt="Yield" loading="lazy" width="0" height="0" decoding="async" data-nimg="1"
                  style="color:transparent;height:24px;width:auto" src="/shared/sUSDe.svg" />
                <div class="flex flex-col"><span class="text-2xs text-white font-medium leading-none">Yield</span>
                  <div class="animate-pulse rounded bg-gray-700 w-[32px] mt-1 h-3.5"></div>
                </div>
              </div>
              <div class="flex items-center px-2.5 w-fit py-[3px] gap-2 border-neutrals-900 rounded gradient-box"><img
                  alt="Users" loading="lazy" width="0" height="0" decoding="async" data-nimg="1"
                  style="color:transparent;height:24px;width:auto" src="/shared/ethena.svg" />
                <div class="flex flex-col"><span class="text-2xs text-white font-medium leading-none">Users</span>
                  <div class="animate-pulse rounded bg-gray-700 w-[32px] mt-1 h-3.5"></div>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap justify-center items-center gap-4 lg:gap-[2.2rem] lg:ml-4 lg:mr-6 lg:mt-1"><a
                href="https://discord.com/invite/HVfuYyNm8S"><svg stroke="currentColor" fill="currentColor"
                  stroke-width="0" viewBox="0 0 640 512" class="text-[#808080] h-5 w-auto" width="1em" height="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z">
                  </path>
                </svg></a><a href="https://twitter.com/ethena_labs"><svg stroke="currentColor" fill="currentColor"
                  stroke-width="0" viewBox="0 0 512 512" class="text-[#808080] h-5 w-auto" width="1em" height="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                  </path>
                </svg></a><a href="https://ethena-labs.gitbook.io/ethena-labs/"><img alt="gitbook" loading="lazy"
                  width="0" height="0" decoding="async" data-nimg="1" class="h-5 w-auto" style="color:transparent"
                  src="/shared/gitbook.svg" /></a><a href="https://t.me/ethena_labs"><img alt="telegram" loading="lazy"
                  width="0" height="0" decoding="async" data-nimg="1" class="h-5 w-auto" style="color:transparent"
                  src="/shared/telegram.svg" /></a><a href="https://github.com/ethena-labs"><img alt="github"
                  loading="lazy" width="0" height="0" decoding="async" data-nimg="1" class="h-5 w-auto"
                  style="color:transparent" src="/shared/github.svg" /></a><a
                href="https://ethena.notion.site/Ethena-FAQs-3ccc1437e13343f8b74c0d005e4f5128"><img alt="notion"
                  loading="lazy" width="0" height="0" decoding="async" data-nimg="1" class="h-5 w-auto"
                  style="color:transparent" src="/shared/notion.svg" /></a><a
                href="https://mirror.xyz/0xF99d0E4E3435cc9C9868D1C6274DfaB3e2721341"><img alt="mirror" loading="lazy"
                  width="0" height="0" decoding="async" data-nimg="1" class="h-3.5 w-auto" style="color:transparent"
                  src="/shared/mirror.svg" /></a></div>
          </div><img alt="rounded-corner" loading="lazy" width="16" height="16" decoding="async" data-nimg="1"
            class="absolute hidden sm:block bottom-0 -left-4" style="color:transparent" src="/rounded-corner.svg" /><img
            alt="rounded-corner" loading="lazy" width="16" height="16" decoding="async" data-nimg="1"
            class="absolute hidden sm:block -top-4 right-0" style="color:transparent" src="/rounded-corner.svg" />
        </div>
      </div>
      <div class="sm:hidden">
        <div class="flex flex-wrap gap-4 sm:gap-5 justify-center sm:justify-between mb-3 mx-2 sm:mx-0">
          <div class="flex gap-1.5 lg:hidden">
            <div class="flex items-center px-2.5 w-fit py-[3px] gap-2 border-neutrals-900 rounded gradient-box"><img
                alt="TVL" loading="lazy" width="0" height="0" decoding="async" data-nimg="1"
                style="color:transparent;height:24px;width:auto" src="/shared/usde.svg" />
              <div class="flex flex-col"><span class="text-2xs text-white font-medium leading-none">TVL</span><span
                  class="text-sm font-bold text-cblue-400">-</span></div>
            </div>
            <div class="flex items-center px-2.5 w-fit py-[3px] gap-2 border-neutrals-900 rounded gradient-box"><img
                alt="Yield" loading="lazy" width="0" height="0" decoding="async" data-nimg="1"
                style="color:transparent;height:24px;width:auto" src="/shared/sUSDe.svg" />
              <div class="flex flex-col"><span class="text-2xs text-white font-medium leading-none">Yield</span>
                <div class="animate-pulse rounded bg-gray-700 w-[32px] mt-1 h-3.5"></div>
              </div>
            </div>
            <div class="flex items-center px-2.5 w-fit py-[3px] gap-2 border-neutrals-900 rounded gradient-box"><img
                alt="Users" loading="lazy" width="0" height="0" decoding="async" data-nimg="1"
                style="color:transparent;height:24px;width:auto" src="/shared/ethena.svg" />
              <div class="flex flex-col"><span class="text-2xs text-white font-medium leading-none">Users</span>
                <div class="animate-pulse rounded bg-gray-700 w-[32px] mt-1 h-3.5"></div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap justify-center items-center gap-4 lg:gap-[2.2rem] lg:ml-4 lg:mr-6 lg:mt-1"><a
              href="https://discord.com/invite/HVfuYyNm8S"><svg stroke="currentColor" fill="currentColor"
                stroke-width="0" viewBox="0 0 640 512" class="text-[#808080] h-5 w-auto" width="1em" height="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z">
                </path>
              </svg></a><a href="https://twitter.com/ethena_labs"><svg stroke="currentColor" fill="currentColor"
                stroke-width="0" viewBox="0 0 512 512" class="text-[#808080] h-5 w-auto" width="1em" height="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                </path>
              </svg></a><a href="https://ethena-labs.gitbook.io/ethena-labs/"><img alt="gitbook" loading="lazy"
                width="0" height="0" decoding="async" data-nimg="1" class="h-5 w-auto" style="color:transparent"
                src="/shared/gitbook.svg" /></a><a href="https://t.me/ethena_labs"><img alt="telegram" loading="lazy"
                width="0" height="0" decoding="async" data-nimg="1" class="h-5 w-auto" style="color:transparent"
                src="/shared/telegram.svg" /></a><a href="https://github.com/ethena-labs"><img alt="github"
                loading="lazy" width="0" height="0" decoding="async" data-nimg="1" class="h-5 w-auto"
                style="color:transparent" src="/shared/github.svg" /></a><a
              href="https://ethena.notion.site/Ethena-FAQs-3ccc1437e13343f8b74c0d005e4f5128"><img alt="notion"
                loading="lazy" width="0" height="0" decoding="async" data-nimg="1" class="h-5 w-auto"
                style="color:transparent" src="/shared/notion.svg" /></a><a
              href="https://mirror.xyz/0xF99d0E4E3435cc9C9868D1C6274DfaB3e2721341"><img alt="mirror" loading="lazy"
                width="0" height="0" decoding="async" data-nimg="1" class="h-3.5 w-auto" style="color:transparent"
                src="/shared/mirror.svg" /></a></div>
        </div>
      </div>
    </main>
    <div style="position:fixed;z-index:9999;top:16px;left:16px;right:16px;bottom:16px;pointer-events:none"></div>
  </div>

`;
