import Link from "next/link";
export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="grid grid-cols-2 gap-0.5">
        <img className="w-[150px]" src="/image/image.png" alt="" />
      </div>
    </Link>
  )
}