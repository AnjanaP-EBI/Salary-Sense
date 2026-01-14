"use client";

import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";

import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { BsCalendarDateFill } from "react-icons/bs";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { toast } from "sonner";
import { FaCircleCheck, FaCircleMinus } from "react-icons/fa6";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { useApp } from "@/context/AppContext";
import { formatNumber } from "@/lib/utils";
import { parse } from "path";

// Define types
type Expense = {
  id: string | number;
  Name: string;
  AmountValue: string;
  done: boolean;
  date?: Date;
  category?: string;
};

type MonthlyExpansesProps = {
  expenses: Expense[];
  onAddExpense: (expense: Omit<Expense, "id" | "done">) => void;
  onToggleExpense: (id: string | number) => void;
  onDeleteExpense: (id: string | number) => void;
};

export function MonthlyExpanses({
  expenses,
  onAddExpense,
  onToggleExpense,
  onDeleteExpense,
}: MonthlyExpansesProps) {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  // Form inputs
  const [expanseName, setExpanseName] = useState("");
  const [expanseAmount, setExpanseAmount] = useState("");
  const [category, setCategory] = useState("");

  const [doneExpensesTotal, setDoneExpensesTotal] = useState(0);

  const handleAddExpense = () => {
    if (!expanseName || !expanseAmount || !category) {
      toast.error("Please fill in all required fields");
      return;
    }

    onAddExpense({
      Name: expanseName,
      AmountValue: expanseAmount,
      date: date,
      category: category,
    });

    // Reset form
    setExpanseName("");
    setExpanseAmount("");
    setDate(undefined);
    setCategory("");
    setDialogOpen(false);

    toast.success("Expense Added Successfully", {
      description: "Your new expense has been added to the dashboard.",
    });
  };

  const TotalMonthlyExpenses = expenses.reduce(
    (total, expense) => total + parseFloat(expense.AmountValue || "0"),
    0
  );

  const [totalExpenses, setTotalExpenses] = useState(0);
  useEffect(() => {
    const total = expenses.reduce((sum, expense) => sum + parseFloat(expense.AmountValue || "0"), 0);
    setTotalExpenses(total);
  }, [expenses]);

  const {currency} = useApp();

  return (
    <div className="w-full h-[75%] justify-between border rounded-lg shadow-lg">
      <div className="w-full h-[6%] pl-[2%] pr-[1%] items-center justify-between flex flex-row bg-blue-800 dark:bg-[#696969] dark:border-[#525252] rounded-t-md">
        <h1 className="font-medium text-white text-xl">
          This month Expenses
        </h1>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger className="px-[3%] text-xl font-medium text-black py-[0.5%] border border-white rounded bg-white shadow-lg hover:bg-gray-100">
            + Add
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="font-medium text-lg">
                Add New Expenses
              </DialogTitle>
            </DialogHeader>
            <div className="flex flex-row gap-10 mt-2 w-full items-center">
              <div className="w-5/6 flex flex-col gap-3">
                <Input
                  className="h-12 w-full"
                  placeholder="Expense Name"
                  value={expanseName}
                  onChange={(e) => setExpanseName(e.target.value)}
                />
                <Input
                  placeholder="Amount"
                  type="number"
                  value={expanseAmount}
                  onChange={(e) => setExpanseAmount(e.target.value)}
                />
                <div>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-between text-gray-500 font-normal"
                        id="date"
                      >
                        {date ? date.toLocaleDateString() : "Select date"}
                        <BsCalendarDateFill />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {/* category radio group */}
              <div className="w-1/3 flex flex-col items-center">
                <h1 className="pb-2 text-lg font-semibold">Category</h1>
                <RadioGroup value={category} onValueChange={setCategory}>
                  <div className="text-md gap-2 flex flex-row items-center">
                    <RadioGroupItem value="Housing" id="housing" />
                    <label htmlFor="housing">Housing</label>
                  </div>
                  <div className="text-md gap-2 flex flex-row items-center">
                    <RadioGroupItem value="Food" id="food" />
                    <label htmlFor="food">Food</label>
                  </div>
                  <div className="text-md gap-2 flex flex-row items-center">
                    <RadioGroupItem value="Transport" id="transport" />
                    <label htmlFor="transport">Transport</label>
                  </div>
                  <div className="text-md gap-2 flex flex-row items-center">
                    <RadioGroupItem value="Other" id="other" />
                    <label htmlFor="other">Other</label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="flex flex-row items-center justify-end gap-2">
              <Button
                size="lg"
                className="mt-4 bg-blue-800 hover:bg-blue-900"
                onClick={handleAddExpense}
              >
                Add
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="  bg-[#fdfcfd] py-[1%] h-[88%]">
        <div className="w-full h-full overflow-y-auto py-[3%]">
          {/* <div className=" flex flex-row w-full h-[5%] px-[2%] border-b  border-gray-300 text-lg font-semibold">
            <div className="w-2/3 pl-[6%] pb-1">Expanse</div>
            <div className="w-1/3 justify-end flex pb-1">Amount</div>
          </div> */}
          <ScrollArea>
            {expenses.map((expense) => (
              <div
                key={expense.id}
                className="flex flex-row justify-between items-center text-xl pt-[1%] "
              >
                <div className="p-[1.5%] flex flex-row gap-[1%]">
                  {expense.done ? (
                    <FaCircleCheck size="20px" color="green" />
                  ) : (
                    <FaCircleCheck size="20px" color="#d3d3d3" />
                  )}
                </div>
                <ContextMenu>
                  <div className="w-2/3">
                    <ContextMenuTrigger>
                      <div className="w-full pl-3">{expense.Name}</div>
                    </ContextMenuTrigger>
                  </div>

                  <ContextMenuContent>
                    <ContextMenuItem
                      onClick={() => onToggleExpense(expense.id)}
                    >
                      {expense.done ? "Mark As Undone" : "Mark As Done"}
                    </ContextMenuItem>
                    <ContextMenuItem
                      onClick={() => {
                        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle className="font-medium text-lg">
                                Edit Expenses
                              </DialogTitle>
                            </DialogHeader>
                            <div className="flex flex-row gap-15 mt-4 w-full items-center">
                              <div className="w-2/3 flex flex-col gap-3">
                                <Input
                                  placeholder="Expense Name"
                                  value={expanseName}
                                  onChange={(e) =>
                                    setExpanseName(e.target.value)
                                  }
                                />
                                <Input
                                  placeholder="Amount"
                                  type="number"
                                  value={expanseAmount}
                                  defaultValue={expense.AmountValue}
                                  onChange={(e) =>
                                    setExpanseAmount(e.target.value)
                                  }
                                />
                                <div>
                                  <Popover open={open} onOpenChange={setOpen}>
                                    <PopoverTrigger asChild>
                                      <Button
                                        variant="outline"
                                        className="w-full justify-between text-gray-500 font-normal"
                                        id="date"
                                      >
                                        {date
                                          ? date.toLocaleDateString()
                                          : "Select date"}
                                        <BsCalendarDateFill />
                                      </Button>
                                    </PopoverTrigger>
                                    <PopoverContent
                                      className="w-auto p-0"
                                      align="start"
                                    >
                                      <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                      />
                                    </PopoverContent>
                                  </Popover>
                                </div>
                              </div>

                              {/* category radio group */}
                              <div className="w-1/3 flex flex-col">
                                <h1 className="pb-3 text-sm font-semibold">
                                  Category
                                </h1>
                                <RadioGroup
                                  value={category}
                                  onValueChange={setCategory}
                                >
                                  <div className="text-sm gap-2 flex flex-row items-center">
                                    <RadioGroupItem
                                      value="Housing"
                                      id="housing"
                                    />
                                    <label htmlFor="housing">Housing</label>
                                  </div>
                                  <div className="text-sm gap-2 flex flex-row items-center">
                                    <RadioGroupItem value="Food" id="food" />
                                    <label htmlFor="food">Food</label>
                                  </div>
                                  <div className="text-sm gap-2 flex flex-row items-center">
                                    <RadioGroupItem
                                      value="Transport"
                                      id="transport"
                                    />
                                    <label htmlFor="transport">Transport</label>
                                  </div>
                                  <div className="text-sm gap-2 flex flex-row items-center">
                                    <RadioGroupItem value="Other" id="other" />
                                    <label htmlFor="other">Other</label>
                                  </div>
                                </RadioGroup>
                              </div>
                            </div>

                            <div className="flex flex-row items-center justify-end gap-2">
                              <Button
                                className="mt-4 bg-blue-800 hover:bg-blue-900"
                                onClick={handleAddExpense}
                              >
                                Update
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>;
                      }}
                    >
                      Edit
                    </ContextMenuItem>
                    <ContextMenuItem
                      onClick={() => {
                        onDeleteExpense(expense.id);
                        toast.success("Expense removed");
                      }}
                    >
                      Remove
                    </ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
                <div className="w-1/3 justify-end flex pr-3">
                  {currency}{formatNumber(expense.AmountValue)}
                </div>
              </div>
            ))}
          </ScrollArea>
        </div>
      </div>

      <div className="h-[6%] bg-blue-900 dark:bg-[#696969] rounded-b-lg flex flex-row justify-between items-center">
        <h1 className="pl-3 text-white text-xl font-medium">
          Total Expenses
        </h1>
        <h2 className="pr-3 text-white text-xl font-medium">
          {currency}{formatNumber(TotalMonthlyExpenses)}
          {/* {setTotalExpenses} */}

        </h2>
      </div>
    </div>
  );
}
