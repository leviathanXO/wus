// import { useEffect, useState } from "react";

import { countUsers } from "../lib/prisma";

export default async function VisitorCounter() {
  const userNumber = await countUsers();

  return (
      <p className="text-center">
        Chuck Norris has acknowledged your presence, visitor #{userNumber}
      </p>
  );
}