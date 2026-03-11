'use client';

import Header from '@/components/Header';
import { TutorialLayout } from './TutorialLayout';
import { InstallationTutorialBody, type TabId } from './InstallationTutorialBody';
import { useLanguage } from '@/components/LanguageProvider';
import { useState } from 'react';

export default function InstallationTutorialPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabId>('firestick');
  const [openApp, setOpenApp] = useState({
    firestick: 0,
    android: 0,
    apple: 0,
    smarttv: 0,
    windows: 0,
    mag: 0,
  });
  const setOpen = (tab: TabId, index: number) =>
    () => setOpenApp((prev) => ({ ...prev, [tab]: prev[tab] === index ? -1 : index }));
  const isOpen = (tab: TabId, index: number) => openApp[tab] === index;

  return (
    <TutorialLayout>
      <Header />
      <InstallationTutorialBody
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openApp={openApp}
        setOpen={setOpen}
        isOpen={isOpen}
        t={t}
      />
    </TutorialLayout>
  );
}
