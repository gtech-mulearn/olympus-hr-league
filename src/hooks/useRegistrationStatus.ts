import { useEffect, useState } from "react";

export function useRegistrationStatus() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosed, setIsClosed] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Event is complete; keep this hook stable for any legacy callers.
    setIsOpen(false);
    setIsClosed(true);
    setLoading(false);
  }, []);

  return { isOpen, isClosed, loading };
}
