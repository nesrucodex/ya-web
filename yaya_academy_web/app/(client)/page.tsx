"use client";
// import { Button } from "@/components/ui/button";
import { Button, Group, Input, useMantineTheme } from "@mantine/core";
import Image from "next/image";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@radix-ui/react-accordion";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "@/components/NavBar";
import { ArrowBigRight, ArrowRight, Search } from "lucide-react";
import { home_page_data, recent_courses as rc } from "./data/dumy";
import RecentCourses from "@/components/RecentCourses";
import Drawer from "@/components/Drawer";
import { useRef, useState } from "react";
import Footer from "@/components/Footer";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import HtmlParser from "@/components/HtmlParser";

function FirstIntroSection() {
	const list = {
		visible: { opacity: 1 },
		hidden: { opacity: 0 },
	};

	const item = {
		visible: { opacity: 1, x: 0 },
		hidden: { opacity: 0, x: -100 },
	};

	return (
		<div>
			{/* Intro section */}
			<div className="flex flex-col lg:flex-row mb-20 md:mt-12 relative">
				{/* Blurred background */}
				<div className="absolute h-full w-full gradient-background">
					<div className="relative h-full w-full opacity-70">
						<Image
							src="/landing/manTeaching.svg"
							alt="placeholder"
							fill
							objectFit="cover"
						/>
					</div>
				</div>

				{/* Image container */}
				<div className="flex-1 justify-center hidden lg:flex -mr-20 pl-36 z-0 w-full h-full py-5 backdrop-blur-2xl">
					<motion.div>
						<Image
							// src="/landing/manTeaching.svg"
							src="/landing/womanOnPc.svg"
							alt="placeholder"
							width="800"
							height="800"
						/>
					</motion.div>
				</div>

				{/* Text Container */}
				<motion.div
					initial={{
						x: -10,
					}}
					animate={{
						x: 0,
					}}
					transition={{
						duration: 20,
					}}
					className=" pl-3 z-10 inline lg:px-14 absolute"
				>
					<div className="space-y-10 mt-10 ml-20 backdrop-blur-lg rounded-lg border-2 border-black border-opacity-5 p-10 ">
						<p className="lg:text-6xl text-5xl font-medium text-center lg:text-left">
							<span className="text-4xl font-base text-gray-800 lg:ml-1">
								{" "}
								Learn about
							</span>{" "}
							<br /> <span className="">Construction </span> <br />{" "}
							<span className="text-highlight-foreground">Online</span>
						</p>
						<div className="z-10 w-[415px] rounded-3xl shadow-md bg-white border-[1px] border-gray-300 focus-within:shadow-xl transition-shadow">
							<Input
								placeholder="I want to learn..."
								radius="lg"
								width="100%"
								color="yellow"
								variant="unstyled"
								className="bg-transparent px-5 font-semibold"
								rightSection={<Search className="mr-2" />}
							/>
						</div>
						{/* <div className="bg-black bg-opacity-5 rounded-full">
							<Button
								variant="outline"
								radius={20}
								color="blue"
								fullWidth
								className="group bg-highlight-foreground text-highlight backdrop-blur-lg"
							>
								<div className="w-[200px] flex m-0 p-0 justify-center items-center">
									<p className="translate-x-3 lg:group-hover:translate-x-0 transition-all font-bo">
										Explore Courses
									</p>
									<ArrowRight className="opacity-0 group-hover:inline-block lg:group-hover:opacity-100 lg:group-hover:translate-x-3 transition-all duration-300 " />
								</div>
							</Button>
						</div> */}
					</div>
				</motion.div>

				{/* Search bar */}
				{/* <div className="  z-10 inline absolute bottom-36 left-36 w-[415px] rounded-3xl shadow-md bg-white border-[1px] border-gray-300 focus-within:shadow-xl transition-shadow">
					<Input
						placeholder="I want to learn..."
						radius="lg"
						width="100%"
						color="yellow"
						variant="unstyled"
						className="bg-transparent px-5 font-semibold"
						rightSection={<Search className="mr-2" />}
					/>
				</div> */}
				<div className="absolute bottom-36 left-36 bg-black bg-opacity-5 rounded-full">
					<Button
						variant="outline"
						radius={20}
						color="blue"
						fullWidth
						className="group bg-highlight-foreground text-highlight backdrop-blur-lg"
					>
						<div className="w-[200px] flex m-0 p-0 justify-center items-center">
							<p className="translate-x-3 lg:group-hover:translate-x-0 transition-all font-bo">
								Explore Courses
							</p>
							<ArrowRight className="opacity-0 group-hover:inline-block lg:group-hover:opacity-100 lg:group-hover:translate-x-3 transition-all duration-300 " />
						</div>
					</Button>
				</div>

				<motion.div className="absolute top-10 right-36 text-xl font-bold w-52 text-gray-600">
					<motion.span transition={{ duration: 2 }} variants={item}>
						Building{" "}
					</motion.span>
					<motion.span transition={{ duration: 2 }} variants={item}>
						Bridges,{" "}
					</motion.span>
					<motion.span transition={{ duration: 2 }} variants={item}>
						Skyscrapers,{" "}
					</motion.span>
					<motion.span transition={{ duration: 2 }} variants={item}>
						and{" "}
					</motion.span>
					<motion.span transition={{ duration: 2 }} variants={item}>
						Dreams
					</motion.span>
					{/* Building Bridges, Skyscrapers, and Dreams */}
				</motion.div>
			</div>
		</div>
	);
}

function SecondIntroSection() {
	return (
		<div className="flex items-center h-[calc(100vh-100px)]">
			<div className="flex flex-col gap-5 pl-32">
				{/* Text */}
				<div>
					<p className="lg:text-6xl text-5xl font-medium text-center lg:text-left">
						<span className="text-4xl font-base text-gray-800 lg:ml-1">
							{" "}
							Learn about
						</span>{" "}
						<br /> <span className="font-bold text-gray-700">Construction </span>{" "}
						<br /> <span className="text-highlight-foreground font-bold">Online</span>
					</p>
				</div>
				{/* Search */}
				<div className="  z-10 inline w-[415px] rounded-3xl shadow-md bg-white border-[1px] border-gray-300 focus-within:shadow-xl transition-shadow">
					<Input
						placeholder="I want to learn..."
						radius="md"
						width="100%"
						color="yellow"
						variant="unstyled"
						className="bg-transparent px-7 py-1 font-semibold"
						rightSection={<Search className="mr-2" />}
					/>
				</div>
				<div className="w-[50%]">
					<Button
						variant="filled"
						radius={20}
						color="blue"
						fullWidth
						className="group bg-highlight-foreground text-highlight"
					>
						<div className="w-[200px] flex m-0 p-0 justify-center items-center">
							<p className="translate-x-3 lg:group-hover:translate-x-0 transition-all">
								Explore Courses
							</p>
							<ArrowRight className="opacity-0 group-hover:inline-block lg:group-hover:opacity-100 lg:group-hover:translate-x-3 transition-all duration-300 " />
						</div>
					</Button>
				</div>
			</div>
			<div>
				<Image
					src="/landing/womanOnPc.svg"
					alt="placeholder"
					width="700"
					height="700"
				/>
			</div>
		</div>
	);
}

// let prevScrollPos = window.scrollY;
export default function Home() {
	const [showDrawer, setShowDrawer] = useState(false);

	return (
		<div
			className={
				showDrawer
					? "no-scrollbar overflow-clip overscroll-none"
					: "no-scrollbar overflow-clip"
			}
		>
			<FirstIntroSection />
			{/* <SecondIntroSection /> */}
			<div className="lg:px-32 px-3 flex flex-col items-center mb-28 mt-24">
				<HtmlParser data={home_page_data["self_intro_title"]} />
				<HtmlParser data={home_page_data["self_intro_pharagraph"]} />
			</div>
			<div className="flex flex-col items-center mb-20">
				<p className="font-semibold w-full text-center ">Recent Coures</p>
				<div className="flex flex-row w-full">
					<HtmlParser data={home_page_data["recent_courses_subtitle"]} />
					<ArrowRight className="justify-self-end hidden lg:inline-block" />
				</div>
				{/* recent courses cards */}
				<div className="flex items-center w-[100%] overflow-x-scroll space-x-6 px-3 lg:px-16 no-scrollbar mt-5">
					{rc.map((el) => {
						return (
							<Link key={el.id} href={`/single_course/${el.id}`} scroll={false}>
								{RecentCourses({ ...el })}
							</Link>
						);
					})}
				</div>
				<div className=" w-full flex justify-center mt-5">
					<div className="lg:w-48 w-44">
						<Button
							variant="filled"
							radius={20}
							color="blue"
							fullWidth
							className="group bg-highlight-foreground text-highlight"
						>
							<div className="w-[200px] flex m-0 p-0 justify-center items-center">
								<p className="translate-x-3 lg:group-hover:translate-x-0 transition-all">
									Explore Courses
								</p>
								<ArrowRight className="opacity-0 group-hover:inline-block lg:group-hover:opacity-100 lg:group-hover:translate-x-3 transition-all duration-300 " />
							</div>
						</Button>
					</div>
				</div>
				{/* </div> */}
			</div>

			{/* Popular Courses cards */}
			<div className="flex flex-col items-center mb-20">
				<p className="font-semibold w-full text-center">Popular Coures</p>
				<div className="flex flex-row w-full">
					<HtmlParser data={home_page_data["popular_courses_subtitle"]} />
				</div>
				<div className="flex items-center w-[100%] overflow-x-scroll space-x-6 px-3 lg:px-16 no-scrollbar mt-5">
					{rc.map((el) => {
						return (
							<Link key={el.id} href={`/single_course/${el.id}`} scroll={false}>
								{RecentCourses({ ...el })}
							</Link>
						);
					})}
				</div>
				<div className=" w-full flex justify-center mt-5">
					<div className="lg:w-48 w-44">
						<Button
							variant="filled"
							radius={20}
							color="blue"
							fullWidth
							className="group bg-highlight-foreground text-highlight"
						>
							<div className="w-[200px] flex m-0 p-0 justify-center items-center">
								<p className="translate-x-3 lg:group-hover:translate-x-0 transition-all">
									Explore Courses
								</p>
								<ArrowRight className="opacity-0 group-hover:inline-block lg:group-hover:opacity-100 lg:group-hover:translate-x-3 transition-all duration-300 " />
							</div>
						</Button>
					</div>
				</div>
				{/* </div> */}
			</div>
		</div>
	);
}
