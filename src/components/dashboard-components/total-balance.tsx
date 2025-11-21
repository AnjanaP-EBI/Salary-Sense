import { Separator } from "@radix-ui/react-dropdown-menu"


export function TotalBalance() {

    const totalBalance = "140,070,000" ;
    return(
        <div className="flex flex-row items-center  w-full h-20 border border-gray-300 shadow rounded-xl">
            <div className="w-1/3 pl-5 text-xs font-medium border-r-2">Currunt Total Balance</div><Separator/>
            <div className="w-2/3 flex flex-row items-baseline-last pl-5">
            <h1 className="text-sm font-semibold">Rs.</h1>
            <h2 className="text-2xl font-semibold">{totalBalance}</h2></div>
        </div>
    )
}