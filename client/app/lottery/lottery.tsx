


export function Lottery() {

    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
                <header className="flex flex-col items-center gap-9">
                    <div className="w-[400px] max-w-[100vw] p-4">
                        Lottery
                    </div>
                </header>
                <div className="max-w-[400px] w-full space-y-6 px-4">
                    <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
                        <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                            Select your numbers
                        </p>
                        <div className="flex flex-wrap">
                            {[...Array(69)].map((_, index:number) => (
                                <label className="lottery-label" key={index + 1}>
                                    <input
                                    type="checkbox"
                                    name="pick"
                                    //checked={selections.optionA}
                                    //onChange={handleChange}
                                    />
                                    &nbsp;&nbsp;{index + 1}
                                </label>
                            ))}
                        </div>
                    </nav>
                </div>
                <footer></footer>
            </div>
        </main>
    );
}