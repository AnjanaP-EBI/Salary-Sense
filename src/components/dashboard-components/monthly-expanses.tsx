import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Input } from "../ui/input";
import { useState } from "react";
import {
  Dialog,
  DialogDescription,
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

interface dashboardData {
  newExpanse: string;
  expanseAmount: number;
}

export function MonthlyExpanses() {
  const handleExpanseInput = () => {};
  const handleAmountInput = () => {};
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [open, setOpen] = useState(false);

  const [newExpanse, setnewExpanse] = useState();
  const [expanseAmount, setExpanseAmont] = useState();
  const [dashboardData, setDashboardData] = useState<dashboardData>({
    newExpanse: "",
    expanseAmount: 0,
  });

  return (
    <div className="w-full h-full justify-between rounded-lg">
      <div className="w-full h-8 pl-2 pr-1  items-center justify-between flex flex-row bg-gray-300 rounded-t-md">
        <h1 className="font-medium text-xs">This month Expanses</h1>
        <Dialog>
          <DialogTrigger className="px-3 text-xs font-medium  py-1 rounded bg-white hover:bg-gray-100">
            + Add New
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="font-medium text-lg">
                Add New Expanses
              </DialogTitle>
            </DialogHeader>
            <div className="flex flex-row gap-15 mt-4 w-full items-center">
              <div className="w-2/3 flex flex-col gap-3">
                <Input placeholder="Expanse Name" />
                <Input placeholder="Amount" />
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

              <div className="w-1/3 flex flex-col">
                <h1 className="pb-3 text-sm font-semibold">Category</h1>
                <RadioGroup>
                  <div className="text-sm gap-2 flex flex-row items-center">
                    <RadioGroupItem value="Housing" id="housing" />
                    <label htmlFor="Housing">Housing</label>
                  </div>
                  <div className="text-sm gap-2 flex flex-row items-center">
                    <RadioGroupItem value="Food" id="food" />
                    <label htmlFor="Food">Food</label>
                  </div>
                  <div className="text-sm gap-2 flex flex-row items-center">
                    <RadioGroupItem value="Transport" id="transport" />
                    <label htmlFor="Transport">Transport</label>
                  </div>
                  <div className="text-sm gap-2 flex flex-row items-center">
                    <RadioGroupItem value="Other" id="other" />
                    <label htmlFor="Other">Other</label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="flex flex-row items-center justify-end gap-2">
              <Button className=" mt-4 bg-blue-800 hover:bg-blue-900"
              onClick={() => 
                toast("Expanse Added Successfully",{ description: "Your new expanse has been added to the dashboard." }
                )}>
                Add
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="border">
        <div className="  w-full h-122">
          <ScrollArea></ScrollArea>
        </div>
      </div>
      <div className="h-8 bg-gray-300 rounded-b-lg flex flex-row justify-between items-center">
        <h1 className="pl-3  text-xs font-medium">Total Expanses</h1>
        <h2 className="pr-3  text-xs font-medium">700000</h2>
      </div>
    </div>
  );
}
