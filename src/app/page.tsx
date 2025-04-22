"use client";

import Image from "next/image";
import { useState } from "react";
import { format } from "date-fns";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import bannerImg from "../../public/images/bannerimg.png"; // Adjust as needed

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [ampm, setAmpm] = useState("AM");

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-10 bg-gray-50">
      <div className="relative max-w-4xl w-full rounded-xl overflow-hidden shadow-lg">
        {/* Banner image */}
        <Image
          src={bannerImg}
          alt="Banner image"
          className="w-full h-auto object-cover"
        />

        {/* Overlay text */}
        <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-white text-4xl sm:text-5xl font-bold drop-shadow-xl">
          BusNow
        </h1>

        {/* Floating search box */}
        <div className="absolute bottom-60 left-1/2 -translate-x-1/2 bg-white border rounded-xl shadow-md px-4 py-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-[90%] sm:w-auto">
          {/* From input */}
          <Input placeholder="From" className="w-full sm:w-40 font-semibold" />

          {/* To input */}
          <Input placeholder="To" className="w-full sm:w-40 font-semibold" />

          <div className="flex gap-2 items-center">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full sm:w-40 justify-start text-left font-semibold"
                >
                  {date ? format(date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <Select value={ampm} onValueChange={setAmpm}>
              <SelectTrigger className="w-20">
                <SelectValue placeholder="AM/PM" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="AM">AM</SelectItem>
                <SelectItem value="PM">PM</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </section>
  );
}
