// import { useEffect, useState } from "react";

import { countUsers } from "../lib/prisma";

export default async function VisitorCounter() {
  const userNumber = await countUsers();

  return (
    <div>
      <p className="font-light">Visitor Count: {userNumber}</p>
    </div>
  );
}