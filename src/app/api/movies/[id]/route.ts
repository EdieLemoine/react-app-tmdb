import { type NextRequest, NextResponse } from 'next/server';
import { getTmdbApi } from '@/lib/server/getTmdbApi';

const api = getTmdbApi();

export const GET = async (_: NextRequest, { params }: { params: { id: number } }) => {
  const movie = await api.getMovie(params.id);

  return NextResponse.json(movie);
};
