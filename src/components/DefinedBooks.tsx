"use client";
import Link from "next/link";
import courseData from "../data/reader.json";
import { p } from "motion/react-client";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  author: string;
  year: number;
  rating: number;
  description: string;
  isRead: boolean;
  tags: string[];
}

const DefinedBooks = () => {
  const read_books = courseData.books.filter((course: Course) => course.isRead);
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2>Defined Books</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn with best
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justiify-center">
          {read_books.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-cols ml-2 items-start text-left flex-grow space-y-3">
                  <h3 className="text-lg font-bold text-white mr-3">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-300 ml-3">{course.description}</p>
                  <Link href={`/books/${course.id}`}>Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          view All courses
        </Link>
      </div>
    </div>
  );
};

export default DefinedBooks;
