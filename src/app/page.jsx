import Link from "next/link";

export const metadata = {
  title: "Home - Todo Manager",
};

export default function Home() {
  return (
    <div className="text-center mt-10">
      <p>
        Welcome to Todo Manager. Please{" "}
        <Link href="/login" className="underline text-blue-700">
          login
        </Link>{" "}
        to get started with writing todos.
      </p>
    </div>
  );
}
