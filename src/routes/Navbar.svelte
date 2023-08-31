<script lang="ts">
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';

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
								<a {href} class="hover-underline-animation"> <i class={icon} /> {title}</a>
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
										<span>Lightmode: </span><LightSwitch class="container" />
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
		background-color: white;
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
		background-color: white !important;
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
		background-color: white !important;
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
		background-color: white;
	}

	.client-layout-menu-items:before {
		content: '';
		position: absolute;
		left: -34px;
		width: 75px;
		height: 95px;
		top: -25px;
		transform: rotate(-35deg);
		background-color: white !important;
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
