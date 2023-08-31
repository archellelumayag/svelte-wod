<script>
	const year = new Date().getFullYear();
	import '../app.css';
</script>

<div class="footer-wrapper-fluid card bg-white">
	<div
		class="max-w-[1440px] footer-div relative z-[1] ml-auto mr-auto"
		id="footer-div"
	>
		<div
			class="footer-wrap  text-center border-r-0 border-t-0 border-l-0 py-[1rem]"
		>
			<div class="flex justify-center items-center md:px-[10px]">
				<div class="h-[40px]">
					<a class="mt-[0.5rem]" href="/">
						<img class="h-[40px]" alt="" src="/src/images//wod-pig-s.png" />
					</a>
				</div>
				<div class="ms-[0.5rem] text-[13px] text-color md:px-[5px]">
					Copyright © {year} Terms of Service - Privacy Policy Allkeyshop admin
				</div>
			</div>
		</div>
		<div class="py-[1.5rem]">
			<div class="text-center">
				<ul class="inline-block text-center p-0">
					<li class="float-left px-[0.5rem] footer-menu text-[13px] list-none">
						<a class="relative text-color text-[13px]" href="/">Home</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>

<style>
	.footer-wrap {
    border-bottom: solid 1px gray;
}
</style>
