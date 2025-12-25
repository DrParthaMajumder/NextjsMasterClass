"use client";

import {
  formatCurrency,
  formatDate,
  classNames,
  sleep,
  truncate,
  isEmail,
} from "../../utils/index";
import { useEffect, useState } from "react";

export default function UseUtilsDemo() {
  const [now, setNow] = useState<string>("");
  const [slept, setSlept] = useState(false);

  useEffect(() => {
    setNow(formatDate(new Date()));
    (async () => {
      await sleep(300);
      setSlept(true);
    })();
  }, []);

  const amount = 12345.67;
  const email = "user@example.com";
  const long =
    "This is a very long sentence that we will cut nicely with truncate.";

  return (
    <div className="max-w-xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Utils Demo</h1>

      <div className="space-y-1">
        <p>Now: {now}</p>
        <p>Money: {formatCurrency(amount)}</p>
        <p>Email valid: {String(isEmail(email))}</p>
        <p>Truncate: {truncate(long, 28)}</p>
      </div>

      <div
        className={classNames(
          "p-3 rounded",
          slept ? "bg-green-100" : "bg-yellow-100",
        )}
      >
        Slept: {String(slept)}
      </div>
    </div>
  );
}
