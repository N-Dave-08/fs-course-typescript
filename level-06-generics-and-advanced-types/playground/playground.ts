{
	type EventName<T extends string> = `on${Capitalize<T>}`

	type functionEvent = "click" | "submit"

	type buttonEvent = EventName<functionEvent>

	const handlers: Record<buttonEvent, () => void> = {
		onClick: () => {
			console.log("Clicked")
		},
		onSubmit: () => {
			console.log("Submitted")
		}
	}

	handlers.onClick()
}