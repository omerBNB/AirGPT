<template>
  <section class="flex-inner-header">
    <section class="inner-header-container">
      <button
        class="where-to-btn"
        ref="where"
        @click="setActiveModal('where')"
        :class="{ isActive: acitveModalInner === 'where' }">
        <form action="">
          <div>Where</div>
          <input class="where-to-input" type="search" placeholder="Search destination" />
        </form>
        <section class="grid stay-where-search" v-if="acitveModalInner === 'where'">
          <div>
            <h2>Trending destinations</h2>
            <section class="counries-search-container">
              <div class="flex">
                <div>
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style="display: block; height: 20px; width: 20px; fill: currentcolor">
                    <path
                      d="m15.9999.33325c6.4433664 0 11.6667 5.22332687 11.6667 11.66665 0 .395185-.0196984.7942624-.0585936 1.1970109-.3656031 3.7857147-2.3760434 7.7525726-5.487905 11.7201691-1.1932825 1.5214248-2.4696691 2.9382012-3.7464266 4.2149447l-.264609.2625401-.2565836.2505683-.4871024.4643445-.3377669.3126669-.2592315.2338445-.7684829.6644749-.6531219-.5633124-.7123549-.6476755-.4871002-.4643445c-.1682693-.1630063-.3422204-.3341398-.5211901-.5131084-1.2767516-1.2767436-2.5531323-2.69352-3.74640918-4.2149449-3.11184685-3.9675963-5.12227757-7.9344539-5.48787896-11.7201677-.03889501-.4027484-.05859326-.8018256-.05859326-1.1970105 0-6.44329813 5.22335863-11.66665 11.66665-11.66665zm0 2c-5.3387224 0-9.66665 4.32792195-9.66665 9.66665 0 .3301812.01653349.665142.04933146 1.004757.32161647 3.3302606 2.17313947 6.9835713 5.07084634 10.6781398.9771881 1.2459122 2.0157692 2.4217661 3.0628871 3.5026159l.5240256.5323924.4974749.4897834.4621846.4404115.2257179-.2133444.4810251-.4660964.252726-.2507558c1.2232503-1.2232369 2.4468714-2.5814442 3.5869296-4.0350084 2.8977203-3.6945683 4.7492518-7.3478787 5.0708697-10.6781384.0327981-.3396149.0493317-.6745755.0493317-1.0047566 0-5.33875305-4.3279026-9.66665-9.6667-9.66665zm.0001 4.66675c2.7614237 0 5 2.23857625 5 5 0 2.7614237-2.2385763 5-5 5s-5-2.2385763-5-5c0-2.76142375 2.2385763-5 5-5zm0 2c-1.6568542 0-3 1.3431458-3 3s1.3431458 3 3 3 3-1.3431458 3-3-1.3431458-3-3-3z"></path>
                  </svg>
                </div>
                <span>Paris</span>
              </div>
              <div class="flex">
                <div>
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style="display: block; height: 20px; width: 20px; fill: currentcolor">
                    <path
                      d="m15.9999.33325c6.4433664 0 11.6667 5.22332687 11.6667 11.66665 0 .395185-.0196984.7942624-.0585936 1.1970109-.3656031 3.7857147-2.3760434 7.7525726-5.487905 11.7201691-1.1932825 1.5214248-2.4696691 2.9382012-3.7464266 4.2149447l-.264609.2625401-.2565836.2505683-.4871024.4643445-.3377669.3126669-.2592315.2338445-.7684829.6644749-.6531219-.5633124-.7123549-.6476755-.4871002-.4643445c-.1682693-.1630063-.3422204-.3341398-.5211901-.5131084-1.2767516-1.2767436-2.5531323-2.69352-3.74640918-4.2149449-3.11184685-3.9675963-5.12227757-7.9344539-5.48787896-11.7201677-.03889501-.4027484-.05859326-.8018256-.05859326-1.1970105 0-6.44329813 5.22335863-11.66665 11.66665-11.66665zm0 2c-5.3387224 0-9.66665 4.32792195-9.66665 9.66665 0 .3301812.01653349.665142.04933146 1.004757.32161647 3.3302606 2.17313947 6.9835713 5.07084634 10.6781398.9771881 1.2459122 2.0157692 2.4217661 3.0628871 3.5026159l.5240256.5323924.4974749.4897834.4621846.4404115.2257179-.2133444.4810251-.4660964.252726-.2507558c1.2232503-1.2232369 2.4468714-2.5814442 3.5869296-4.0350084 2.8977203-3.6945683 4.7492518-7.3478787 5.0708697-10.6781384.0327981-.3396149.0493317-.6745755.0493317-1.0047566 0-5.33875305-4.3279026-9.66665-9.6667-9.66665zm.0001 4.66675c2.7614237 0 5 2.23857625 5 5 0 2.7614237-2.2385763 5-5 5s-5-2.2385763-5-5c0-2.76142375 2.2385763-5 5-5zm0 2c-1.6568542 0-3 1.3431458-3 3s1.3431458 3 3 3 3-1.3431458 3-3-1.3431458-3-3-3z"></path>
                  </svg>
                </div>
                <span>New York</span>
              </div>
              <div class="flex">
                <div>
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style="display: block; height: 20px; width: 20px; fill: currentcolor">
                    <path
                      d="m15.9999.33325c6.4433664 0 11.6667 5.22332687 11.6667 11.66665 0 .395185-.0196984.7942624-.0585936 1.1970109-.3656031 3.7857147-2.3760434 7.7525726-5.487905 11.7201691-1.1932825 1.5214248-2.4696691 2.9382012-3.7464266 4.2149447l-.264609.2625401-.2565836.2505683-.4871024.4643445-.3377669.3126669-.2592315.2338445-.7684829.6644749-.6531219-.5633124-.7123549-.6476755-.4871002-.4643445c-.1682693-.1630063-.3422204-.3341398-.5211901-.5131084-1.2767516-1.2767436-2.5531323-2.69352-3.74640918-4.2149449-3.11184685-3.9675963-5.12227757-7.9344539-5.48787896-11.7201677-.03889501-.4027484-.05859326-.8018256-.05859326-1.1970105 0-6.44329813 5.22335863-11.66665 11.66665-11.66665zm0 2c-5.3387224 0-9.66665 4.32792195-9.66665 9.66665 0 .3301812.01653349.665142.04933146 1.004757.32161647 3.3302606 2.17313947 6.9835713 5.07084634 10.6781398.9771881 1.2459122 2.0157692 2.4217661 3.0628871 3.5026159l.5240256.5323924.4974749.4897834.4621846.4404115.2257179-.2133444.4810251-.4660964.252726-.2507558c1.2232503-1.2232369 2.4468714-2.5814442 3.5869296-4.0350084 2.8977203-3.6945683 4.7492518-7.3478787 5.0708697-10.6781384.0327981-.3396149.0493317-.6745755.0493317-1.0047566 0-5.33875305-4.3279026-9.66665-9.6667-9.66665zm.0001 4.66675c2.7614237 0 5 2.23857625 5 5 0 2.7614237-2.2385763 5-5 5s-5-2.2385763-5-5c0-2.76142375 2.2385763-5 5-5zm0 2c-1.6568542 0-3 1.3431458-3 3s1.3431458 3 3 3 3-1.3431458 3-3-1.3431458-3-3-3z"></path>
                  </svg>
                </div>
                <span>Madrid</span>
              </div>
              <div class="flex">
                <div>
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style="display: block; height: 20px; width: 20px; fill: currentcolor">
                    <path
                      d="m15.9999.33325c6.4433664 0 11.6667 5.22332687 11.6667 11.66665 0 .395185-.0196984.7942624-.0585936 1.1970109-.3656031 3.7857147-2.3760434 7.7525726-5.487905 11.7201691-1.1932825 1.5214248-2.4696691 2.9382012-3.7464266 4.2149447l-.264609.2625401-.2565836.2505683-.4871024.4643445-.3377669.3126669-.2592315.2338445-.7684829.6644749-.6531219-.5633124-.7123549-.6476755-.4871002-.4643445c-.1682693-.1630063-.3422204-.3341398-.5211901-.5131084-1.2767516-1.2767436-2.5531323-2.69352-3.74640918-4.2149449-3.11184685-3.9675963-5.12227757-7.9344539-5.48787896-11.7201677-.03889501-.4027484-.05859326-.8018256-.05859326-1.1970105 0-6.44329813 5.22335863-11.66665 11.66665-11.66665zm0 2c-5.3387224 0-9.66665 4.32792195-9.66665 9.66665 0 .3301812.01653349.665142.04933146 1.004757.32161647 3.3302606 2.17313947 6.9835713 5.07084634 10.6781398.9771881 1.2459122 2.0157692 2.4217661 3.0628871 3.5026159l.5240256.5323924.4974749.4897834.4621846.4404115.2257179-.2133444.4810251-.4660964.252726-.2507558c1.2232503-1.2232369 2.4468714-2.5814442 3.5869296-4.0350084 2.8977203-3.6945683 4.7492518-7.3478787 5.0708697-10.6781384.0327981-.3396149.0493317-.6745755.0493317-1.0047566 0-5.33875305-4.3279026-9.66665-9.6667-9.66665zm.0001 4.66675c2.7614237 0 5 2.23857625 5 5 0 2.7614237-2.2385763 5-5 5s-5-2.2385763-5-5c0-2.76142375 2.2385763-5 5-5zm0 2c-1.6568542 0-3 1.3431458-3 3s1.3431458 3 3 3 3-1.3431458 3-3-1.3431458-3-3-3z"></path>
                  </svg>
                </div>
                <span>Tel-Aviv</span>
              </div>
              <div class="flex">
                <div>
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style="display: block; height: 20px; width: 20px; fill: currentcolor">
                    <path
                      d="m15.9999.33325c6.4433664 0 11.6667 5.22332687 11.6667 11.66665 0 .395185-.0196984.7942624-.0585936 1.1970109-.3656031 3.7857147-2.3760434 7.7525726-5.487905 11.7201691-1.1932825 1.5214248-2.4696691 2.9382012-3.7464266 4.2149447l-.264609.2625401-.2565836.2505683-.4871024.4643445-.3377669.3126669-.2592315.2338445-.7684829.6644749-.6531219-.5633124-.7123549-.6476755-.4871002-.4643445c-.1682693-.1630063-.3422204-.3341398-.5211901-.5131084-1.2767516-1.2767436-2.5531323-2.69352-3.74640918-4.2149449-3.11184685-3.9675963-5.12227757-7.9344539-5.48787896-11.7201677-.03889501-.4027484-.05859326-.8018256-.05859326-1.1970105 0-6.44329813 5.22335863-11.66665 11.66665-11.66665zm0 2c-5.3387224 0-9.66665 4.32792195-9.66665 9.66665 0 .3301812.01653349.665142.04933146 1.004757.32161647 3.3302606 2.17313947 6.9835713 5.07084634 10.6781398.9771881 1.2459122 2.0157692 2.4217661 3.0628871 3.5026159l.5240256.5323924.4974749.4897834.4621846.4404115.2257179-.2133444.4810251-.4660964.252726-.2507558c1.2232503-1.2232369 2.4468714-2.5814442 3.5869296-4.0350084 2.8977203-3.6945683 4.7492518-7.3478787 5.0708697-10.6781384.0327981-.3396149.0493317-.6745755.0493317-1.0047566 0-5.33875305-4.3279026-9.66665-9.6667-9.66665zm.0001 4.66675c2.7614237 0 5 2.23857625 5 5 0 2.7614237-2.2385763 5-5 5s-5-2.2385763-5-5c0-2.76142375 2.2385763-5 5-5zm0 2c-1.6568542 0-3 1.3431458-3 3s1.3431458 3 3 3 3-1.3431458 3-3-1.3431458-3-3-3z"></path>
                  </svg>
                </div>
                <span>New Zealand</span>
              </div>
            </section>
          </div>
          <div class="line-between-where-search"></div>
          <div>
            <h2>Search by region</h2>
            <section class="chose-mainland">
              <div>
                <img
                  class="mainland-img"
                  src="https://res.cloudinary.com/dht4wwjwe/image/upload/v1669832788/ypxaozgl8ypv41zcslzr.jpg"
                  alt="" />
                <div>I'm flexible</div>
              </div>
              <div>
                <img
                  class="mainland-img"
                  src="https://res.cloudinary.com/dht4wwjwe/image/upload/v1669832796/jmoewtj22cydhrxv8igw.webp"
                  alt="" />
                <div>Europe</div>
              </div>
              <div>
                <img
                  class="mainland-img"
                  src="https://res.cloudinary.com/dht4wwjwe/image/upload/v1669832694/iyey3ugv4rrfebpqq4ri.jpg"
                  alt="" />
                <div>France</div>
              </div>
              <div>
                <img
                  class="mainland-img"
                  src="https://res.cloudinary.com/dht4wwjwe/image/upload/v1669832626/rmbkbzyewogvanzfehex.jpg"
                  alt="" />
                <div>United States</div>
              </div>
              <div>
                <img
                  class="mainland-img"
                  src="https://res.cloudinary.com/dht4wwjwe/image/upload/v1669832717/cxz8hpbk9uuotl3arwni.jpg"
                  alt="" />
                <div>United Kingdom</div>
              </div>
              <div>
                <img
                  class="mainland-img"
                  src="https://res.cloudinary.com/dht4wwjwe/image/upload/v1669832771/vgliecdhjbr1pjdqdrl0.jpg"
                  alt="" />
                <div>South America</div>
              </div>
            </section>
          </div>
        </section>
      </button>
      <div class="border-inner-header"></div>
      <button
        class="inner-header-dates-btn"
        ref="checkin"
        @click="setActiveModal('checkin')"
        :class="{ isActive: acitveModalInner === 'checkin' }">
        <div>Check in</div>
        <div>Add dates</div>
        <section
          class="calender-container"
          v-if="acitveModalInner === 'checkin' || acitveModalInner === 'checkout'">
          <!-- <el-calendar class="calendar-inner-section-1" v-model="value" />
          <el-calendar class="calendar-inner-section-2" v-model="value" /> -->
          <VDatePicker v-model.range="range" :columns="columns"/>
          <!-- <VDatePicker v-model.range="range" :columns="columns"/> -->
          <!-- <VCalendar :columns="columns" />     
          <VCalendar :columns="columns" />  -->
          <!-- <VCalendar :rows="2" :step="1" v-model.range="range"/> -->
        </section>
      </button>
      <div class="border-inner-header"></div>
      <button
        class="inner-header-dates-btn"
        @click="setActiveModal('checkout')"
        :class="{ isActive: acitveModalInner === 'checkout' }">
        <div ref="checkout">Check out</div>
        <div>Add dates</div>
      </button>
      <div class="border-inner-header"></div>
      <div
        class="inner-header-search-btn-container"
        @click="setActiveModal('search')"
        :class="{ isActive: acitveModalInner === 'search' }">
        <button class="inner-header-dates-btn-search" ref="search">
          <div>Who</div>
          <div>Add guests</div>
        </button>
        <button class="inner-header-search-btn big">
          <div data-icon="true" data-testid="little-search-icon">
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style="
                display: block;
                fill: none;
                height: 16px;
                width: 16px;
                stroke: currentcolor;
                stroke-width: 5.33333;
                overflow: visible;
              ">
              <g fill="none">
                <path
                  d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
              </g>
            </svg>
          </div>
          <div>Search</div>
        </button>
        <section class="search-inner-header-cotainer" v-if="acitveModalInner === 'search'">
          <div>
            <h2>Adults</h2>
            <p class="search-inner-header-cotainer-p">Ages 13 or above</p>
          </div>
          <div class="flex-inner-search-btns">
            <button class="add-guest-button disabled">
              <span class="_8ovatg"
                ><svg
                  viewBox="-24 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style="
                    display: block;
                    fill: none;
                    height: 12px;
                    width: 12px;
                    stroke: currentcolor;
                    stroke-width: 5.33333;
                    overflow: visible;
                  ">
                  <path d="m2 16h28"></path>
                </svg>
              </span>
            </button>
            <span class="add-guest-span">1</span>
            <button class="add-guest-button">
              <span class="_8ovatg"
                ><svg
                  class="svg"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style="
                    display: block;
                    fill: none;
                    height: 12px;
                    width: 12px;
                    stroke: currentcolor;
                    stroke-width: 5.33333;
                    overflow: visible;
                  ">
                  <path d="m2 16h28m-14-14v28"></path>
                </svg>
              </span>
            </button>
          </div>
          <div>
            <h2>Children</h2>
            <p class="search-inner-header-cotainer-p">Ages 2-12</p>
          </div>
          <div class="flex-inner-search-btns">
            <button class="add-guest-button disabled">
              <span class="_8ovatg"
                ><svg
                  viewBox="-23 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style="
                    display: block;
                    fill: none;
                    height: 12px;
                    width: 12px;
                    stroke: currentcolor;
                    stroke-width: 5.33333;
                    overflow: visible;
                  ">
                  <path d="m2 16h28"></path>
                </svg>
              </span>
            </button>
            <span class="add-guest-span">1</span>
            <button class="add-guest-button">
              <span class="_8ovatg"
                ><svg
                  class="svg"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style="
                    display: block;
                    fill: none;
                    height: 12px;
                    width: 12px;
                    stroke: currentcolor;
                    stroke-width: 5.33333;
                    overflow: visible;
                  ">
                  <path d="m2 16h28m-14-14v28"></path>
                </svg>
              </span>
            </button>
          </div>
          <div>
            <h2>Infants</h2>
            <p class="search-inner-header-cotainer-p">Under 2</p>
          </div>
          <div class="flex-inner-search-btns">
            <button class="add-guest-button disabled">
              <span class="_8ovatg"
                ><svg
                  viewBox="-23 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style="
                    display: block;
                    fill: none;
                    height: 12px;
                    width: 12px;
                    stroke: currentcolor;
                    stroke-width: 5.33333;
                    overflow: visible;
                  ">
                  <path d="m2 16h28"></path>
                </svg>
              </span>
            </button>
            <span class="add-guest-span">1</span>
            <button class="add-guest-button">
              <span class="_8ovatg"
                ><svg
                  class="svg"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style="
                    display: block;
                    fill: none;
                    height: 12px;
                    width: 12px;
                    stroke: currentcolor;
                    stroke-width: 5.33333;
                    overflow: visible;
                  ">
                  <path d="m2 16h28m-14-14v28"></path>
                </svg>
              </span>
            </button>
          </div>
          <div>
            <h2>Pets</h2>
            <p class="plus-animals search-inner-header-cotainer-p">Bringing a service animal?</p>
          </div>
          <div class="flex-inner-search-btns">
            <button class="add-guest-button disabled">
              <span class="_8ovatg"
                ><svg
                  viewBox="-23 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style="
                    display: block;
                    fill: none;
                    height: 12px;
                    width: 12px;
                    stroke: currentcolor;
                    stroke-width: 5.33333;
                    overflow: visible;
                  ">
                  <path d="m2 16h28"></path>
                </svg>
              </span>
            </button>
            <span class="add-guest-span">1</span>
            <button class="add-guest-button">
              <span class="_8ovatg"
                ><svg
                  class="svg"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style="
                    display: block;
                    fill: none;
                    height: 12px;
                    width: 12px;
                    stroke: currentcolor;
                    stroke-width: 5.33333;
                    overflow: visible;
                  ">
                  <path d="m2 16h28m-14-14v28"></path>
                </svg>
              </span>
            </button>
          </div>
        </section>
      </div>
    </section>
  </section>
</template>

<script>
import { ref } from 'vue'
import { useScreens } from 'vue-screen-utils'
export default {
  name: '',
  props: {
    activeModal: String,
  },
  data() {
    return {
      isActive: false,
      value: ref(new Date()),
      acitveModalInner: this.activeModal,
      columns: null,
      expanded: null,
    }
  },
  methods: {
    showWhere() {
      this.isActive = true
    },
    setActiveModal(btnName) {
      this.acitveModalInner = btnName
      // this.acitveModalInner = btnName
    },
  },
  computed: {},
  created() {
    this.acitveModalInner = this.activeModal
    const { mapCurrent } = useScreens({ xs: '0px', sm: '640px', md: '768px', lg: '1024px' })
    this.columns = mapCurrent({ lg: 2 },1)
    // this.expanded = mapCurrent({ lg: false }, true)
  },
  components: {},
}
</script>

