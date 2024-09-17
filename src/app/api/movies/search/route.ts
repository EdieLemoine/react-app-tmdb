import { type NextRequest, NextResponse } from 'next/server';
import { getTmdbApi } from '@/lib/server/getTmdbApi';

const api = getTmdbApi();

export const GET = async (request: NextRequest) => {
  const { searchParams } = request.nextUrl;

  const query = searchParams.get('query');

  if (!query) {
    return NextResponse.error();
  }

  const page = Number(searchParams.get('page') ?? 1);

  const results = await api.searchMovies({ query, page });

  return NextResponse.json(results);
};
