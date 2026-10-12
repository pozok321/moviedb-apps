// app/api/checkout/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json(); // Terima data dari frontend
    const { movieId, qty } = body;

    // (Di sini nanti proses simpan ke Database pakai Prisma / SQL)
    console.log(`Menyimpan film ID ${movieId} sebanyak ${qty} ke database...`);

    // Kirim respons balik ke frontend kalau sukses
    return NextResponse.json({ success: true, message: "Tiket berhasil dibeli!" });
  } catch (err) {
    return NextResponse.json({ success: false, message: "Terjadi kesalahan server" }, { status: 500 });
  }
}
