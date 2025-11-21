
export function LastIncomeBalance () {

    const lastIncomeBalance = "1,320,070"

    return(
        <div className="flex flex-row items-center  w-full h-20 border border-gray-300 shadow rounded-xl">
            <div className="w-1/3 pl-5 text-xs font-medium border-r-2">Balance of last Income</div>
            <div className="w-2/3 flex flex-row items-baseline-last pl-5">
            <h1 className="text-sm font-semibold">Rs.</h1>
            <h2 className="text-2xl font-semibold">{lastIncomeBalance}</h2>
            </div>
        </div>
    )
}