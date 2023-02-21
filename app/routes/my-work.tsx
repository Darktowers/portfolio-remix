import { Outlet } from "@remix-run/react";

export default function Sales() {
  return (
    <div>
      <h1>Sales</h1>
      <div>
        <h1>Menu sito</h1>
      </div>
      <Outlet />
    </div>
  );
}
