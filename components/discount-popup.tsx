"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, X } from "lucide-react";

const ONE_HOUR_MS = 60 * 60 * 1000;
const STORAGE_KEY = "scaleflow_discount_popup_closed";

function formatTime(ms: number) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

export function DiscountPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(ONE_HOUR_MS);
  const [mounted, setMounted] = useState(false);

  const endTime = useMemo(() => Date.now() + ONE_HOUR_MS, []);

  useEffect(() => {
    setMounted(true);
    // For demo purposes, always show the popup (comment this out in production)
    const timer = setTimeout(() => setIsOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setTimeLeft(endTime - Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, [endTime, isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, Date.now().toString());
    }
  };

  if (!isOpen || !mounted) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 p-4">
      <div className="relative w-full max-w-md rounded-3xl border border-border bg-card p-6 shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close discount offer"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-3 text-sm text-accent">
          <Sparkles className="h-4 w-4" />
          Limited-time offer
        </div>
        <h3 className="mt-3 font-serif text-2xl text-foreground">
          50% off for the next {formatTime(timeLeft)}
        </h3>
        <p className="mt-3 text-sm text-muted-foreground">
          Lock in a premium launch package today and receive a full conversion audit included.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/subscription" className="w-full sm:w-auto">
            <Button className="w-full rounded-full px-6">Subscribe & Save</Button>
          </Link>
          <Button variant="outline" className="w-full sm:w-auto rounded-full px-6" onClick={handleClose}>
            Not now
          </Button>
        </div>
      </div>
    </div>
  );
}
