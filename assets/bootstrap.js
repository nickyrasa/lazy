import { startStimulusApp } from "@symfony/stimulus-bundle";
export const app = startStimulusApp(
	require.context(
		"@symfony/stimulus-bridge/lazy-controller-loader!./controllers",
		true,
		/\.(j|t)sx?$/
	)
);
// const app = startStimulusApp();
// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);
