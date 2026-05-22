import Link from "next/link";
import { buttonClasses } from "@/styles/button";

export default function CheckoutSuccessPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center lg:py-32">
      <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        Order received
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-muted">
        Thank you for supporting BibleStem Threads. Your order helps fund free Bible
        studies through BibleStem.
      </p>
      <Link href="/" className={buttonClasses("primary", "mt-10 inline-flex")}>
        Return to BibleStem Threads
      </Link>
    </div>
  );
}
