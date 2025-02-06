import Loading from "@/assets/images/loading.svg";

export default function LoadingPage() {
  return (
    <>
      <div className="bg-black flex justify-center items-center h-screen">
        <img src={Loading} alt="loading" />
      </div>
    </>
  );
}
