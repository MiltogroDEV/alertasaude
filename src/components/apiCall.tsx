export async function apiCall(
	root: string,
	method: "GET" | "POST" | "PUT" | "DELETE",
	data?: unknown
) {
	const res = await fetch(`http://localhost:8080${root}`, {
		method,
		headers: {
			"Content-Type": "application/json",
		},
		body: method !== "GET" ? JSON.stringify(data) : undefined,
	});

	if (!res.ok) {
		const errMsg = await res.text();
		throw new Error(`Erro na API: ${res.status} - ${errMsg}`);
	}

	return await res.json();
}