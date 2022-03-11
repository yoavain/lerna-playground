export const runc = () => {
    console.log("c");
};

export const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

export const sleepSecond = async () => {
	await sleep(1000);
};
