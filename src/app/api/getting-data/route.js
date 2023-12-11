import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
    try {
        const result = 
            await sql`SELECT * FROM eit171
            WHERE date(date) = '2011-01-01';`;
            return NextResponse.json({result}, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
