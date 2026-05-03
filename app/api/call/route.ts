import { redirect } from 'next/navigation';

export async function GET() {
  redirect(`tel:${process.env.CONTACT_PHONE}`);
}
