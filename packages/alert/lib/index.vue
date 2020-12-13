<template>
<span>{{msg}}</span>
</template>

<script>
import { defineComponent,ref } from 'vue';

export default defineComponent({
	name:'IAlert',
	setup(){
		const msg = ref('a');
		return {
			msg
		};
	}
});
</script>