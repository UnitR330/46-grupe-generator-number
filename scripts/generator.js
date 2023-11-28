function findMostFrequentPairs(input) {
    const pairs = Array(100).fill(0);

    for (let i = 1; i < input.length; i++) {
        const pair = +input[i - 1] * 10 + +input[i];
        pairs[pair]++;
    }

    const mostFrequentCount = Math.max(...pairs);
    const mostFrequentPairs = pairs
        .map((count, index) => (count === mostFrequentCount ? index : -1))
        .filter((index) => index !== -1)
        .map((pair) => (pair < 10 ? '0' + pair : '' + pair));

    return {
        mostFrequentPairs,
        mostFrequentCount,
    };
}

function findAndDisplayPairs() {
    const userInput = document.getElementById('userInput').value;
    const resultContainer = document.getElementById('resultContainer');
    const mostFrequentPairsElement = document.getElementById('mostFrequentPairs');
    const occurrencesElement = document.getElementById('occurrences');

    if (userInput.trim() === '') {
        resultContainer.innerHTML = '<p>Please enter a valid string.</p>';
        return;
    }

    const result = findMostFrequentPairs(userInput);

    mostFrequentPairsElement.textContent = `Most Frequent Pairs: ${result.mostFrequentPairs.join(', ')}`;
    occurrencesElement.textContent = `Occurrences: ${result.mostFrequentCount}`;
}

















/*






function findMostFrequentPairs(input) {
    const pairsCount = {};

    for (let i = 1; i < input.length; i++) {
        const pair = input.slice(i - 1, i + 1);
        pairsCount[pair] = (pairsCount[pair] || 0) + 1;
    }

    const mostFrequentPairs = [];
    let mostFrequentCount = 0;

    for (const pair in pairsCount) {
        if (pairsCount[pair] > mostFrequentCount) {
            mostFrequentPairs.length = 0;
            mostFrequentPairs.push(pair);
            mostFrequentCount = pairsCount[pair];
        } else if (pairsCount[pair] === mostFrequentCount) {
            mostFrequentPairs.push(pair);
        }
    }

    return {
        mostFrequentPairs,
        mostFrequentCount,
    };
}

function findAndDisplayPairs() {
    const userInput = document.getElementById('userInput').value;
    const resultContainer = document.getElementById('resultContainer');
    const mostFrequentPairsElement = document.getElementById('mostFrequentPairs');
    const occurrencesElement = document.getElementById('occurrences');

    if (userInput.trim() === '') {
        resultContainer.innerHTML = '<p>Please enter a valid string.</p>';
        return;
    }

    const result = findMostFrequentPairs(userInput);

    mostFrequentPairsElement.textContent = `Most Frequent Pairs: ${result.mostFrequentPairs.join(', ')}`;
    occurrencesElement.textContent = `Occurrences: ${result.mostFrequentCount}`;
}
