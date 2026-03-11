'use client';

import React from 'react';

export function TutorialLayout({ children }: { children: React.ReactNode }) {
  return <main className="min-h-screen bg-[#0a0a1a]">{children}</main>;
}
