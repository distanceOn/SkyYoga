import { setProgressToObj } from "./setProgressToObj";

const calcPercent = (currentAmount, maxAmount) =>
	(currentAmount * 100) / maxAmount;

const compareAmounts = (currentAmount, maxAmount) => {
	if (currentAmount < 0) {
		return 1;
	} else if (currentAmount > maxAmount) {
		return maxAmount;
	} else {
		return currentAmount;
	}
};

export const onChange = (event, exerciseId, maxAmount, obj) => {
	event.target.value = compareAmounts(+event.target.value, maxAmount);
	setProgressToObj(
		exerciseId,
		calcPercent(+event.target.value, maxAmount),
		obj
	);
};
