<script lang="ts">
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import { popup } from '@skeletonlabs/skeleton';
	import { Table } from '@skeletonlabs/skeleton';
	import type { TableSource } from '@skeletonlabs/skeleton';
	import { tableMapperValues } from '@skeletonlabs/skeleton';

	const sourceData = [
		{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
		{ position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
		{ position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
		{ position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
		{ position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
		{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
		{ position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
		{ position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
		{ position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
		{ position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
		{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
		{ position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
		{ position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
		{ position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
		{ position: 5, name: 'Boron', weight: 10.811, symbol: 'B' }
	];

	let sum = 0;
	for (let i = 0; i < sourceData.length; i++) {
		sum += sourceData[i].weight;
	}

	// console.log(sum.toFixed(2));

	// console.log(sourceData[0].name);
	const tableSimple: TableSource = {
		// A list of heading labels.
		head: [
			'Symbol',
			'Exchange',
			'Sector',
			'Change',
			'Current Price',
			'GF Value',
			'Price-to-GF-Value',
			'DS Score',
			'GF Score',
			'Dividend Yield %(10 y High)',
			'Dividend Yield %(10 y Low)',
			'Dividend Yield %',
			'Continuous Dividend Start Year',
			'Increase Dividend Start Year',
			'Dividend Frequency',
			'Next Dividend Payment Amount',
			'Next Dividend Payment Date',
			'Dividend Earned Since Purchase',
			'Date Added',
			'Gain'
		],
		// The data visibly shown in your table body UI.
		body: tableMapperValues(sourceData, [
			'Symbol',
			'Exchange',
			'Sector',
			'Change',
			'Current Price',
			'GF Value',
			'Price-to-GF-Value',
			'DS Score',
			'GF Score',
			'Dividend Yield %(10 y High)',
			'Dividend Yield %(10 y Low)',
			'Dividend Yield %',
			'Continuous Dividend Start Year',
			'Increase Dividend Start Year',
			'Dividend Frequency',
			'Next Dividend Payment Amount',
			'Next Dividend Payment Date',
			'Dividend Earned Since Purchase',
			'Date Added',
			'Gain'
		]),
		// Optional: The data returned when interactive is enabled and a row is clicked.
		meta: tableMapperValues(sourceData, [
			'position',
			'Symbol',
			'Exchange',
			'Sector',
			'Change',
			'Current Price',
			'GF Value',
			'Price-to-GF-Value',
			'DS Score',
			'GF Score',
			'Dividend Yield %(10 y High)',
			'Dividend Yield %(10 y Low)',
			'Dividend Yield %',
			'Continuous Dividend Start Year',
			'Increase Dividend Start Year',
			'Dividend Frequency',
			'Next Dividend Payment Amount',
			'Next Dividend Payment Date',
			'Dividend Earned Since Purchase',
			'Date Added',
			'Gain'
		]),
		// Optional: A list of footer labels.
		foot: ['Total', '', '<code class="code">5</code>']
	};
	let isCompound = true;
	const compoundToggle = () => {
		document.getElementById('compound-btn');
		// const toggleBtn = document.getElementById('compound-btn');

		// let toggleText = toggleBtn?.textContent;
		// console.log(toggleText);
		if (isCompound) {
			document.getElementById('compound-btn').textContent = 'No Compound';
		} else {
			document.getElementById('compound-btn').textContent = 'Compound';
		}
		isCompound = !isCompound;
		console.log(isCompound);
	};

	const riskOpt = [
		{ name: 'Low', value: 'low' },
		{ name: 'Medium', value: 'medium' },
		{ name: 'High', value: 'high' }
	];
	const repeatPurchaseOpt = [
		{ name: 'Daily', value: 'daily' },
		{ name: 'Weekly', value: 'weekly' },
		{ name: 'monthly', value: 'monthly' },
		{ name: 'Every two months', value: 'every_two_months' }
	];

	const accumulateForOpt = [
		{ name: '6 Months', value: '6_mm' },
		{ name: '1 Year', value: '1_yyyy' },
		{ name: '2 Years', value: '2_yyyy' },
		{ name: '3 Years', value: '3_yyyy' },
		{ name: '4 Years', value: '4_yyyy' },
		{ name: '5 Years', value: '5_yyyy' },
		{ name: '6 Years', value: '6_yyyy' },
		{ name: '7 Years', value: '7_yyyy' },
		{ name: '8 Years', value: '8_yyyy' },
		{ name: '9 Years', value: '9_yyyy' }
	];

	const startingOpt = [
		{ name: '6 Months', value: '6_mm' },
		{ name: '1 Year', value: '1_yyyy' },
		{ name: '2 Years', value: '2_yyyy' },
		{ name: '3 Years', value: '3_yyyy' },
		{ name: '4 Years', value: '4_yyyy' },
		{ name: '5 Years', value: '5_yyyy' },
		{ name: '6 Years', value: '6_yyyy' },
		{ name: '7 Years', value: '7_yyyy' },
		{ name: '8 Years', value: '8_yyyy' },
		{ name: '9 Years', value: '9_yyyy' },
		{ name: 'On specific date', value: 'custom_date' }
	];

	const compareAssetsOpt = [
		{ name: 'Yes', value: true },
		{ name: 'No', value: false }
	];

	const repeatPurchasePopup: PopupSettings = {
		event: 'focus-click',
		target: 'repeatPurchasePopup',
		placement: 'bottom',
		closeQuery: '.listbox-item'
	};

	const accumulatePopup: PopupSettings = {
		event: 'focus-click',
		target: 'accumulatePopup',
		placement: 'bottom',
		closeQuery: '.listbox-item'
	};

	const startingPopup: PopupSettings = {
		event: 'focus-click',
		target: 'startingPopup',
		placement: 'bottom',
		closeQuery: '.listbox-item'
	};
	const compareAssetsPopup: PopupSettings = {
		event: 'focus-click',
		target: 'compareAssetsPopup',
		placement: 'bottom',
		closeQuery: '.listbox-item'
	};

	const riskPopup: PopupSettings = {
		event: 'focus-click',
		target: 'riskPopup',
		placement: 'bottom',
		closeQuery: '.listbox-item'
	};

	let repeatPurchaseName: string;
	let accumulateVal: string;
	let startingVal: string;
	let compareVal: string;
	let riskVal: string;

	const months = [
		{ name: 'January', sName: 'Jan', borderColor: 'border-[#b181a0]', mm: 1 },
		{ name: 'Febuary', sName: 'Feb', borderColor: 'border-[#d7817d]', mm: 2 },
		{ name: 'March', sName: 'Mar', borderColor: 'border-[#6c5100]', mm: 3 },
		{ name: 'April', sName: 'Apr', borderColor: 'border-[#996500]', mm: 4 },
		{ name: 'May', sName: 'May', borderColor: 'border-[#456f2c]', mm: 5 },
		{ name: 'June', sName: 'Jun', borderColor: 'border-[#5c79a3]', mm: 6 },
		{ name: 'July', sName: 'Jul', borderColor: 'border-[#959595]', mm: 7 },
		{ name: 'August', sName: 'Aug', borderColor: 'border-[var(--text-color)]', mm: 8 },
		{ name: 'September', sName: 'Sep', borderColor: 'border-[var(--text-color)]', mm: 9 },
		{ name: 'October', sName: 'Oct', borderColor: 'border-[var(--text-color)]', mm: 10 },
		{ name: 'November', sName: 'Nov', borderColor: 'border-[var(--text-color)]  ', mm: 11 },
		{ name: 'December', sName: 'Dec', borderColor: 'border-[var(--text-color)]', mm: 12 }
	];
</script>

<div class="mt-[83px]">
	<section
		class="home-section bg-section card relative pb-28 bg-fixed bg-repeat bg-[length:150%_100%] home-section-lightmode-before"
	>
		<div class="content-wrapper max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8">
			<div class="pt-[130px]">
				<div class="mb-8 text-center text-color text-[25px]">Dollar Cost Averaging Bitcoin</div>
				<div class="row-auto justify-center">
					<div class="grid-cols-3 mb-5">
						<div class="flex justify-center items-center rounded">
							<div
								class="border-animation relative overflow-hidden live-counter text-center p-[1rem]"
							>
								<span
									class="absolute top-0 left-0 w-[100%] h-[2px] bg-gradient-to-r from-[#0c002b] to-[#7e63fb]"
								/>
								<span
									class="absolute top-0 right-0 w-[2px] h-[100%] bg-gradient-to-b from-[#0c002b] to-[#7e63fb]"
								/>
								<span
									class="absolute bottom-0 left-0 w-[100%] h-[2px] bg-gradient-to-l from-[#0c002b] to-[#7e63fb]"
								/>
								<span
									class="absolute top-0 left-0 w-[2px] h-[100%] bg-gradient-to-t from-[#0c002b] to-[#7e63fb]"
								/>
								<p class="text-[40px] text-color">1234567</p>
								<p class="text-sm text-color font-medium pt-4">
									Current year counter passive income from dividend.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="grid mt-[50px] grid-cols-4 gap-5 lg:grid-cols-2 md:grid-cols-1">
					<div class="dca-card-1 h-[136px] card bg-[#fff] relative rounded-[5px]">
						<div
							class="h-[70px] w-[70px] variant-filled-secondary rounded-[5px] absolute mt-[-25px] ml-[10px] flex items-center justify-center"
						>
							<i class="fa-solid fa-dollar-sign text-[35px] text-[white]" />
						</div>
						<div class="w-[auto] min-h-[130px] flex items-start pt-[15px] justify-end mr-5">
							<div class="z-[2] text-end mb-[50px]">
								<label class="text-[20px] font-bold text-color">$1,570</label>
								<p class="text-color">Total Invested</p>
							</div>
						</div>
					</div>
					<div class="dca-card-1 h-[136px] card bg-[#fff] relative rounded-[5px]">
						<div
							class="h-[70px] w-[70px] variant-filled-secondary rounded-[5px] absolute mt-[-25px] ml-[10px] flex items-center justify-center"
						>
							<i class="fa-solid fa-chart-line text-[35px] text-[white]" />
						</div>
						<div class="w-[auto] min-h-[130px] flex items-start pt-[15px] justify-end mr-5">
							<div class="z-[2] text-end mb-[50px]">
								<label class="text-[20px] font-bold text-color">$1,415</label>
								<p class="text-color">6,230,000.00 Satoshis</p>
								<p class="text-color">Total Value</p>
							</div>
						</div>
					</div>
					<div class="dca-card-1 h-[136px] card bg-[#fff] relative rounded-[5px]">
						<div
							class="h-[70px] w-[70px] variant-filled-secondary rounded-[5px] absolute mt-[-25px] ml-[10px] flex items-center justify-center"
						>
							<i class="fa-solid fa-arrow-trend-down text-[35px] text-[white]" />
						</div>
						<div class="w-[auto] min-h-[130px] flex items-start pt-[15px] justify-end mr-5">
							<div class="z-[2] text-end">
								<label class="text-[20px] font-bold text-color">-9.81%</label>
								<p class="text-color">Percent Change</p>
							</div>
						</div>
					</div>
					<div class="dca-card-1 h-[136px] card bg-[#fff] relative rounded-[5px]">
						<div
							class="h-[70px] w-[70px] variant-filled-secondary rounded-[5px] absolute mt-[-25px] ml-[10px] flex items-center justify-center"
						>
							<i class="fa-brands fa-bitcoin text-[35px] text-[white]" />
						</div>
						<div class="w-[auto] min-h-[130px] flex items-start pt-[15px] justify-end mr-5">
							<div class="z-[2] text-end mt-[0]">
								<label class="text-[20px] font-bold text-color">Buy Bitcoin</label>
								<p class="text-color">On Etoro</p>
								<br />
								<button type="button" class="rounded-[5px] btn variant-filled-primary w-[100px] text-white">Buy</button>
							</div>
						</div>
					</div>
				</div>
				<div class="grid second-section grid-cols-4 lg:grid-cols-1 mt-[1.3rem] gap-5">
					<div class="h-[auto] col-start-1 col-end-2 lg:col-auto rounded-[5px]">
						<div class="mb-5 flex justify-center items-center">
							<span class="p-buttonset w-[100%] relative">
								<div class="btn-group variant-filled-secondary w-[100%]">
									<button class="w-[50%]" on:click={compoundToggle}>
										<i class="fa-solid fa-repeat" /> <span id="compound-btn">Compound</span>
									</button>
									<!-- <button class="w-[50%] ">Risk</button> -->
									<button
										class="btn variant-filled-secondary rounded-l-none w-[50%] justify-around"
										use:popup={riskPopup}
									>
										<span class="capitalize">{riskVal ?? 'Risk'}</span>
									</button>
								</div>
								<div
									class="card shadow-xl w-[50%] py-2 z-[5] w-container absolute"
									data-popup="riskPopup"
								>
									<ListBox rounded="rounded-none">
										{#each riskOpt as { name, value }}
											<ListBoxItem bind:group={riskVal} {name} {value}>{name}</ListBoxItem>
										{/each}
									</ListBox>
								</div>
							</span>
						</div>
						<div class="dca-card card bg-[#fff] text-color rounded-[5px]">
							<div class="rounded-[5px] py-[10px]">
								<h2 class="ps-5 mb-6">DCA Settings</h2>
								<div class="px-5 mb-[10px]">
									<label class="label">
										<span>Purchase Amount</span>
										<div class="flex relative">
											<i
												class="absolute z-[1] text-[20px] fa-solid fa-dollar-sign mt-[10px] ms-[15px]"
											/>
											<input class="input variant-outline-secondary ps-[40px]" value="0" />
										</div>
									</label>
								</div>
								<div class="px-5 mb-[10px] relative">
									<label class="text-[16px]">Repeat a Purchase</label>
									<button
										class="btn variant-filled-secondary container justify-between hover:z-[1]"
										use:popup={repeatPurchasePopup}
									>
										<span class="capitalize">{repeatPurchaseName ?? 'Select One'}</span>
									</button>

									<div
										class="card shadow-xl py-2 z-[5] w-container absolute w-[90%]"
										data-popup="repeatPurchasePopup"
									>
										<ListBox rounded="rounded-none">
											{#each repeatPurchaseOpt as { name, value }}
												<ListBoxItem bind:group={repeatPurchaseName} {name} {value}
													>{name}</ListBoxItem
												>
											{/each}
										</ListBox>
									</div>
								</div>
								<div class="px-5 mb-[10px] relative">
									<label class="text-[16px]">Accumulate For</label>
									<button
										class="btn variant-filled-secondary container justify-between hover:z-[1]"
										use:popup={accumulatePopup}
									>
										<span class="capitalize">{accumulateVal ?? 'Select One'}</span>
									</button>

									<div
										class="card shadow-xl z-[5] py-2 absolute w-[90%]"
										data-popup="accumulatePopup"
									>
										<ListBox rounded="rounded-none">
											{#each accumulateForOpt as { name, value }}
												<ListBoxItem bind:group={accumulateVal} {name} {value}>{name}</ListBoxItem>
											{/each}
										</ListBox>
									</div>
								</div>
								<div class="px-5 mb-[10px] relative">
									<label class="text-[16px]">Starting</label>
									<button
										class="btn variant-filled-secondary container justify-between hover:z-[1"
										use:popup={startingPopup}
									>
										<span class="capitalize">{startingVal ?? 'Select One'}</span>
									</button>

									<div
										class="card shadow-xl z-[5] py-2 absolute w-[90%]"
										data-popup="startingPopup"
									>
										<ListBox rounded="rounded-none">
											{#each startingOpt as { name, value }}
												<ListBoxItem bind:group={startingVal} {name} {value}>{name}</ListBoxItem>
											{/each}
										</ListBox>
									</div>
								</div>
								<div class="px-5 mb-[10px] relative">
									<label class=" text-[16px]">Compare to other assets?</label>
									<button
										class="btn variant-filled-secondary container justify-between hover:z-[1"
										use:popup={compareAssetsPopup}
									>
										<span class="capitalize">{compareVal ?? 'Select One'}</span>
									</button>

									<div
										class="card shadow-xl py-2 z-[5] absolute w-[90%]"
										data-popup="compareAssetsPopup"
									>
										<ListBox rounded="rounded-none">
											{#each compareAssetsOpt as { name, value }}
												<ListBoxItem bind:group={compareVal} {name} {value}>{name}</ListBoxItem>
											{/each}
										</ListBox>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						class="card bg-[#fff] dca-portfolio h-[460px] col-start-2 col-end-5 lg:col-auto rounded-[5px] shadow-md"
					/>
				</div>
				<div class="grid third-section grid-cols-10 lg:grid-cols-1 mt-10 gap-5">
					<div class="grid items-end">
						<div
							class="dca-year h-[90px] w-auto flex justify-center items-center border border-solid border-1 border-[var(--text-color)]"
						>
							<label class="text-[16px]">2013</label>
						</div>
					</div>
					<div class="col-start-2 col-end-11 lg:col-auto">
						<div class="grid grid-cols-12 lg:grid-cols-6 md:grid-cols-4 gap-3">
							{#each months as { name, sName, borderColor }}
								<div class="text-center">
									<label class="text-[16px]">{sName}</label>
									<div
										class="h-[90px] mt-[5px] border border-solid border-1 {borderColor}"
									/>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="home-section-1 bg-no-repeat relative pb-[40px] pt-[10px]">
		<div class="content-wrapper relative max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8">
			<div class="mt-[2.5rem]">
				<div class="table-container min-h-[900px]">
					<div class="table-container">
						<!-- Native Table Element -->
						<table class="table table-hover table-comfortable">
							<thead>
								<tr>
									<th>Position</th>
									<th>Name</th>
									<th>Symbol</th>
									<th>Weight</th>
								</tr>
							</thead>
							<tbody>
								{#each sourceData as row}
									<tr>
										<td>{row.position}</td>
										<td>{row.name}</td>
										<td>{row.symbol}</td>
										<td>{row.weight}</td>
									</tr>
								{/each}
							</tbody>
							<tfoot>
								<tr>
									<th colspan="3">Calculated Total Weight</th>
									<td class="font-bold">{sum.toFixed(2)}</td>
								</tr>
							</tfoot>
						</table>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	.bg-section {
		background-image: linear-gradient(to right, #fff 25%, transparent 100%),
			linear-gradient(to bottom, #fff 3%, transparent 30%),
			url('/src/images/osmosis-home-bg-pattern_1.svg');
	}
	.border-animation span:nth-child(1) {
		animation: bd-animate-span-1 2s linear infinite;
	}

	.border-animation span:nth-child(2) {
		animation: bd-animate-span-2 2s linear infinite;
		animation-delay: 1s;
	}

	.border-animation span:nth-child(3) {
		animation: bd-animate-span-3 2s linear infinite;
	}

	.border-animation span:nth-child(4) {
		animation: bd-animate-span-4 2s linear infinite;
		animation-delay: 1s;
	}

	@keyframes bd-animate-span-1 {
		0% {
			transform: translateX(-100%);
		}

		100% {
			transform: translateX(100%);
		}
	}

	@keyframes bd-animate-span-2 {
		0% {
			transform: translateY(-100%);
		}

		100% {
			transform: translateY(100%);
		}
	}

	@keyframes bd-animate-span-3 {
		0% {
			transform: translateX(100%);
		}

		100% {
			transform: translateX(-100%);
		}
	}

	@keyframes bd-animate-span-4 {
		0% {
			transform: translateY(100%);
		}

		100% {
			transform: translateY(-100%);
		}
	}

	/* End of border animation 1 */
	.dca-card-1::before {
		position: absolute;
		content: '';
		background: url('/src/images/hexabackground-purple.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		opacity: 0.2;
		top: 0px;
		right: 0px;
		bottom: 0px;
		left: 0px;
	}
	.dca-card-1,
	.dca-card,
	.dca-portfolio {
		/* background-color: white; */
		box-shadow: 0 1px 4px 0 rgb(0 0 0 / 14%);
		border: solid 1px rgba(0, 0, 0, 0.125);
	}
	.dca-card-header {
		border-bottom: solid 1px rgba(0, 0, 0, 0.125);
	}

	.home-section-darkmode-before::before {
		content: '';
		width: 100%;
		height: 64px;
		position: absolute;
		bottom: -0.5%;
		left: 0;
		background-size: auto;
		background-repeat: repeat no-repeat;
		background-position: 0vw bottom;
		background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200 134' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 0C22.4434 -1 28.9842 2 55 24C94.1849 54 121.997 57 158.5 58C198.5 60 200 44 240 52C280 59 320 89 360 89C400 89 440 59 480 54C520 49 560 69 600 84C640 99 680 109 720 114C760 119 800 119 840 104C880 89 920 59 960 62C1000 64 1040 99 1080 94C1120 89 1127.5 59 1147.5 37C1171.48 11 1185.65 0 1200 0V134H1180C1160 134 1120 134 1080 134C1040 134 1000 134 960 134C920 134 880 134 840 134C800 134 760 134 720 134C680 134 640 134 600 134C560 134 520 134 480 134C440 134 400 134 360 134C320 134 280 134 240 134C200 134 160 134 120 134C80 134 40 134 20 134H0V0.0103865Z' fill='%231b2739'/></svg>");
	}

	.home-section-lightmode-before::before {
		content: '';
		width: 100%;
		height: 64px;
		position: absolute;
		bottom: -0.5%;
		left: 0;
		background-size: auto;
		background-repeat: repeat no-repeat;
		background-position: 0vw bottom;
		background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200 134' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 0C22.4434 -1 28.9842 2 55 24C94.1849 54 121.997 57 158.5 58C198.5 60 200 44 240 52C280 59 320 89 360 89C400 89 440 59 480 54C520 49 560 69 600 84C640 99 680 109 720 114C760 119 800 119 840 104C880 89 920 59 960 62C1000 64 1040 99 1080 94C1120 89 1127.5 59 1147.5 37C1171.48 11 1185.65 0 1200 0V134H1180C1160 134 1120 134 1080 134C1040 134 1000 134 960 134C920 134 880 134 840 134C800 134 760 134 720 134C680 134 640 134 600 134C560 134 520 134 480 134C440 134 400 134 360 134C320 134 280 134 240 134C200 134 160 134 120 134C80 134 40 134 20 134H0V0.0103865Z' fill='%23D9D6FC'/></svg>");
	}
	.home-section-1 {
		background-size: 150% 100%, cover;
		background-image: linear-gradient(to bottom, #d9d6fc 10%, transparent 70%),
			url('/src/images/light.png');
	}

	.table thead th {
		white-space: nowrap;
	}
</style>
