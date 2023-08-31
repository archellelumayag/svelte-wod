<script>
	import Navbar from './Navbar.svelte';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
	import '../app.css';
	import '/static/base.css'
	import Footer from './Footer.svelte';
</script>

<Navbar />


<slot />
<Footer />