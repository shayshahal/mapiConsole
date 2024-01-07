import { j as json } from './index-0087e825.js';

async function POST({ request }) {
  const data = await request.json();
  const accountURL = `http://localhost:5000/accounts/${data.id}`;
  console.log("accountURL", accountURL);
  await fetch(accountURL, {
    method: "patch",
    credentials: "include",
    body: JSON.stringify(data),
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  });
  const response = { status: "ok" };
  return json({ response }, { status: 200 });
}

export { POST };
//# sourceMappingURL=_server-09106154.js.map
