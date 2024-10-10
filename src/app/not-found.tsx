import ElipsysIcon from "@/assets/icons/branding/elipsys-large.svg";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-y-5 text-white">
      <ElipsysIcon className="w-[180px]" />
      <p className="text-sb1">404 Page Not Found</p>
    </div>
  );
}
