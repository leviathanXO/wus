import { countUsers } from "../lib/prisma";

export default async function VisitorCounter() {
  const userNumber = await countUsers();

  return (
      <p className="text-center text-sm md:text-base">
        Chuck Norris has acknowledged your presence, visitor #{userNumber}
      </p>
  );
};