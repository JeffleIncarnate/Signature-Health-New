"use client";

export default function Home() {
  return (
    <main className="text-2xl">
      <button
        onClick={async () => {
          await fetch("/api/emails", { method: "POST" });
        }}
      >
        Send Email!
      </button>
    </main>
  );
}
