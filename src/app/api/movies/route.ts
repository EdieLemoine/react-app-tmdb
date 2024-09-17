import { type NextRequest, NextResponse } from 'next/server';
import { getTmdbApi } from '@/lib/server/getTmdbApi';

const api = getTmdbApi();

export const GET = async (request: NextRequest) => {
  const { searchParams } = request.nextUrl;

  const page = Number(searchParams.get('page') ?? 1);
  const movies = await api.getMovies({ page });

  return NextResponse.json(movies);
};
