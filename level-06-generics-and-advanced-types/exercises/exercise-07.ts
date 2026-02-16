{
	type StudentScores = Record<string, number>;

	const scores: StudentScores = {
		Alice: 98,
		Bob: 97,
		Jacob: 87,
	};

	function calcAverage(score: StudentScores): number {
		const values = Object.values(score);
		const sum = values.reduce((acc, score) => acc + score, 0);

		return sum / values.length;
	}
	console.log("average scores of students: ", calcAverage(scores));

	type Status = "pending" | "approved" | "declined";
	type StatusConfig = Record<Status, { color: string; icon: string }>;

	const statusConfig: StatusConfig = {
		pending: {
			color: "yellow",
			icon: "⏳",
		},
		approved: {
			color: "green",
			icon: "✅",
		},
		declined: {
			color: "red",
			icon: "❌",
		},
	};
	console.log("using Record with specific keys: ", statusConfig);
}
