import Loader from "@/components/ui/Loader";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050507] text-[#f4f4f7]">
      <Loader
        size="lg"
        variant="accent"
        label="LOADING CONTENT..."
      />
    </div>
  );
}
