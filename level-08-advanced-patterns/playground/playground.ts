async function fetchWithTimeout(url: string, timeoutMs: number) {
	const controller = new AbortController();
	const timeout = setTimeout(() => controller.abort(), timeoutMs);

	try {
		const res = await fetch(url, { signal: controller.signal });
		return res;
	} finally {
		clearTimeout(timeout);
	}
}
