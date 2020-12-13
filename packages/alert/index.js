import Alert from './lib/index.vue';
Alert.install = app =>{
	app.component(Alert.name,Alert);
};
export default Alert;