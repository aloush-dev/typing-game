// export default async function handler(
//   req: { query: any },
//   res: { status: any }
// ) {
//   const { length, amount } = req.query;

//   try {
//     const response = await fetch(
//       `https://random-word-api.vercel.app/api?words=${amount}&length=${length}&type=uppercase`
//     );
//     const data = await response.json();
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch words" });
//   }
// }

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const amount = searchParams.get("amount");
  const length = searchParams.get("length");
  const res = await fetch(
    `https://random-word-api.vercel.app/api?words=${amount}&length=${length}&type=uppercase`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const response = await res.json();

  return Response.json(response);
}
