"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function SuccessContent() {
  const searchParams = useSearchParams();
  const reference = searchParams.get("reference");

  useEffect(() => {
    if (reference) {
      fetch("/api/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reference }),
      })
      .then(res => res.json())
      .then(data => {
        console.log("Order saved:", data);
      })
      .catch(err => {
        console.error("Error verifying payment:", err);
      });
    }
  }, [reference]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">✅ Payment Successful!</h1>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
