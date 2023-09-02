<script lang="ts">
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import type { ChangeEventHandler } from 'svelte/elements';

	const popupClick: PopupSettings = {
		event: 'click',
		target: 'popupClick',
		placement: 'bottom'
	};

	const navsContent = [
		{
			title: 'Home',
			href: '/',
			icon: 'fa-solid fa-house'
		},
		{
			title: 'About Us',
			href: '/about',
			icon: 'fa-solid fa-id-card'
		},
		{
			title: 'What we Do',
			href: '/about',
			icon: 'fa-solid fa-cloud'
		}
	];

	// const toggleSwitch = document.querySelector('.client-header-item');
	// console.log(toggleSwitch);

	// function switchTheme(e ) {
	//     if (e.target.checked) {
	//         document.documentElement.setAttribute('data-theme', 'dark');
	//     }
	//     else {
	//         document.documentElement.setAttribute('data-theme', 'light');
	//     }
	// }

	// toggleSwitch!.addEventListener('change', switchTheme, false);

	function toggleMode() {
		console.log('clicked');
		const checkWeb = document.querySelector('path');
		// checkWeb!.getAttribute("d")
		// let text = checkWeb!.getAttribute("data-theme2");
		const toggleHTML = document.querySelector('html');

		toggleHTML!.setAttribute('name', 'helloButton');
		const iconMode = checkWeb!.getAttribute('d');
		let section1Id = document.getElementById('home-section-1');
		let section2Id = document.getElementById('home-section-2');

		if (
			iconMode ==
			'M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z'
		) {
			toggleHTML!.setAttribute('data-theme2', 'dark');
			
			section1Id!.classList.remove('home-section-lightmode-before');
			section1Id!.classList.add('home-section-darkmode-before');

			section2Id!.classList.remove('home-section-1');
			section2Id!.classList.add('home-section-1-darkmode');
		} else {
			toggleHTML!.setAttribute('data-theme2', 'light');

			section1Id!.classList.add('home-section-lightmode-before');
			section1Id!.classList.remove('home-section-darkmode-before');

			section2Id!.classList.remove('home-section-1-darkmode');
			section2Id!.classList.add('home-section-1');
		}
	}
</script>

<div class="card client-layout-header">
	<nav class="header-content">
		<div class="flex justify-between">
			<div class="layout-content-logo w-2/4">
				<div class="logo-wrapper">
					<a href="/" class="flex">
						<img class="logo-normal" src="/src/images/wod-pig-s.png" alt="wod logo" />
					</a>
				</div>
			</div>
			<div class="client-layout-menu-items justify-center relative">
				<div class="flex">
					<ul class="flex shrink-0 m-0 p-0">
						{#each navsContent as { title, href, icon }}
							<li
								class="client-header-item inline-flex text-[#495057] items-center z-[1] px-5 lg:hidden"
							>
								<a {href} class="hover-underline-animation text-[var(--text-color)]">
									<i class={icon} /> {title}</a
								>
							</li>
						{/each}
						<div class="flex items-center">
							<button type="button" class=" h-[40px] btn variant-filled-secondary lg:hidden">
								<span> <i class="fa-solid fa-phone" /> </span>
								<span>Contact</span>
							</button>
						</div>
						<div class="divider flex items-center ps-3">
							<div class="border h-[50%]" />
						</div>
						<div class="flex items-center px-5 z-[1] relative">
							<button type="button" class="btn-icon variant-filled-secondary" use:popup={popupClick}
								><i class=" fa-solid fa-gear" /></button
							>
							<div
								class="card p-4 variant-filled-surface w-[200px] py-[10px]"
								data-popup="popupClick"
							>
								<div class="arrow variant-filled-surface" />
								<ul class="popup-ul">
									<div class="flex justify-between py-1 px-1">
										<span>Lightmode: </span><LightSwitch on:click={toggleMode} />
									</div>
									{#each navsContent as { title, href, icon }}
										<li class="client-header-item-popup py-1 container items-center z-[1] px-1">
											<a {href}> <i class={icon} /> {title}</a>
										</li>
									{/each}
								</ul>
							</div>
						</div>
					</ul>
				</div>
			</div>
		</div>
	</nav>
</div>

<style>
	.layout-topbar-menu {
		margin-left: 0;
		position: absolute;
		flex-direction: column;
		background-color: var(--surface-overlay);
		box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.02), 0px 0px 2px rgba(0, 0, 0, 0.05),
			0px 1px 4px rgba(0, 0, 0, 0.08);
		border-radius: 12px;
		padding: 1rem;
		right: 4.5rem;
		top: 5.5rem;
		min-width: 15rem;
		display: none;
		-webkit-animation: scalein 0.15s linear;
		animation: scalein 0.15s linear;

		&.layout-topbar-menu-active {
			display: block;
		}
	}

	.client-layout-header {
		position: fixed;
		z-index: 997;
		top: 0;
		position: fixed;
		background-color: var(--primary-color);
		box-shadow: 0 0.15rem 1.75rem 0 rgb(0 0 0 / 15%);
		width: 100%;
	}

	.header-content:before {
		background-image: url('/src/images/hex-bg.png');
		background-size: contain;
		position: absolute;
		content: '';
		opacity: 0.7;
		top: 0px;
		right: 0px;
		bottom: 0px;
		left: 0px;
	}

	.logo-wrapper {
		position: relative;
		overflow: hidden;
		width: 305px;
	}

	.logo-wrapper:before {
		content: '';
		position: absolute;
		z-index: 1;
		top: 14px;
		right: 20px;
		width: 75px;
		height: 95px;
		transform: rotate(-35deg);
		background-color: var(--primary-color);
	}

	.logo-normal {
		width: 250px;
	}

	.logo-sticky {
		width: 230px;
	}

	.layout-content-logo img {
		position: relative;
		justify-content: center;
		align-items: center;
		z-index: 5;
		background-color: var(--primary-color);
		padding-top: 1rem;
		padding-bottom: 1rem;
		padding-left: 40px;
		padding-right: 40px;
	}

	.client-header-item {
		list-style: none;
	}

	.client-layout-menu-items {
		display: flex;
		position: relative;
		padding: 0px 40px 0px 16px;
		background-color: var(--primary-color);
	}

	.client-layout-menu-items:before {
		content: '';
		position: absolute;
		left: -34px;
		width: 75px;
		height: 95px;
		top: -25px;
		transform: rotate(-35deg);
		background-color: var(--primary-color);
	}

	.hover-underline-animation {
		display: inline-block;
		position: relative;
	}

	.hover-underline-animation::after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: var(--primary-color);
		transform-origin: bottom right;
		transition: transform 0.25s ease-out;
	}

	.hover-underline-animation:hover::after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}
	.client-header-item-popup:hover a {
		color: white;
	}
	.client-header-item-popup:hover {
		cursor: pointer;
		background-color: #495057;
	}

	.client-header-item-popup {
		visibility: hidden;
	}
	.popup-ul {
		height: 30px;
	}
	/* .client-header-item a{
		transition: 0.1s;
	} */
	.client-header-item a {
		position: relative;
	}

	.hover-underline-animation {
		display: inline-block;
		position: relative;
	}

	.hover-underline-animation::after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: rgb(var(--color-secondary-500));
		transform-origin: bottom right;
		transition: transform 0.25s ease-out;
	}

	@media only screen and (max-width: 1023px) {
		.client-header-item-popup {
			visibility: visible;
		}
		.popup-ul {
			height: auto;
		}
	}
</style>
