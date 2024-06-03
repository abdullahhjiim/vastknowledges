import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

const HeroSection = ({title, isType}) => {
    return (
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-12 grainy">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          {!isType && <span className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium border shadow-lg">
            Hey, Welcome
          </span>}
          <h1 className="capitalize font-heading text-xl font-bold sm:text-2xl md:text-3xl lg:text-3xl">
           {title ? title : 'Learn Now, Lead Now.'} 
          </h1>
          <p className="max-w-[52rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            “You don&apos;t truly grasp something until you&apos;ve learned it
            in multiple ways.”
          </p>
          {!isType && <div className="flex items-center gap-3 flex-wrap justify-center">
            <p className="font-semibold">Get the latest blog in your inbox</p>
            <Link
              href="/register"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Subscribe
            </Link>
          </div>}
        </div>
      </section>
    )
}

export default HeroSection;