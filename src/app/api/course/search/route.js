import { getPrisma } from "@/libs/getPrisma";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const searchText = request.nextUrl.searchParams.get("searchText");
  const prisma = getPrisma();

  //Modify following line so that it find course with "searchText" variable
  const courses = await prisma.course.findMany({
    where: {
      title: {
        mode: "insensitive",
        contains: searchText,
      },
    },
    orderBy: {
      courseNo: "asc",
    },
  });

  return NextResponse.json({ ok: true, courses });
};
