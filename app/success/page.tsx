import { useEffect } from "react";

export default function SuccessPage() {

    useEffect(() => {
  const ref = new URLSearchParams(window.location.search).get("reference");

  if (ref) {
    fetch("/api/verify", {
      method: "POST",
      body: JSON.stringify({ reference: ref }),
    });
  }
}, []);
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">✅ Payment Successful!</h1>
    </div>
  );
}