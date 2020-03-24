<template>
	<v-app dark class="main-app">
		<Navbar />
		<!-- <router-view /> -->
		<HelloWorld />
		<Footer />
	</v-app>
</template>

<script>
// import components
import Navbar from '@/components/navbar/navbar.default'
import Footer from '@/components/footer/footer.default'
import HelloWorld from '@/components/HelloWorld'

export default {
  name: 'App',
	components: {
		Navbar,
		Footer,
		HelloWorld,
	},
}
</script>

<style lang="scss">
body {
	background-color: #555;
}

h1 {
	margin-bottom: 15px;
	padding: 10px;
}
</style>