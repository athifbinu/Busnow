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
import aboutusimg from "../../public/images/aboutus.png";

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [ampm, setAmpm] = useState("AM");

  return (
    <div>
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
            <Input
              placeholder="From"
              className="w-full sm:w-40 font-semibold"
            />

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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
            About Us
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <Image
                className="w-full rounded-2xl shadow-lg h-auto object-cover"
                src={aboutusimg}
                alt="About BusNow"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                Making Your Bus Journey Smarter
              </h2>
              <p className="text-gray-600 leading-relaxed ">
                BusNow helps you find real-time bus timings with ease. No more
                waiting in uncertainty — with our app, you can plan your journey
                efficiently and travel stress-free. We are committed to
                providing fast, accurate, and reliable information for all your
                daily commutes. BusNow helps you find real-time bus timings with
                ease. No more waiting in uncertainty — with our app, you can
                plan your journey efficiently and travel stress-free. We are
                committed to providing fast, accurate, and reliable information
                for all your daily commutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
            How it works
          </h1>
        </div>
      </section>
    </div>
  );
}
