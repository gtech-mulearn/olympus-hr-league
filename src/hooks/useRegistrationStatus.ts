import { useEffect, useState } from "react";

export function useRegistrationStatus() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Registration window: opens Feb 18, 2026 and closes on Mar 3, 2026
    const registrationOpenDate = new Date(2026, 1, 18);
    const registrationCloseDate = new Date(2026, 2, 4); //month is 0-indexed, so 2 = March, 3 = 3rd
    const now = new Date();

    setIsOpen(now >= registrationOpenDate && now < registrationCloseDate);
    setIsClosed(now >= registrationCloseDate);
    setLoading(false);
  }, []);

  return { isOpen, isClosed, loading };
}
