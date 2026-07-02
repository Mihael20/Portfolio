"use client";

import dynamic from "next/dynamic";

export const GoogleAnalytics = dynamic(
  () => import("@/components/common/GoogleAnalytics"),
  { ssr: false }
);

export const WebVitals = dynamic(
  () => import("@/components/common/WebVitals"),
  { ssr: false }
);