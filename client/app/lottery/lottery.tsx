import { useEffect, useState, type ChangeEvent } from 'react';
import { ApiClient, type LotteryResponseDTO } from './ApiClient';

export function Lottery() {
    const defaultSelections: Array<number> = [];
    const defaultWinningData: LotteryResponseDTO = {};
    const defaultMatchingNumbers: Array<number> = [];
    const [selections, setSelections] = useState(defaultSelections);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [winningData, setWinningData] = useState(defaultWinningData);
    const [matchingNumbers, setMatchingNumbers] = useState(defaultMatchingNumbers);

    useEffect(() => {
        clear();
    }, []);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const value: number = parseInt(event.target.value);
        const isChecked: boolean = event.target.checked;
        if (isChecked === true) {
            if (selections.length >= 6) {
                alert("You can only pick 6 numbers");
            } else {
                if (selections.includes(value) === false) {
                    // add selection
                    setSelections([...selections, value]);
                }
            }
        } else {
            // remove selection
            setSelections(selections.filter(item => item !== value));
        }
    }

    function reset() {
        setSelections(defaultSelections);
        setIsSubmitting(false);
        setWinningData(defaultWinningData);
        setMatchingNumbers(defaultMatchingNumbers);
    }

    function clear() {
        setSelections([]);
    }

    function randomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function quickPick() {
        const picks: Array<number> = [];
        while (picks.length < 6) {
            const randomPick = randomInt(1, 69);
            if (picks.includes(randomPick) === false) {
                picks.push(randomPick);
            }
        }
        setSelections(picks);
    }

    function timestampToStr(ts?: number): string {
        return ts ? new Date(ts).toLocaleString() : "";
    }

    async function submit() {
        if (selections.length === 6) {
            setIsSubmitting(true);
            const data: LotteryResponseDTO = await ApiClient.getInstance().fetchWinningLotteryNumbers();
            const matches: Array<number> = [];
            selections.forEach((selection, index) => {
                if (data.results?.includes(selection) === true) {
                    matches.push(selection);
                }
            });
            setMatchingNumbers(matches);
            setWinningData(data);
        } else {
            alert("You must select 6 numbers");
        }
    }

    return (
        <main className="flex items-center justify-center pt-5 pb-4">
            <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
                <header className="flex flex-col items-center gap-9">
                    {selections.length > 0 ? (
                        <div>
                            Lottery selections:&nbsp;
                            {selections.sort((a, b) => a - b).join(", ")}
                        </div>
                    ) : (
                        <div>Lottery</div>
                    )}
                </header>
                {isSubmitting === true && winningData.timestamp !== null ? (
                    <div>
                        <ul>
                            <li>Winners {winningData.results?.join(", ")}</li>
                            <li>Timestamp {timestampToStr(winningData.timestamp)}</li>
                            <li>Algorithm {winningData.algorithm}</li>
                            <li>Matching numbers {matchingNumbers.length > 0 ? matchingNumbers.join(", ") : "None"}</li>
                        </ul>
                        <br />
                        <button className="clear-button" type="button" onClick={reset}>Reset</button>
                    </div>
                ) : isSubmitting === true ? (
                    <div>
                        Loading ...
                    </div>
                ) : (
                    <div className="max-w-[400px] w-full space-y-6 px-4">
                        <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
                            <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                                Make your lottery picks
                            </p>
                            <div className="flex flex-wrap">
                                {[...Array(69)].map((_, index: number) => (
                                    <label className="lottery-label" key={index + 1}>
                                        <input
                                            type="checkbox"
                                            name="pick"
                                            value={index + 1}
                                            checked={selections.includes(index + 1) === true}
                                            onChange={handleChange}
                                        />
                                        &nbsp;&nbsp;{index + 1}
                                    </label>
                                ))}
                            </div>
                            <div className="button-div">
                                <button className="clear-button" type="button" onClick={clear}>Clear</button>
                                <button className="quickpick-button" type="button" onClick={quickPick}>Quick Pick</button>
                                <button className="submit-button" type="button" onClick={submit}>Submit</button>
                            </div>
                        </nav>
                    </div>
                )}
                <footer></footer>
            </div>
        </main>
    );
}