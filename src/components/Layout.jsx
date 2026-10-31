import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './Navbar';
import EventAnnouncement from './EventAnnouncement';
import Footer from './Footer';
import { CursorGlow } from './ui-bits';
import { getCurrentSiteEvent } from '../data/events';

function ScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function Layout({ children }) {
  const [announcement, setAnnouncement] = useState(getCurrentSiteEvent);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setAnnouncement(getCurrentSiteEvent());
    }, 60_000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    window.__lenis = lenis;
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-ink font-sans text-zinc-100 antialiased"
      style={{ '--site-announcement-height': announcement ? '2.5rem' : '0px' }}
    >
      <ScrollReset />
      <CursorGlow />
      <EventAnnouncement announcement={announcement} />
      <Navbar announcementActive={Boolean(announcement)} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
