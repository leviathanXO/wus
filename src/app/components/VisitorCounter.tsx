"use client"

import { useEffect, useState } from "react";

// TODO: integrate prisma db & replace placeholder functions
export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    fetch("/api/visitor")
      .then((response) => response.json())
      .then((data) => setVisitorCount(data.visitorCount));
  }, []);

  return (
    <div>
      <p className="font-light">Visitor Count: {visitorCount}</p>
    </div>
  );
}